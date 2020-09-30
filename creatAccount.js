const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("userPassword");
const confirmpw = document.getElementById("conPassword");

form.addEventListener("submit", checkInputs);

function checkInputs(e) {
  //get the values from the input
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpwValue = confirmpw.value.trim();

  if (emailValue === "") {
    setError(email, "Enter email");
    e.preventDefault();
  } else if (!isEmail(emailValue)) {
    setError(email, "Not a valid email");
    e.preventDefault();
  } else {
    setSuccess(email);
  }

  var passw = /^(?=.*[A-Z]).{6,20}$/;
  if (passwordValue === "") {
    setError(password, "Enter a password");
    e.preventDefault();
  } else if (!passwordValue.match(passw)) {
    setError(
      password,
      "Password must be at least 6 characters, 1 uppercase letter"
    );
    e.preventDefault();
  } else {
    setSuccess(password);
  }

  if (confirmpwValue === "") {
    setError(confirmpw, "Confirm your password");
    e.preventDefault();
  } else if (confirmpwValue !== passwordValue) {
    setError(confirmpw, "Passwords does not match");
    e.preventDefault();
  } else {
    setSuccess(confirmpw);
  }
  form.reset();
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")){3,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
