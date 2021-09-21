const Caraousel = {
  render: () => {
    return ` 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="slideshow-container" id="caraousel-container">
                        <!-- Full-width images with number and caption text -->
                        <div class="mySlides fade">
                            <div class="numbertext">1 / 3</div>
                            <img src="../static/images/offers/offer1.jpg" style="width:100%" alt="sale_banner1">
                         
                        </div>
                      
    
                        <div class="mySlides fade">
                            <div class="numbertext">2 / 3</div>
                            <img src="../static/images/offers/offer2.jpg" style="width:100%" alt="sale_banner2">
                          
                        </div>
    
                        <div class="mySlides fade">
                            <div class="numbertext">3 / 3</div>
                            <img src="../static/images/offers/offer3.jpg" style="width:100%" alt="sale_banner3">
                          
                        </div>
    
                        <!-- Next and previous buttons -->
                        <a class="prev" onclick="plusSlides(-1)">PREV</a>
                        <a class="next" onclick="plusSlides(1)">NEXT</a>
                        </div>
                        <br>
    
                        <!-- The dots/circles -->
                        <div style="text-align:center">
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                       
                        </div>
                        <div class="banner-shadow"></div>
                        `;
  },
};
export default Caraousel;
