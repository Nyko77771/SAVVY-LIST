
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
        var apiKey = 'API';
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


