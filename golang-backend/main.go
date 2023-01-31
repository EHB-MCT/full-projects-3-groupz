package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"image/jpeg"
	"image/png"
	"os"
)

func handleUploadImageUrl(c *gin.Context) {
	var imagesData struct {
		ImageUrl string `json:"imageUrl"`
	}

	if err := c.ShouldBindJSON(&imagesData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// logic to handle uploaded image URL
	imgUrl := imagesData.ImageUrl
	convertImage(imgUrl)

	c.JSON(http.StatusOK, gin.H{"message": "Image URL uploaded successfully"})
}

func convertImage(url string) error {
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
    jpgFile, err := os.Create("converted.jpg")
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