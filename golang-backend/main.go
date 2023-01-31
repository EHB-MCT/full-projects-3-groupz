package main

import (
	"fmt"
	"image/jpeg"
	"image/png"
	"net/http"
	"os"

	"github.com/corona10/goimagehash"
	"github.com/gin-gonic/gin"
)

type Kunstwerk struct {
	Id string `json:"_id"`
	Img string `json:"img"`
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
    file2, _ := os.Open("KIH_kunstwerk_image.jpg")

	defer file1.Close()
    defer file2.Close()

	img1, _ := jpeg.Decode(file1)
    img2, _ := jpeg.Decode(file2)
	
	width, height := 8, 8
	hash1, _ := goimagehash.ExtAverageHash(img1, width, height)
    hash2, _ := goimagehash.ExtAverageHash(img2, width, height)

    distance, _ := hash1.Distance(hash2)

    // Calculate the similarity as 100 minus the Hamming distance
	similarity := 100 - distance
	fmt.Printf("Similarity between images: %d%%\n", similarity)
	

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
	// Router setup
	router := gin.Default()
	router.Use(Cors())
	router.POST("/uploadImageUrl", handleUploadImageUrl)
	router.Run("localhost:8080")

}