const phash = require("phash-im");
const fs = require("fs");

jsonProcessor("url-data-1000-1500", "hash-data-1000-1500");

/*
    This function will process over an existing json file 
    to convert image urls into hashes using the "phash-im" npm package
    @params inputJsonName: existing JSON file name (ex: url-data)
    @params outputJsonName: processed (new) JSON file name (ex: hash-data)
*/

async function jsonProcessor(inputJsonName, outputJsonName) {
  const images = JSON.parse(
    fs.readFileSync(`./input-data/${inputJsonName}.json`, "utf-8")
  );

  const imageHashes = [];
  for (const image of images) {
    const hash2 = await phash.compute(image.url);
    imageHashes.push({ hash: hash2, url: image.url });
  }
  fs.writeFile(
    `./output-data/${outputJsonName}.json`,
    JSON.stringify(imageHashes),
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
}
