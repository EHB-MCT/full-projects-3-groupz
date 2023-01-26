document.getElementById('loginform').addEventListener("submit", event => {
  event.preventDefault()

  let user = {}
  user.email = document.getElementById("inputEmail").value;
  user.password = document.getElementById("inputPassword").value;
  
  //let user = JSON.parse(sessionStorage.getItem('user'))
  getArtworkData("http://localhost:6456/login", "POST", user).then(result => {
    //sessionStorage.setItem('user', JSON.stringify(result.data))
    if(user){
      document.getElementById('welcomemessage').innerText = `${user.username}`
      document.getElementById('succesmessageinlog').innerHTML = `Je bent succesvol ingelogd!`
    }else{
      document.getElementById('succesmessageinlog').innerHTML = `Je bent succesvol ingelogd!`
    }
    console.log("succes")
  })
})

async function getArtworkData(url, method, data){
  let resp = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  });
  return await resp.json();
}