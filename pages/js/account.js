const menu = document.querySelector(".navbar__menu")
const collection = document.querySelector(".navbar__collection")

menu.addEventListener("click", () => {
    collection.classList.toggle("show")
})