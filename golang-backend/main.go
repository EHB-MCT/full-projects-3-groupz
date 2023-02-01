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

	"github.com/gin-gonic/gin"
)

type Kunstwerk struct {
	Id string `json:"_id"`
	Img string `json:"img"`
}

type Data struct {
    Hash string `json:"10030004"`
}

type ImagesData struct {
	ImageUrl    string     `json:"imageUrl"`
	Kunstwerken []Kunstwerk `json:"kunstwerken"`
}

func handleUploadImageUrl(c *gin.Context) {
	var data ImagesData

	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// logic to handle uploaded image URL
	imgUrl := data.ImageUrl
	kunstwerken := data.Kunstwerken
	PngUrlToJpg(imgUrl)
	JpgUrlToJpg(kunstwerken[1].Img)

	
    file1, _ := os.Open("AI_generated_image.jpg")
    hash2Str := "974e5043aa0854e396790f42cf3070348306466261d689fa4c7eac1a4ba988b6"

defer file1.Close()

hasher := sha256.New()
_, _ = io.Copy(hasher, file1)
hash1 := hasher.Sum(nil)

hash2, err := hex.DecodeString(hash2Str)
if err != nil {
    fmt.Println(err)
    return
}

equalBits := 0
for i := 0; i < sha256.Size; i++ {
    for j := 0; j < 8; j++ {
        if (hash1[i] & (1 << uint(j))) == (hash2[i] & (1 << uint(j))) {
            equalBits++
        }
    }
}

similarity := 100.0 * float64(equalBits) / float64(sha256.Size * 8)
fmt.Printf("Similarity between images: %.2f%%\n", similarity)

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

func JpgUrlToJpg(url string) error {
    // Download the JPG image from the URL
    response, err := http.Get(url)
    if err != nil {
        return err
    }
    defer response.Body.Close()

    // Decode the JPG image
    img, err := jpeg.Decode(response.Body)
    if err != nil {
        return err
    }

    // Create a new JPG file
    jpgFile, err := os.Create("KIH_kunstwerk_image.jpg")
    if err != nil {
        return err
    }
    defer jpgFile.Close()

    // Encode the JPG image
    err = jpeg.Encode(jpgFile, img, &jpeg.Options{Quality: 75})
    if err != nil {
        return err
    }

    return nil
}

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
    resp, err := http.Get("http://localhost:6456/hashedJpg")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }

    var data []Data
    err = json.Unmarshal(body, &data)
    if err != nil {
        panic(err)
    }

    fmt.Println(data[0].Hash)
	// Router setup
	router := gin.Default()
	router.Use(Cors())
	router.POST("/uploadImageUrl", handleUploadImageUrl)
	router.Run("localhost:8080")

}