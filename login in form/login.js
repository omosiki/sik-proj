const form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const username = form.username.value
    const password = form.password.value
    const authenticated = authentication(username,password)
    if(authenticated){
        // alert("correct")
        window.location.href ="layout.html"
    }else{
        alert("wrong")
    }
    const paragrahp = document.createElement("div")
    paragrahp.textContent = (`Welcome ${username}`)
    console.log(paragrahp)
})
// function for checkinf user and password
function authentication(username,password){
    if(username == "admin" && password == "password"){
        return true
    }else{
        return false
    }
}