const API_KEY = import.meta.env.VITE_NASA_API_KEY;

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
    
document.querySelector("#app").innerHTML = `
    <h1 id="title">${data.title}</h1>
    ${media}
    <p id="explanation">${data.explanation}</p>
    <button><img></button>
    `;
})
.catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
})