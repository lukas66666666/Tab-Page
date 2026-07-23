import "./button.js";
import "./clock.js";
const searchIcon = new URL("./icons/searchIcon.png", import.meta.url).href;

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const searchbar = `
    <div id="searchbar">
        <form action="https://www.google.com/search" method="get" id="search_form">
          <input type="text" name="q" placeholder="Search" class="input">
          <button type="submit" id="search_btn"><img src="${searchIcon}" alt="Search"></button>
            </button>
        </form>
    </div>`;

document.querySelector("#app").innerHTML = "<p>loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).
then(response => response.json()).then(data => {
    let media;

    if(data.media_type === "image") {
        media = `<img src="${data.url}" class="media"/>`;
} else  if(data.media_type === "video") {
        media = `<video src="${data.url}" class="media" controls></video>`;
} else {
    media = `<iframe src="${data.url}" class="media"></iframe>`;
}

const infoContainer = `
<div id="infoContainer">
    <h1>${data.title}</h1>
    <p>${data.explanation}</p>
</div>`;

document.querySelector("#app").innerHTML = `
    ${media}
    ${searchbar}
    ${infoContainer}
    `;
})
.catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
})