var logout = document.querySelector("#logoutBtn");

logout.addEventListener("click", function () {
  localStorage.removeItem("sessionActive");
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("sessionActive")) {
    window.location.href = "index.html";
  }
});