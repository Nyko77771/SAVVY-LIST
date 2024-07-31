//Edited Version
const searchData = [];
function getProduct() {
  document
    .getElementById("searchForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      const product = document.getElementById("product").value; // Get the product name from the input field
      //MongoDB Addition
      const formattedProduct =
        product.charAt(0).toUpperCase() + product.slice(1);
      try {
        const response = await fetch("/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          //MySQL Code
          /*
          body: JSON.stringify({ product }),
          */
          //MongoDB Code
          body: JSON.stringify({ formattedProduct }),
        });
        const data = await response.json();

        const suggestionsList = document.getElementById("suggestionsList");
        suggestionsList.innerText = "";

        //MySql Code
        /*
        data.forEach((innerArray) => {
          if (!innerArray || innerArray.length === 0) {
            const li = document.createElement("li");
            li.textContent = "No Product Found!";
            suggestionsList.appendChild(li);
          }
          innerArray.forEach((product) => {
            searchData.push(product);
          });
        });
        console.log(searchData);
        processData();
        */
        //MongoDB
        if (!data || data.length === 0) {
          const li = document.createElement("li");
          li.textContent = "No Product Found!";
          suggestionsList.appendChild(li);
        } else {
          searchData.length = 0;
          data.forEach((product) => {
            searchData.push({
              ProductName: product.ProductName,
              Size: product.Size,
            });
          });
          processData();
        }
      } catch (error) {
        console.log(`Error: ${error} occured`); // Log any errors
      }
    });
}

async function processData() {
  try {
    //Clear Fields First
    const suggestionsList = document.getElementById("suggestionsList");
    suggestionsList.innerText = "";

    //Populate Fields With Data Items
    searchData.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `Item: ${product.ProductName} Size: ${product.Size}`;
      li.addEventListener("click", () => {
        fetchProductDetails(product.ProductName, product.Size);
      });
      suggestionsList.appendChild(li);
    });
  } catch (error) {
    console.log(`Error ${error} occured while processing data.`);
  }
}

// Function to fetch and display product details for a selected size
async function fetchProductDetails(productName, size) {
  // Send a POST request to the /product-details endpoint with the product name and size

  const productsInfo = {
    productName: productName,
    size: size,
  };
  const myJSON = JSON.stringify(productsInfo);
  console.log(myJSON);

  try {
    const response = await fetch("/product-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: myJSON,
    });

    const data = await response.json();

    console.log(data);
    //MySQL Code
    /*
    data.forEach((innerLoop) => {
      const suggestionsList = document.getElementById("suggestionsList");
      suggestionsList.innerHTML = ""; // Clear previous suggestions
      innerLoop.forEach((product) => {
        if (!product || product.length === 0) {
          const li = document.createElement("li");
          li.textContent = "No products found"; // Display a message if no details are found
        } else {
          const item = product;
          console.log(item);
          const formattedPrice = item.Price;

          const li = document.createElement("li");
          li.innerHTML = `${item.ProductName} (${item.Size}) - €${formattedPrice} at <a href="${item.ShopURL}" target="_blank">${item.Shop}</a>`;
          suggestionsList.appendChild(li); // Display the product details with a link to the shop
          const backButton = document.createElement("li");
          backButton.addEventListener("click", () => {
            processData();
          });
          backButton.innerHTML = "<b>Return</b>";
          suggestionsList.appendChild(backButton);
        }
      });
    });
    */

    //MongoDB
    const suggestionsList = document.getElementById("suggestionsList");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    data.forEach((product) => {
      if (!product || product.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No products found"; // Display a message if no details are found
      } else {
        const item = product;
        console.log(item);
        const formattedPrice = item.Price;

        const li = document.createElement("li");
        li.innerHTML = `${item.ProductName} (${item.Size}) - €${formattedPrice} at <a href="${item.ShopURL}" target="_blank">${item.Shop}</a>`;
        suggestionsList.appendChild(li); // Display the product details with a link to the shop
        const backButton = document.createElement("li");
        backButton.addEventListener("click", () => {
          processData();
        });
        backButton.innerHTML = "<b>Return</b>";
        suggestionsList.appendChild(backButton);
      }
    });
  } catch (error) {
    console.log(`An error ${error} occurred in fetchProductDetails method`);
  }
}

//Bredas Code
/*
        .then((response) => response.json())
        .then((data) => {
          const suggestionsList = document.getElementById("suggestionsList");
          suggestionsList.innerHTML = ""; // Clear previous suggestions

          if (!data || data.length === 0) {
            const li = document.createElement("li");
            li.textContent = "No products found"; // Display a message if no products are found
            suggestionsList.appendChild(li);
          } else {
            data.forEach((item) => {
              const li = document.createElement("li");
              li.textContent = `${item.ProductName} (${item.Size})`;
              li.addEventListener("click", function () {
                fetchProductDetails(item.ProductName, item.Size); // Fetch details when a size is selected
              });
              suggestionsList.appendChild(li);
            });
          }
        })
        .catch((error) => console.error("Error:", error)); // Log any errors
    });
}

// Function to fetch and display product details for a selected size
function fetchProductDetails(productName, size) {
  // Send a POST request to the /product-details endpoint with the product name and size
  fetch("/product-details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productName, size }), // Send the product name and size as JSON in the request body
  })
    .then((response) => response.json())
    .then((data) => {
      const suggestionsList = document.getElementById("suggestionsList");
      suggestionsList.innerHTML = ""; // Clear previous suggestions

      if (data.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No products found"; // Display a message if no details are found
        suggestionsList.appendChild(li);
      } else {
        const item = data[0];
        const formattedPrice = item.Price.toFixed(2); // Format the price to two decimal places
        const li = document.createElement("li");
        li.innerHTML = `${item.ProductName} (${item.Size}) - €${formattedPrice} at <a href="${item.ShopURL}" target="_blank">${item.Shop}</a>`;
        suggestionsList.appendChild(li); // Display the product details with a link to the shop
      }
    })
    .catch((error) => console.error("Error:", error)); // Log any errors
}
*/
