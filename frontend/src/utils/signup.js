document.getElementById('signupform').addEventListener("submit", event => {
    event.preventDefault()

    let user = {}
    user.username = document.getElementById("inputUsername").value;
    user.email = document.getElementById("inputEmail").value;
    user.password = document.getElementById("inputPassword").value;
    user.password2 = document.getElementById("inputPassword2").value;

    if(user.password == user.password2){
        getArtworkData("http://localhost:6456/signup", "POST", user).then(data => {
            alert(data.message)
        })
    }else{
        alert("Passwods do not match")
    }
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