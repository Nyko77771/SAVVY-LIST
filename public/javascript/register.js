////////////REGISTRATION FORM////////////////
var personName;
var username;
var password;
var passwordVerification;
var eircode;
var address1;
var address2;
var email;
var registrationForm;

document.addEventListener("DOMContentLoaded", function () {
  registrationForm = document.querySelector("form"); // Select the form element
  document
    .getElementById("fetchAddress")
    .addEventListener("click", fetchAddressFromEircode);

  // Add event listener to handle form submission
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form inputs
    personName = document.getElementById("personName").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    passwordVerification = document.getElementById(
      "passwordVerification"
    ).value;
    getEircode();
    address1 = document.getElementById("address1").value;
    address2 = document.getElementById("address2").value;
    email = document.getElementById("email").value;

    // Validate the form inputs
    if (
      validateRegistration(
        personName,
        username,
        password,
        passwordVerification,
        address1,
        email
      )
    ) {
      alert(
        "Registration successful!\nName: " +
          personName +
          "\nUsername: " +
          username +
          "\nEmail: " +
          email +
          "\nAddress: " +
          address1 +
          "\nEircode: " +
          eircode
      );
      registrationForm.submit();
      registrationForm.reset(); // Clear the form fields
    }
  });

  // Function to validate the registration inputs
  function validateRegistration(
    personName,
    username,
    password,
    passwordVerification,
    address1,
    email
  ) {
    // Check if the name is provided
    if (personName.trim() === "") {
      alert("Name is required.");
      return false;
    }

    // Check if the username is at least 4 characters long
    if (username.length < 6) {
      alert("Username must be at least 6 characters long.");
      return false;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    // Check if the passwords match
    if (password !== passwordVerification) {
      alert("Passwords do not match.");
      return false;
    }

    // Check if the address is provided
    if (address1.trim() === "") {
      alert("Address is required.");
      return false;
    }

    //Check if email address is provided
    if (email.trim() === "") {
      alert("Email is required.");
      return false;
    } else {
      return true;
    }
  }

  function getEircode() {
    eircode = document.getElementById("eircode").value;
    if (eircode.trim() === "") {
      console.log("No eircode given");
    } else {
      return eircode;
    }
  }

  async function fetchAddressFromEircode() {
    // Example: https://maps.googleapis.com/maps/api/geocode/json?address=A96X7F2&region=ie&key=API_KEY
    getEircode();
    var apiKey = "AIzaSyDhpD5xOoO9wiyudZyjApccTaLX8x0CX1E";
    var url =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      eircode +
      "&region=ie&key=" +
      apiKey;
    try {
      // AJAX call using fetch API to handle network requests.
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Response status: ${response.status}`);
      }
      const data = await response.json(); // Parsing the JSON response.
      const result = data.results[0];
      // Update the DOM based on the response from the API.
      document.getElementById("address1").value = result.formatted_address; //tag in google json file
    } catch (error) {
      console.log("Error fetching address. Please try again later.");
    }
  }

  // Accessing all elements with the 'infoBtn' class and attaching tooltips.
  var infoButtons = document.querySelectorAll(".infoBtn");
  infoButtons.forEach(function (button) {
    var validationInfo = button.getAttribute("data-tooltip");
    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = validationInfo;
    button.appendChild(tooltip);

    // Adding mouseover and mouseout events to show and hide tooltips.
    button.addEventListener("mouseover", function () {
      tooltip.style.display = "inline-block";
      tooltip.style.opacity = "1";
    });
    button.addEventListener("mouseout", function () {
      tooltip.style.display = "none";
      tooltip.style.opacity = "0";
    });
  });
});
