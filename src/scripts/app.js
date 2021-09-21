import HomeScreen from "../screenComponents/HomeScreen.js";
import { renderHeaderAndFooter } from "../Utils/common.js";
import { getCaraousel } from "../Utils/common.js";

const router = () => {
  renderHeaderAndFooter();
  const main = document.getElementById("main-container");
  main.innerHTML = HomeScreen.render();
  getCaraousel();
  showSlides(slideIndex);
};

window.addEventListener("load", router);
