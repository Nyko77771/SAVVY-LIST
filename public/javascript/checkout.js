document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/checkout-basket");
    console.log("Response status: " + response.status);
    const data = await response.json();
    console.log(`My data is ${data}`);

    const basketItems = data;
    const basketItemsDiv = document.getElementById("basketItems");

    if (basketItems.length === 0) {
      basketItemsDiv.innerHTML = "<p>Your basket is empty.</p>";
    } else {
      const ul = document.createElement("ul");
      let totalAmount = 0;

      basketItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${
          item.product.charAt(0).toUpperCase() + item.product.slice(1)
        } - ${item.price}`;
        ul.appendChild(li);
        totalAmount += parseFloat(item.price.replace("€", ""));
      });

      basketItemsDiv.appendChild(ul);
      basketItemsDiv.innerHTML += `<p>Total Amount: €${totalAmount.toFixed(
        2
      )}</p>`;
    }
  } catch (error) {
    console.log("Error fetching in basket: " + error);
    const basketItemsDiv = document.getElementById("basketItems");
    basketItemsDiv.innerHTML = "<p>There was an error loading your basket</p>";
  }

  window.payNow = () => {
    const deliveryOption = document.querySelector(
      'input[name="delivery"]:checked'
    );
    if (!deliveryOption) {
      alert("Please select a delivery option.");
      return;
    }
    alert(
      "Thank you for your purchase! You have selected " +
        deliveryOption.value +
        "."
    );
    window.location.href = "/";
  };
});
