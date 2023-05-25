function Submit() {
  let error = false;

  // Username
  let username = document.getElementById("username");
  if(username.value.length <= 0) {
    error = true;
    alert("Username cannot be empty");
    return;
  }
  
  if(username.value.length < 5 || username.value.length >  10) {
    error = true;
    alert("Username length must be between 5-10 characters");
    return;
  }

  // Email
  let email = document.getElementById("email");
  if(!email.value.endsWith("@gmail.com")) {
    error = true
    alert("Email must end with @gmail.com");
    return;
  }
  // Pass
  let password = document.getElementById("password");
  if(!validatePassword(password.value)) {
    error = true;
    return;
  }

  // Confirm Pass
  let confirmPass = document.getElementById("confirm-pass");
  if (password.value !== confirmPass.value) {
    error = true;
    alert("Your passwords do not match");
    return;
  }

  // Phone Number
  let phoneNumber = document.getElementById("number");
  if (phoneNumber.value.length < 10 || phoneNumber.value.length > 12) {
    error = true;
    alert("Phone number length must be between 10-12");
    return;
  }

  if(isNaN(phoneNumber.value)) {
    error = true;
    alert("Phone number must be numeric");
    return;
  }

  // Gender
  let male = document.getElementById("male");
  let female = document.getElementById("female");

  if (!male.checked && !female.checked) {
    error = true;
    alert("Gender cannot be empty");
    return;
  }

  // TOS
  let tos = document.getElementById("tos");
  if (!tos.checked) {
    error = true;
    alert("You must agree to the terms and conditions");
    return;
  }

  if(error === false) {
    alert("Registration Successful");
  }
}

function validatePassword(password) {
  if(password.length < 5 || password.length > 10) {
    alert("Password length must be between 5-10 characters")
    return false;
  }

  let hasNumber = false;
  let hasAlphabet = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      hasAlphabet = true;
    } else {
      hasNumber = true;
    }

    if (hasAlphabet && hasNumber) {
      return true;
    }
  }
  alert("Password must be Aplhanumeric");
  return false;
}