class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  
  let userArray = [];
  
  const usernameInput = document.getElementById("username-login");
  const passwordInput = document.getElementById("password-login");
  const loginButton = document.getElementById("login_button");
  const containerLogin = document.getElementById("container_login");
  const containerRegistration = document.getElementById("container_registration");
  const loginNowButton = document.getElementById("login_span");
  const registerNowButton = document.getElementById("register_span");
  
  const usernameRegisterInput = document.getElementById("username-register");
  const passwordRegisterInput = document.getElementById("password-register");
  const registerButton = document.getElementById("register_button");
  
  loginButton.addEventListener("click", onClickLogin);
  registerButton.addEventListener("click", onClickRegister);
  registerNowButton.addEventListener("click", onClickRegisterNow);
  loginNowButton.addEventListener("click", onClickLoginNow);
  
  
  function onClickLogin() {
    if (usernameInput.value.length < 6 || passwordInput.value.length < 6) {
      alert("Username or password incorrect ( min 6 characters needed )");
      usernameInput.value = "";
      passwordInput.value = "";
    } else {
      let atLeastOneUserExists = false;
  
      for (let index = 0; index < userArray.length; index++) {
        if (
          userArray[index].username == usernameInput.value &&
          userArray[index].password == passwordInput.value
        ) {
          atLeastOneUserExists = true;
        }
      }
  
      if (atLeastOneUserExists == true) {
        window.location.href = "categories.html";
      } else {
        alert("Username or password incorrect");
      }
    }
  }
  
  function onClickRegister() {
    if (usernameRegisterInput.value.length < 6 || passwordRegisterInput.value.length < 6) {
      alert("Username or password incorrect ( min 6 characters needed )");
    } else {
      let newUser = new User(usernameRegisterInput.value, passwordRegisterInput.value);
      userArray.push(newUser);
      alert("User registered successfully");
  
      
      usernameRegisterInput.value = "";
      passwordRegisterInput.value = "";
    }
  }


  function onClickRegisterNow() {
    containerLogin.style.display = "none";
    containerRegistration.style.display = "flex";
    registerButton.style.display = "block";
  }

  function onClickLoginNow() {
    containerLogin.style.display = "flex";
    containerRegistration.style.display = "none";
  }

  