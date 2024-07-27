const productSuggestions = [];
const storedSupermarkets = [];
const storedPrice = [];
var basketItems = [];

getProduct();
getSupermarkets();
document.addEventListener("DOMContentLoaded", async () => {
  // const mockProductPrices = {
  //   supermarket1: {
  //     apple: "€1.00",
  //     banana: "€0.50",
  //     orange: "€0.75",
  //     milk: "€1.50",
  //     bread: "€2.00",
  //   },
  //   supermarket2: {
  //     apple: "€1.10",
  //     banana: "€0.55",
  //     orange: "€0.80",
  //     milk: "€1.45",
  //     bread: "€2.05",
  //   },
  // };

  // const productSuggestions = [
  //   { name: "Apple" },
  //   { name: "Banana" },
  //   { name: "Orange" },
  //   { name: "Milk" },
  // ];

  const searchInput = document.querySelector("#products");
  const suggestionPanel = document.querySelector("#suggestionsBox");
  const basketSymbol = document.getElementById("topBadges");

  searchInput.addEventListener("keyup", function () {
    const input = searchInput.value.toLowerCase().split(",").pop().trim();

    suggestionPanel.innerHTML = "";
    if (input === "") {
      return;
    }

    const filteredSuggestions = productSuggestions.filter(function (product) {
      return product.name.toLowerCase().startsWith(input);
    });

    filteredSuggestions.forEach(function (suggested) {
      const div = document.createElement("div");
      div.className = "suggestion";
      div.innerHTML = suggested.name;
      div.onclick = () => {
        let currentProducts = searchInput.value
          .split(",")
          .map((item) => item.trim());

        currentProducts.pop();

        currentProducts.push(suggested.name);

        searchInput.value = currentProducts.join(", ") + ", ";

        document.getElementById("suggestionsBox").value =
          currentProducts.join(", ");
        suggestionPanel.innerHTML = "";
        searchInput.focus();
      };

      suggestionPanel.appendChild(div);
    });

    if (filteredSuggestions.length === 0) {
      const noSuggestion = document.createElement("div");
      noSuggestion.className = "suggestion";
      noSuggestion.textContent = "No product found";
      suggestionPanel.appendChild(noSuggestion);
    }
  });

  window.createProductList = () => {
    const productsInput = document.getElementById("products").value;
    const products = productsInput
      .split(",")
      .map((product) => product.trim().toLowerCase())
      .filter((product) => product);
    const productList = document.createElement("ul");

    products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.className = "product-item";

      const productText = document.createElement("span");
      productText.textContent =
        product.charAt(0).toUpperCase() + product.slice(1);

      const removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.textContent = "✖";
      removeButton.onclick = () => {
        listItem.remove();
      };

      listItem.appendChild(productText);
      listItem.appendChild(removeButton);
      productList.appendChild(listItem);
    });

    const productResultsDiv = document.getElementById("productResults");
    productResultsDiv.innerHTML = ""; // Clear previous results
    productResultsDiv.appendChild(productList);
  };

  window.generateProductList = () => {
    const productItems = document.querySelectorAll(".product-item span");

    const products = Array.from(productItems).map((item) =>
      item.textContent.toLowerCase()
    );

    const productResultsDiv = document.getElementById("productResults");
    productResultsDiv.innerHTML = ""; // Clear previous results

    const supermarkets = storedSupermarkets;

    supermarkets.forEach((supermarket) => {
      const supermarketSection = document.createElement("div");
      supermarketSection.className = "supermarket-section";

      const supermarketHeader = document.createElement("h3");

      supermarketHeader.textContent =
        supermarket.supermarket.charAt(0).toUpperCase() +
        supermarket.supermarket.slice(1);

      supermarketSection.appendChild(supermarketHeader);

      //Change
      products.forEach((product) => {
        //Send product and supermarket
        getProductPrice(product, supermarket.supermarket).then(
          (productData) => {
            const productPrice = productData.price;
            const product = productData.product;

            if (productPrice) {
              const productItem = document.createElement("div");

              productItem.className = "product-item";

              productItem.textContent = `${
                product.charAt(0).toUpperCase() + product.slice(1)
              }: ${productPrice}`;

              const addToBasketButton = document.createElement("button");

              addToBasketButton.className = "add-to-basket";

              addToBasketButton.textContent = "Add to Basket";

              addToBasketButton.onclick = () => {
                console.log(product, productPrice);
                // CHANGE THIS
                updateBasketCount(product, productPrice);
              };

              productItem.appendChild(addToBasketButton);
              supermarketSection.appendChild(productItem);
            }
          }
        );
        productResultsDiv.appendChild(supermarketSection);
      });
    });
  };
});

async function updateBasketCount(product, price) {
  console.log(product, price);
  const basketIndicator = document.querySelector(".basketNumberIndicator");
  let currentCount = parseInt(basketIndicator.textContent) || 0;
  basketIndicator.textContent = currentCount + 1;

  try {
    addItemToBasket(product, price);
  } catch (error) {
    console.log(`Basket wasn't saved. Error: ${error} occured`);
  }
}

function addItemToBasket(product, price) {
  const item = { product, price };
  basketItems.push(item);
  console.log(basketItems);

  localStorage.setItem("basketItems", JSON.stringify(basketItems));
  sendBasketCount();
}

async function sendBasketCount() {
  const response = await fetch("/list-basket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(basketItems),
  });

  if (response.ok) {
    console.log("Sent basket succesffully");
  } else {
    console.log("Error occured while sending basket to server");
  }
  basketItems = [];
}

function clearData() {
  document.getElementById("products").value = "";
  document.getElementById("productResults").innerHTML = "";
  document.getElementById("suggestionsBox").innerHTML = "";
  document.getElementById("product-item").innerHTML = "";
}

async function getProduct() {
  const response = await fetch("/list-product");
  const data = await response.json();

  data.forEach((product) => {
    productSuggestions.push({ name: product.ProductName });
  });
}

async function getSupermarkets() {
  const response = await fetch("/list-supermarkets");
  const data = await response.json();
  data.forEach((shop) => {
    storedSupermarkets.push({ supermarket: shop.supermarket });
  });
}

async function getProductPrice(product, supermarket) {
  const productInfo = {
    product: product,
    supermarket: supermarket,
  };
  const myJSON = JSON.stringify(productInfo);
  const response = await fetch("/list-price", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: myJSON,
  });
  const data = await response.json();
  return data[0];
}
