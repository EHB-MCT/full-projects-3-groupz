document.getElementById('loginform').addEventListener("submit", event => {
    event.preventDefault()

    let user = {}
    user.email = document.getElementById("inputEmail").value;
    user.password = document.getElementById("inputPassword").value;

    getArtworkData("http://localhost:6456/login", "POST", user).then(data => {
      console.log(data.message)
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