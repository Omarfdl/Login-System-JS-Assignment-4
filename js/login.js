var loginEmailInput = document.querySelector("#email_login");
var loginPasswordInput = document.querySelector("#password_login");
var loginBtn = document.querySelector("#btn_login");
var errMsg = document.querySelector("#loginErrMsg");

if (localStorage.getItem("userKey") != null) {
  var users = JSON.parse(localStorage.getItem("userKey"));
}

loginBtn.addEventListener("click", isUserValid);

function isUserValid() {
  let isValid = false;

  for (let i = 0; i < users.length; i++) {
    if (
      loginEmailInput.value === users[i].userEmail &&
      loginPasswordInput.value === users[i].userPassword
    ) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    localStorage.setItem("sessionActive", "true");
    window.location.href = ".././home.html";
  } else {
    errMsg.setAttribute("style", "display: block !important;");
  }
  document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("sessionActive")) {
      window.location.href = "index.html";
    }
  });
}
