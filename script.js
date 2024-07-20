document.addEventListener('DOMContentLoaded', () => {
    const mockProductPrices = {
        "supermarket1": {
            "apple": "€1.00",
            "banana": "€0.50",
            "orange": "€0.75",
            "milk": "€1.50",
            "bread": "€2.00"
        },
        "supermarket2": {
            "apple": "€1.10",
            "banana": "€0.55",
            "orange": "€0.80",
            "milk": "€1.45",
            "bread": "€2.05"
        }
    };

    window.createProductList = () => {
        const productsInput = document.getElementById('products').value;
        const products = productsInput.split(',').map(product => product.trim().toLowerCase());
        const productList = document.createElement('ul');

        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.className = 'product-item';

            const productText = document.createElement('span');
            productText.textContent = product.charAt(0).toUpperCase() + product.slice(1);

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-button';
            removeButton.textContent = '✖';
            removeButton.onclick = () => {
                listItem.remove();
            };

            listItem.appendChild(productText);
            listItem.appendChild(removeButton);
            productList.appendChild(listItem);
        });

        const productResultsDiv = document.getElementById('productResults');
        productResultsDiv.innerHTML = ''; // Clear previous results
        productResultsDiv.appendChild(productList);
    };

    window.generateProductList = () => {
        const productItems = document.querySelectorAll('.product-item span');
        const products = Array.from(productItems).map(item => item.textContent.toLowerCase());

        const productResultsDiv = document.getElementById('productResults');
        productResultsDiv.innerHTML = ''; // Clear previous results

        const supermarkets = Object.keys(mockProductPrices);
        supermarkets.forEach(supermarket => {
            const supermarketSection = document.createElement('div');
            supermarketSection.className = 'supermarket-section';

            const supermarketHeader = document.createElement('h3');
            supermarketHeader.textContent = supermarket.charAt(0).toUpperCase() + supermarket.slice(1);
            supermarketSection.appendChild(supermarketHeader);

            products.forEach(product => {
                const productPrice = mockProductPrices[supermarket][product];
                if (productPrice) {
                    const productItem = document.createElement('div');
                    productItem.className = 'product-item';
                    productItem.textContent = `${product.charAt(0).toUpperCase() + product.slice(1)}: ${productPrice}`;

                    const addToBasketButton = document.createElement('button');
                    addToBasketButton.className = 'add-to-basket';
                    addToBasketButton.textContent = 'Add to Basket';

                    productItem.appendChild(addToBasketButton);
                    supermarketSection.appendChild(productItem);
                }
            });

            productResultsDiv.appendChild(supermarketSection);
        });
    };
});
