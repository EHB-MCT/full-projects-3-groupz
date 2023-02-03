const fs = require("fs");
const request = require("request");

let filteredOnEightDigitIdArray = [];

fs.readFile("./KIH-data.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  const obj = JSON.parse(data);
  console.log(`test-data.json length: ${obj.length}`);

  obj.forEach((element) => {
    if (element.Identificatienummer.length === 8) {
      filteredOnEightDigitIdArray.push(element.Identificatienummer);
    }
  });

  console.log(
    `filteredOnEightDigitIdArray length: ${filteredOnEightDigitIdArray.length}`
  );
  console.log(filteredOnEightDigitIdArray);

  processArray(filteredOnEightDigitIdArray.slice(1000, 1500))
    .then((newArray) => {
      console.log(`Array with working jpg's length: ${newArray.length}`);
      console.log(newArray);
      fs.writeFile(
        "url-data-1000-1500.json",
        JSON.stringify(newArray),
        (error) => {
          if (error) {
            console.error(error);
            return;
          }

          console.log("Array saved as JSON");
        }
      );
    })
    .catch((error) => {
      console.error(error);
    });
});

function isJPG(url) {
  return new Promise((resolve, reject) => {
    request({ url, method: "HEAD" }, (err, response) => {
      if (err) {
        return reject(err);
      }
      const contentType = response.headers["content-type"];
      const result = contentType && contentType.startsWith("image/jpeg");
      return resolve(result);
    });
  });
}

async function processArray(array) {
  let newArray = [];
  for (const item of array) {
    let url = `https://kunstinhuis.be/assets/files/artworks/${item.slice(
      0,
      4
    )}_${item.slice(4, 8)}.jpg`;
    await isJPG(url)
      .then((result) => {
        if (result === true) {
          newArray.push({ url: url });
        }
      })
      .catch((err) => console.error(err));
  }
  return newArray;
}

// async function getImageHash(url) {
//   return new Promise((resolve, reject) => {
//     https
//       .get(url, (response) => {
//         let data = [];

//         response.on("data", (chunk) => {
//           data.push(chunk);
//         });

//         response.on("end", () => {
//           const hash = crypto
//             .createHash("sha256")
//             .update(Buffer.concat(data))
//             .digest("hex");

//           resolve(hash);
//         });
//       })
//       .on("error", reject);
//   });
// }

// async function transformArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     const obj = array[i];
//     const hash = await getImageHash(obj.url);
//     obj.hash = hash;
//   }
//   return array;
// }
