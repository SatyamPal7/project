const log = document.getElementById('log')
log.addEventListener('click', loggin)

function loggin()
{
// login
const loginForm = document.querySelector('#loginForm');
  // get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;


  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    console.log(cred)

  }).catch(err => {
  console.log("Can't sign in"+err)
  });

}
