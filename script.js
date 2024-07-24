
document.addEventListener('DOMContentLoaded', function() {
  
    var registrationForm = document.getElementById('registrationForm');
    var fetchAddressButton = document.getElementById('fetchAddress'); 


    //  check if the registration form element exists to avoid any null reference errors.
    if (registrationForm) {
       
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Retrieving values from form inputs, showcasing DOM interactions to access user input.
            var personName = document.getElementById('personName').value;
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var passwordVerification = document.getElementById('passwordVerification').value;
            var eircode = document.getElementById('eircode').value;
            var address1 = document.getElementById('address1').value;
            var email = document.getElementById('email').value;

            // Validate the inputs
            if (validateRegistration(personName, username, password, passwordVerification, eircode, address1, email)) {
                // Alert the user if all validations pass.
                alert('Registration successful!\nName: ' + personName + '\nUsername: ' + username + 
                      '\nEmail: ' + email + '\nAddress: ' + address1 + '\nEircode: ' + eircode);
                registrationForm.reset(); // Reset the form fields
            }
        });
    } 

    // Checking if the button to fetch addresses exists
    if (fetchAddressButton) {
        // Add a click event listener to the button
        fetchAddressButton.addEventListener('click', function() {
            var eircode = document.getElementById('eircode').value;
            // Validate that the Eircode is not empty
            if (eircode.trim() === '') {
                alert('Please enter an Eircode.'); 
                return;
            }
            // AJAX request to fetch the address associated with the Eircode
            fetchAddressFromEircode(eircode);
        });
    } 

    // Define a function to validate registration inputs using basic conditional checks.
    function validateRegistration(personName, username, password, passwordVerification, eircode, address1, email) {
        // Series of if statements to ensure all form inputs meet certain criteria.
        if (personName.trim() === '') {
            alert('Name is required.');
            return false;
        }
        if (username.length < 6) {
            alert('Username must be at least 6 characters long.');
            return false;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return false;
        }
        if (password !== passwordVerification) {
            alert('Passwords do not match.');
            return false;
        }
        if (eircode.trim() === '') {
            alert('Eircode is required.');
            return false;
        }
        if (address1.trim() === '') {
            alert('Address is required.');
            return false;
        }
        // Utilizing HTML5 form validation for the email input to check if it's in a valid format.
        var emailInput = document.getElementById('email');
        if (!emailInput.checkValidity()) {
            alert('Invalid email format.');
            return false;
        }
        return true; // Return true if all validations pass.
    }

    // Define an asynchronous function to fetch an address from an Eircode using the Google Geocoding API.
    function fetchAddressFromEircode(eircode) {
        var apiKey = 'AIzaSyDhpD5xOoO9wiyudZyjApccTaLX8x0CX1E';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(eircode) + '&key=' + apiKey;

        // AJAX call using fetch API to handle network requests.
        fetch(url)
        .then(response => response.json()) // Parsing the JSON response.
        .then(data => {
            if (data.status === 'OK' && data.results.length > 0) {
                const result = data.results[0];
                // Update the DOM based on the response from the API.
                document.getElementById('address1').value = result.formatted_address;//tag in google json file
            }
        })
        .catch(error => {
            
            alert('Error fetching address. Please try again later.');
        });
    }

    // Accessing all elements with the 'infoBtn' class and attaching tooltips.
    var infoButtons = document.querySelectorAll('.infoBtn');
    infoButtons.forEach(function(button) {
        var validationInfo = button.getAttribute('data-tooltip');
        var tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = validationInfo;
        button.appendChild(tooltip);

        // Adding mouseover and mouseout events to show and hide tooltips.
        button.addEventListener('mouseover', function() {
            tooltip.style.display = 'block';
        });
        button.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});

//Suggested products

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const product = document.getElementById('product').value; // Get the product name from the input field

    // Send a POST request to the /search endpoint with the product name
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product }), // Send the product name as JSON in the request body
    })
    .then(response => response.json())
    .then(data => {
        const suggestionsList = document.getElementById('suggestionsList');
        suggestionsList.innerHTML = ''; // Clear previous suggestions

        if (data.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No products found'; // Display a message if no products are found
            suggestionsList.appendChild(li);
        } else {
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.ProductName} (${item.Size})`;
                li.addEventListener('click', function() {
                    fetchProductDetails(item.ProductName, item.Size); // Fetch details when a size is selected
                });
                suggestionsList.appendChild(li);
            });
        }
    })
    .catch(error => console.error('Error:', error)); // Log any errors
});

// Function to fetch and display product details for a selected size
function fetchProductDetails(productName, size) {
    // Send a POST request to the /product-details endpoint with the product name and size
    fetch('/product-details', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productName, size }), // Send the product name and size as JSON in the request body
    })
    .then(response => response.json())
    .then(data => {
        const suggestionsList = document.getElementById('suggestionsList');
        suggestionsList.innerHTML = ''; // Clear previous suggestions

        if (data.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No products found'; // Display a message if no details are found
            suggestionsList.appendChild(li);
        } else {
            const item = data[0];
            const formattedPrice = item.Price.toFixed(2); // Format the price to two decimal places
            const li = document.createElement('li');
            li.innerHTML = `${item.ProductName} (${item.Size}) - €${formattedPrice} at <a href="${item.ShopURL}" target="_blank">${item.Shop}</a>`;
            suggestionsList.appendChild(li); // Display the product details with a link to the shop
        }
    })
    .catch(error => console.error('Error:', error)); // Log any errors
}

