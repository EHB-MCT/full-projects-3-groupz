export async function getArtworkData() {
  let response = await fetch("http://localhost:6456/art");
  if (response.status == 200) {
    return await response.json();
  }
}
