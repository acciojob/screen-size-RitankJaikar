//your JS code here. If required.
const width = document.querySelector("#width");
const height = document.querySelector("#height");

function updateDimensions() {
    width.innerText = window.innerWidth;
    height.innerText = window.innerHeight;
}

updateDimensions();

window.addEventListener("resize", updateDimensions);



