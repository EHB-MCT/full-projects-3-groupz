package main

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"image/jpeg"
	"image/png"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"sort"

	"github.com/gin-gonic/gin"
)

type SimilarityData struct {
    URL      string
    Similarity float64
}

type Data struct {
    ID    string `json:"id"`
    URL   string `json:"url"`
    Hash  string `json:"hash"`
}

type ImagesData struct {
	ImageUrl    string     `json:"imageUrl"`
}

func handleUploadImageUrl(c *gin.Context) {
	var AIdata ImagesData
    var similarityArray []SimilarityData

	if err := c.ShouldBindJSON(&AIdata); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	imgUrl := AIdata.ImageUrl
	PngUrlToJpg(imgUrl)

    resp, err := http.Get("http://localhost:6456/hashedJpg")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    var data []Data

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }

    err = json.Unmarshal(body, &data)
    if err != nil {
        panic(err)
    }

    file1, _ := os.Open("AI_generated_image.jpg")
    hasher := sha256.New()
    _, _ = io.Copy(hasher, file1)
    hash1 := hasher.Sum(nil)
    fmt.Printf("test", data)
    for i := 0; i < len(data); i++ {
        hash2, _ := hex.DecodeString(data[i].Hash)

        equalBits := 0
        for k := 0; k < sha256.Size; k++ {
            for l := 0; l < 8; l++ {
                if (hash1[k] & (1 << uint(l))) == (hash2[k] & (1 << uint(l))) {
                    equalBits++
                }
            }
        }

        similarity := 100.0 * float64(equalBits) / float64(sha256.Size * 8)
        // fmt.Printf("Similarity between image hash1 and %s: %.2f%%\n", data[i].URL, similarity)

        similarityData := SimilarityData{
            URL: data[i].URL,
            Similarity: similarity,
        }

        similarityArray = append(similarityArray, similarityData)
    }
    // fmt.Print("Similarity array:", similarityArray)


    sort.Slice(similarityArray, func(i, j int) bool {
        return similarityArray[i].Similarity > similarityArray[j].Similarity
    })
    
    var top5 []SimilarityData
    if len(similarityArray) > 5 {
        top5 = similarityArray[:5]
    } else {
        top5 = similarityArray
    }
    
    for i, similarityData := range top5 {
        fmt.Printf("%d. URL: %s, Similarity: %.2f%%\n", i + 1, similarityData.URL, similarityData.Similarity)
    }

	c.JSON(http.StatusOK, gin.H{"message": "Image URL uploaded successfully"})
}

func PngUrlToJpg(url string) error {
    // Download the PNG image from the URL
    response, err := http.Get(url)
    if err != nil {
        return err
    }
    defer response.Body.Close()

    // Decode the PNG image
    img, err := png.Decode(response.Body)
    if err != nil {
        return err
    }

    // Create a new JPG file
    jpgFile, err := os.Create("AI_generated_image.jpg")
    if err != nil {
        return err
    }
    defer jpgFile.Close()

    // Encode the PNG image as JPG
    err = jpeg.Encode(jpgFile, img, &jpeg.Options{Quality: 75})
    if err != nil {
        return err
    }

    return nil
}

// func JpgUrlToJpg(url string) error {
//     // Download the JPG image from the URL
//     response, err := http.Get(url)
//     if err != nil {
//         return err
//     }
//     defer response.Body.Close()

//     // Decode the JPG image
//     img, err := jpeg.Decode(response.Body)
//     if err != nil {
//         return err
//     }

//     // Create a new JPG file
//     jpgFile, err := os.Create("KIH_kunstwerk_image.jpg")
//     if err != nil {
//         return err
//     }
//     defer jpgFile.Close()

//     // Encode the JPG image
//     err = jpeg.Encode(jpgFile, img, &jpeg.Options{Quality: 75})
//     if err != nil {
//         return err
//     }

//     return nil
// }

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Max-Age", "86400")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		c.Writer.Header().Set("Access-Control-Expose-Headers", "Content-Length")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
		} else {
			c.Next()
		}
	}
}

func main() {
	router := gin.Default()
	router.Use(Cors())
	router.POST("/uploadImageUrl", handleUploadImageUrl)
	router.Run("localhost:8080")

}