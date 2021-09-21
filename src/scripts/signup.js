import { renderHeaderAndFooter } from "../Utils/common.js";
import SignUpPage from "../components/signUpScreen.js";
const router = () => {
  renderHeaderAndFooter();
  const main = document.getElementById("main-container");
  main.innerHTML = SignUpPage.render();
};

window.addEventListener("load", router);
