////////////REGISTRATION FORM////////////////
var personName;
var username;
var password;
var passwordVerification;
var address1;
var address2;
var email;

document.addEventListener("DOMContentLoaded", function () {
  var registrationForm = document.querySelector("registrationForm"); // Select the form element

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
        address2,
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
          " " +
          address2
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
    address2,
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

    // Check the email input's validity using built-in HTML validation
    var emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
      alert("Invalid email format.");
      return false;
    }

    return true; // All validations passed
  }

  // Info buttons tooltips
  var infoButtons = document.querySelectorAll(".infoBtn");

  infoButtons.forEach(function (button) {
    // Get validation info text
    var validationInfo = button.getAttribute("data-tooltip");

    // Create tooltip element
    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = validationInfo;

    // Append tooltip to the button
    button.appendChild(tooltip);

    // Show tooltip on hover
    button.addEventListener("mouseOver", function () {
      tooltip.style.display = "block";
    });

    button.addEventListener("mouseOff", function () {
      tooltip.style.display = "none";
    });
  });
});

////////////LOGIN FORM////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Select the login form element
  var loginForm = document.getElementById("loginForm");

  // Add event listener to handle form submission
  loginForm.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Get values from the form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    validateLogin(username, password);
    //   // Validate the login inputs
    //   if (validateLogin(username, password)) {
    //     // If validation is successful, show a success message
    //     alert("Login successful!\nUsername: " + username);
    //     // Reset the form fields
    //     loginForm.reset();
    //   } else {
    //     // If validation fails, show an error message
    //     alert("Invalid username or password.");
    //   }
  });

  //Server Logic
  function validateLogin(username, password) {}

  //   // Local logic
  //   // Function to validate the login inputs
  //   function validateLogin(username, password) {
  //     // This will be replaced when we connect to a server with registered emails
  //     const validUsername = "testuser";
  //     const validPassword = "password123";

  //     // Check if the input username and password match the predefined values
  //     if (username === validUsername && password === validPassword) {
  //       return true; // Validation successful
  //     }
  //     return false; // Validation failed
  //   }
  // });
});
