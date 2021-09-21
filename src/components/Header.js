const Header = {
  render: () => {
    return `
        <div class="header-container">
            <a href="./">
                <img src="../static/images/logo.png" alt="Sabka Bazaar Grocery Pvt. Ltd" class="header-image"/>
            </a>
            <div class="header-content">
                <div class="signin-container">
                    <a href="../src/signIn.html">Sign in</a>
                    <a href="../src/signUp.html">Register</a>
                </div>
                <div class="header-menus">
                    <div class="header-menu-items">
                        <a class="header-menu-item" href="./">Home</a>
                        <a class="header-menu-item" href="../src/products.html">Products</a>
                    </div>
                    <div class="header-cart-container" onclick="cartHandler()">
                        <img src="../static/images/cart.svg" alt="Cart" width="30px" class="cart"/>
                        <p>0 items</p>
                    </div>
                    <section id="overlay">
                    <div class= "cart-bg" role="dialog">
                    <div class="cart-overlay-content">
                    <main class="cart-container">
                    <section class="cart-header">
                            <article class="cart-info">
                                <h1 class="cart-item-label">My Cart  &nbsp;</h1><h2 class="cart-item-count"></h2>
                            </article>
                            <article class="cart-close-button" onclick="cartClickHandler()">&times;</article>
                        </section>
                        <section class="cart-item-container"></section>
                        <section class="cart-empty">
                        <p>No items in your cart</p>
                        <p>Your favourite items are just a click away.
                        </section>
                    </main>
                    <footer class="cart-footer">
                    <a class = "cart-start-shopping" href="#"><span>Start Shopping</span></a>
                    </footer>
                    </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
        `;
  },
};
export default Header;
