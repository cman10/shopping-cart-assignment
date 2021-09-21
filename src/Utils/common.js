import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Caraousel from "../components/Caraousel.js";

export const getCaraousel = () => {
  const caraousel = document.getElementById("caraousel-container");
  caraousel.innerHTML = Caraousel.render();
};

export const renderHeaderAndFooter = () => {
  const header = document.getElementById("header-container");
  header.innerHTML = Header.render();
  const footer = document.getElementById("footer-container");
  footer.innerHTML = Footer.render();
};

export const getQueryParams = (props) => {
  const urlParams = new URLSearchParams(window.location.search);
  if (props) {
    return urlParams.get(props);
  }
  return urlParams;
};
