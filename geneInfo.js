const form = document.getElementById("form");

const name = document.getElementById("name");
const lastName = document.getElementById("lname");
const phone = document.getElementById("phone");
const address = document.getElementById("address1");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");

form.addEventListener("submit", function generalInfo(e) {
  const nameValue = name.value;
  const lastNameValue = lastName.value;
  const phoneValue = phone.value;
  const addressValue = address.value.trim();

  const countryValue = country.value.trim();
  const postcodeValue = postcode.value.trim();
  var phoneNum = /^\(?([0-9]{2,})\)?[-. ]?([0-9]{3,})[-. ]?([0-9]{4,})$/;

  if (nameValue === "") {
    setError(name, "Enter first name");
    e.preventDefault();
  } else {
    setSuccess(name);
  }

  if (lastNameValue === "") {
    setError(lastName, "Enter last name");
    e.preventDefault();
  } else {
    setSuccess(lastName);
  }

  if (phoneValue === "") {
    setError(phone, "Enter your number");
    e.preventDefault();
  } else if (!phoneValue.match(phoneNum)) {
    setError(phone, "Enter the valid number");
    e.preventDefault();
  } else {
    setSuccess(phone);
  }

  if (addressValue === "") {
    setError(address, "Address cannot be blank");
    e.preventDefault();
  } else if (addressValue.length < 5) {
    setError(address, "Enter the valid address");
    e.preventDefault();
  } else {
    setSuccess(address);
  }
  if (countryValue === "") {
    setError(country, "Enter country");
    e.preventDefault();
  } else {
    setSuccess(country);
  }
  if (postcodeValue === "") {
    setError(postcode, "Enter postcode");
    e.preventDefault();
  } else {
    setSuccess(postcode);
  }

  form.reset();
});

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
