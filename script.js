let usernameMessage = document.querySelector("#username-validation");
let passwordMessage = document.querySelector("#password-validation");
let usernameInput = document.querySelector("#username-input");
let passwordInput = document.querySelector("#password-input");

function usernameValidation() {
  if (usernameInput.value.length < 12) {
    usernameMessage.style.color = "#fff";
    usernameMessage.innerHTML = "must contain 12 character";
    usernameMessage.style.display = "block";
  } else {
    usernameMessage.style.color = "#0091ff";
    usernameMessage.innerHTML = "correct username value";
  }
}
function passwordValidation() {
  if (passwordInput.value.length < 8) {
    passwordMessage.style.color = "#fff";
    passwordMessage.innerHTML = "Must contain 8 characters";
    passwordMessage.style.display = "block";
  } else {
    passwordMessage.style.color = "#0091ff";
    passwordMessage.innerHTML = "Correct password value";
  }
}


