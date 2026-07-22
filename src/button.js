const btn = document.getElementById("infoBtn")

btn.addEventListener("click", () => {
    const container = document.getElementById("infoContainer");
    if (container.style.visibility === "hidden") {
        container.style.visibility = "visible";
    } else {
        container.style.visibility = "hidden"
    }
})