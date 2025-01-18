
function getLightBox(src) {
  let shade = document.createElement("div");
  shade.onclick = function () {
    document.body.removeChild(shade);
  }
  shade.className = "shade";

  let bigImage = document.createElement("img");
  bigImage.src = src;

  shade.appendChild(bigImage);

  document.body.appendChild(shade);
}