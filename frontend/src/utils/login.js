document.getElementById('loginform').addEventListener("submit",event => {
    event.preventDefault()
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
  
    console.log(email, password)
  })
  