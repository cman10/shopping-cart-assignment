function cartHandler() {
  document.getElementById("overlay").style.display = "block";
}

function cartClickHandler() {
  document.getElementById("overlay").style.display = "none";
}

export { cartHandler, cartClickHandler };
