// Select DOM elements
const form = document.getElementById("form");
const password1El = document.getElementById("password");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function displayFeedback(feedback, color) {
  message.textContent = feedback;
  message.style.color = color;
  messageContainer.style.borderColor = color;
  return;
}

function storeFormData() {
  const newUser = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  localStorage.setItem(`newUser-${newUser.name}`, JSON.stringify(newUser));

  return newUser;
}

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    displayFeedback("Please fill out all fields.", "red");
    return;
  }

  if (password1El.value !== password2El.value) {
    displayFeedback("Please match your passwords.", "red");
    return;
  } else {
    passwordsMatch = true;
  }

  if (isValid && passwordsMatch) {
    displayFeedback("Successfully Registered!", "lightgreen");
    return;
  }
}

function handleSubmit(e) {
  e.preventDefault();

  // 1. Validate form
  validateForm();

  // 2. Store data
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener("submit", handleSubmit);
