const menu = document.querySelector(".navbar__menu")
const collection = document.querySelector(".navbar__collection")

menu.addEventListener("click", () => {
    collection.classList.toggle("show")
})

const form = document.querySelector(".form")
const inputUsername = document.querySelector(".form input[type=text]")
const inputPassword = document.querySelector(".form input[type=password]")
const inputs = document.querySelectorAll(".register__inp")
const loading = document.querySelector(".loading")
const BASE__URL = "https://fakestoreapi.com"

form.addEventListener("submit", e => {
    e.preventDefault()
    let user = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    fetch(`${BASE__URL}/auth/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            return res.json()
        }
        throw Error("Username or Password is incorrect")
    })
    .then(res => {
        localStorage.setItem("accesToken", res.token)
        open(`/pages/account.html`, `_self`)
    })
    .catch(err => alert(err.message))
})

inputs.forEach(element => {
    element.addEventListener("click", ()=> {
        inputs.forEach(inp => inp.classList.remove("active"))
        element.classList.add("active")
    });
});