import { renderHeaderAndFooter } from "../Utils/common.js";
import SignInPage from "../components/signInScreen.js";
const router = () => {
  renderHeaderAndFooter();
  const main = document.getElementById("main-container");
  main.innerHTML = SignInPage.render();
};

window.addEventListener("load", router);
