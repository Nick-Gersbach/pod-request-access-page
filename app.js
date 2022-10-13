const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(emailInput.value);

  const errorMsg = document.querySelector(".error-msg");

  if (emailInput.value === "") {
    errorMsg.classList.add("show");
    errorMsg.textContent = "Email can't be empty!";
  }
});
