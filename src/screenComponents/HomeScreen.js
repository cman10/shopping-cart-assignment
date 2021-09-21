import categories from "../../server/categories/index.get.js";
const HomeScreen = {
  render: () => {
    return `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <ul class="card-container">
                ${categories
                  .map(
                    (category) => `
                    <li class="cat-card">
                        <img src="..${category.imageUrl}" alt="${category.name}" class="card-image"/>
                        <div class="card-content-div">
                            <h3>${category.name}</h3>
                            <p>${category.description}</p>
                            <a class="btn-anchor" href="products.html?categoryId=${category.id}">
                                <span class="button">Explore ${category.key}</span>
                            </a>
                        </div>
                    </li>
                `
                  )
                  .join("\n")}
            </ul>
        `;
  },
};

export default HomeScreen;
