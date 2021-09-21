import ProductScreen from "../screenComponents/ProductScreen.js";
import { renderHeaderAndFooter, getQueryParams } from "../Utils/common.js";
const router = () => {
  renderHeaderAndFooter();
  const main = document.getElementById("main-container");
  const catId = getQueryParams("categoryId");
  main.innerHTML = ProductScreen.render(catId);
};

window.addEventListener("load", router);
