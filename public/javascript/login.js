document.addEventListener("DOMContentLoaded", function async() {
  var loginForm = document.getElementById("loginForm");
  const loginBtn = document.getElementById("loginBtn");
  var loginMessage = document.getElementById("loginHidden");

  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    loginMessage.innerText = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
      alert("Please enter details");
      return false;
    } else {
      await testLogin(username, password);
    }
  });

  async function testLogin(username, password) {
    try {
      const userInfo = {
        username: username,
        password: password,
      };
      const myJSON = JSON.stringify(userInfo);
      console.log(myJSON);
      const response = await fetch("views/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: myJSON,
      });
      const data = await response.json();

      console.log(data);
      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        loginMessage.innerText = data.text;
      }
    } catch (error) {
      console.log(`Error ${error} occured while checking Login.`);
    }
  }
});
