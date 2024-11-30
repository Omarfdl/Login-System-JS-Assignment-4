var userNameInput = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signUpBtn = document.querySelector("#signUp");
var errMsg = document.querySelector("#signupErrMsg");
var successMsg = document.querySelector("#successMsg");
var existMsg = document.querySelector("#existMsg");

var users = [];

// Restore the data to the array from the localsotrage when refresh
if (localStorage.getItem("userKey") != null) {
  users = JSON.parse(localStorage.getItem("userKey"));
}

signUpBtn.addEventListener("click", addUser);
function addUser() {
  //check if the user's info exists or not
  for (let i = 0; i < users.length; i++) {
    let itUsers = users[i];
    if (
      userNameInput.value === itUsers.userName &&
      email.value === itUsers.userEmail &&
      password.value === itUsers.userPassword
    ) {
      existMsg.setAttribute("style", "display: block !important;");
      errMsg.setAttribute("style", "display: none !important;");
      successMsg.setAttribute("style", "display: none !important;");
      return;
    }
  }

  //check if the inputs is not empty
  if (
    userNameInput.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === ""
  ) {
    errMsg.setAttribute("style", "display: block !important;");
    successMsg.setAttribute("style", "display: none !important;");
    existMsg.setAttribute("style", "display: none !important;");
    return;
  } else {
    successMsg.setAttribute("style", "display: block !important;");
    errMsg.setAttribute("style", "display: none !important;");
    existMsg.setAttribute("style", "display: none !important;");
  }

  //store the inputs values in the array and the localstorage
  var user = {
    userName: userNameInput.value,
    userEmail: email.value,
    userPassword: password.value,
  };

  users.push(user);
  localStorage.setItem("userKey", JSON.stringify(users));
  clearInputs();
}

function clearInputs() {
  userNameInput.value = "";
  email.value = "";
  password.value = "";
}

console.log(users);
