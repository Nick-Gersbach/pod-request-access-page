const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(emailInput.value);
  ValidateEmail(emailInput);
});

function ValidateEmail(inputText) {
  const errorMsg = document.querySelector(".error-msg");
  const successMsg = document.querySelector(".success-msg");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value === "") {
    errorMsg.classList.add("show");
    errorMsg.textContent = "Email can't be empty!";
    return false;
  } else if (!inputText.value.match(emailRegex)) {
    errorMsg.classList.add("show");
    errorMsg.textContent = "Oops! Please check your email";
    return false;
  } else {
    errorMsg.classList.remove("show");
    successMsg.classList.add("show");
    successMsg.textContent = "Email successfully submitted!";
    return true;
  }
}

//1. When user submits form check to see if email input is empty. If it is empty display the error message "Email can't be empty!"

//2. When user submits form check to see if it matches regex format, if not display the error message "Oops! Please check your email"

//regex- /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// if (emailInput.value === "") {
//   errorMsg.classList.add("show");
//   errorMsg.textContent = "Email can't be empty!";
// } else if (!isValidEmail(email.value)) {
//   errorMsg.classList.add("show");
//   errorMsg.textContent = "Oops! Please check your email";
// }
