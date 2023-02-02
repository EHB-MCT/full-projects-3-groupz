const info_artist = document.getElementById("infoo");

const meer_info = JSON.parse(localStorage.getItem('meer_info'));
const images = JSON.parse(localStorage.getItem('meer_info_images'));

console.log(meer_info);
console.log(images);

if (meer_info && images) {
    let html = '';

    html += `
    <img  style="width:50%; height : 50%; display:flex;"src="${images[0]}" alt="Image">
    <p>${meer_info}</p>
    `;

    info_artist.innerHTML = html;
}