// logout
const out = document.getElementById('out')
out.addEventListener('click', logout)

function logout() {

auth.signOut()
}
auth.onAuthStateChanged((user)=>{
  if(user)
  {

  }
  else
  {
    window.location.assign('register.html')
  }
})
