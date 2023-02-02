export async function getArtworkData() {
  let response = await fetch("https://kunstinhuis.onrender.com/art");
  if (response.status == 200) {
    return await response.json();
  }
}
