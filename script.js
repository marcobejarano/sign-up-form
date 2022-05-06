let pass = document.getElementById('password');
let confirm_pass = document.getElementById('confirm-password');
let button = document.getElementById('button');

pass.addEventListener('keyup', verificate);
confirm_pass.addEventListener('keyup', verificate);

function verificate() {
  if (pass.value != confirm_pass.value) {
    document.getElementById('validation-error').innerText = "*Passwords do not match";
    document.getElementById('password').style.border = "1px solid red";
    document.getElementById('confirm-password').style.border = "1px solid red";
    document.getElementById('button').disabled = true;
    document.getElementById('button').style.opacity = 0.4;
  } else {
    document.getElementById('validation-error').innerText = "";
    document.getElementById('password').style.border = "1px solid blue";
    document.getElementById('confirm-password').style.border = "1px solid blue";
    document.getElementById('button').disabled = false;
    document.getElementById('button').style.opacity = 1;
  }
}