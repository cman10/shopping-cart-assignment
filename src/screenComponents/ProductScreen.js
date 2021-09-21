import products from "../../server/products/index.get.js";
import categories from "../../server/categories/index.get.js";
const ProductScreen = {
  render: (categoryId) => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryId
    );
    const productList =
      filteredProducts.length === 0 ? products : filteredProducts;
    return `
            <div class="products-container">
                <ul class="product-categories">
                    ${categories
                      .map((category) => {
                        const activeClass =
                          category.id === categoryId ? "active-product" : "";
                        return `
                            <li class="category-li ${activeClass}" id="${category.id}">
                                <a class="category-anchor-btn" href="products.html?categoryId=${category.id}">${category.name}</a>
                                <span class="right">+</span>
                            </li>
                    `;
                      })
                      .join("\n")}
                </ul>
                <ul class="product-container">
                    ${productList
                      .map((product) => {
                        return `
                        <li class="product-card">
                            <h3>${product.name}</h3>
                            <div class="card-wrap">
                            <img src="..${product.imageURL}" alt="${product.name}" class="product-image"/>
                            <div>
                                <p class="product-desc">${product.description}</p>
                                <span>MRP Rs.${product.price}</span>
                                <button class="button">Buy now</button>
                            </div>
                            <div>
                        </li>
                    `;
                      })
                      .join("\n")}
                </ul>
            </div>
        `;
  },
};

export default ProductScreen;
