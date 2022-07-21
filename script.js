function passwordMatch() {
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;

  if (password === confirmPassword) {
    return true
  } else {
    document.querySelector('#confirm-password').value = null
    document.querySelector('#confirm-password').placeholder = 'Please match the previous password entered!'
    return false
  }
}
