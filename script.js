const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-two');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs:
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue == '') {
    // show error
    // add error class
    setErrorfor(username, 'Username cannot be blank');
  } else {
    // add success class
    setSuccessfor(username);
  }

  if (emailValue === '') {
    setErrorfor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorfor(email, 'Not a valid email');
  } else {
    setSuccessfor(email);
  }

  if (passwordValue === '') {
    setErrorfor(password, 'Password cannot be blank');
  } else {
    setSuccessfor(password);
  }

  if (password2Value === '') {
    setErrorfor(password2, 'Password2 cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorfor(password2, 'Passwords does not match');
  } else {
    setSuccessfor(password2);
  }
}
// show a success message

function setErrorfor(input, message) {
  const formControl = input.parentElement; // .form-control
  const span = formControl.querySelector('span');
  // add error message inside span
  span.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}
function setSuccessfor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
