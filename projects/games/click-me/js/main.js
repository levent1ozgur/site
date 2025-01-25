const button = document.getElementById("unclickableButton");

button.addEventListener("mouseover", () => {
  const randomTop = Math.floor(Math.random() * window.innerHeight) + "px";
  const randomLeft = Math.floor(Math.random() * window.innerWidth) + "px";
  button.style.top = randomTop;
  button.style.left = randomLeft;
});
