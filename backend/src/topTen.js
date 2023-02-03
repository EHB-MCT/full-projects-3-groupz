const phash = require("phash-im");
const fs = require("fs");

const KIHartworks = JSON.parse(
  fs.readFileSync("../data/kunstwerken.json", "utf-8")
);

const imageHashes = [];
for (const KIHartwork of KIHartworks) {
  imageHashes.push({ hash: KIHartwork.hash, url: KIHartwork.url });
}

async function topTen(url) {
  console.log(url);
  const hash1 = await phash.compute(url);

  const similarities = [];
  for (const imageHash of imageHashes) {
    const diff = await phash.compare(hash1, imageHash.hash);
    similarities.push({
      similarity: (100 - diff).toFixed(2),
      url: imageHash.url,
    });
  }

  similarities.sort((a, b) => b.similarity - a.similarity);
  console.log(`The 5 most similar images:`);
  let topTenArray = [];
  for (let i = 0; i < 10; i++) {
    topTenArray.push({ url: similarities[i].url });
    console.log(
      `  - ${similarities[i].url} (Similarity: ${similarities[i].similarity}%)`
    );
  }
  return await topTenArray;
}

module.exports = topTen;
