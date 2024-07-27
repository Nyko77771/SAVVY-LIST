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

    const productSuggestions = [
        {name: "Apple"},
        {name:"Banana"},
        {name:"Orange"},
        {name:"Milk"}
    ];

    const searchInput = document.querySelector('#products');
    const suggestionPanel = document.querySelector('#suggestionsBox');

    searchInput.addEventListener('keyup', function(){
        const input = searchInput.value.toLowerCase().split(',').pop().trim();

        suggestionPanel.innerHTML = "";
        if (input === "") {
            return;
        }

        const filteredSuggestions = productSuggestions.filter(function(product) {
            return product.name.toLowerCase().startsWith(input);
        });

        filteredSuggestions.forEach(function(suggested) {
            const div = document.createElement('div');
            div.className = 'suggestion';
            div.innerHTML = suggested.name;
            div.onclick = () => {
                let currentProducts = searchInput.value.split(',').map(item => item.trim());
                currentProducts.pop();
                currentProducts.push(suggested.name);
                searchInput.value = currentProducts.join(', ') + ', ';
                document.getElementById('suggestionsBox').value = currentProducts.join(', ');
                suggestionPanel.innerHTML = '';
                searchInput.focus();
            };
            suggestionPanel.appendChild(div);
        });

        if (filteredSuggestions.length === 0) {
            const noSuggestion = document.createElement('div');
            noSuggestion.className = 'suggestion';
            noSuggestion.textContent = 'No product found';
            suggestionPanel.appendChild(noSuggestion);
        }
    });

    window.createProductList = () => {
        const productsInput = document.getElementById('products').value;
        const products = productsInput.split(',').map(product => product.trim().toLowerCase()).filter(product => product);
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
                    addToBasketButton.onclick = () => {
                        updateBasketCount(product, productPrice);
                    };

                    productItem.appendChild(addToBasketButton);
                    supermarketSection.appendChild(productItem);
                }
            });

            productResultsDiv.appendChild(supermarketSection);
        });
    };

    window.updateBasketCount = (product, price) => {
        const basketIndicator = document.querySelector('.basketNumberIndicator');
        let currentCount = parseInt(basketIndicator.textContent) || 0;
        basketIndicator.textContent = currentCount + 1;

        let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.push({ product, price });
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
    };

    window.clearData = () => {
        document.getElementById('products').value = '';
        document.getElementById('productResults').innerHTML = '';
        document.getElementById('suggestionsBox').innerHTML = '';
        document.getElementById('product-item').innerHTML = '';
    };
});
