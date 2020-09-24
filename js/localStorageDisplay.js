// make button clickable
document.getElementById('signUp').addEventListener('click', (event) => {
  event.preventDefault()
  let user = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }
  console.log(user)
  // want to put object into local storage
  // stringify turns object into string so it can be stored in string
  localStorage.setItem('user', JSON.stringify(user))
})
// to display user
if (localStorage.getItem('user')) {
  // create new object to get information from local storage to display on inner HTML
  // take string of JSON data and turn into JS object
  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  document.getElementById('user').innerHTML = `
      <h3>Username: ${user.username}</h3>
      <h3>Email: ${user.email}</h3>
      <h3>Password: ${user.password} </h3>
      `
}