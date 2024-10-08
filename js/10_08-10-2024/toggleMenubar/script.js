const showmenu = () => {
    let menu = document.querySelector(".nav");
    menu.classList.toggle("nav-show")
}

const showDialog = (show) => {
    let sw = document.getElementById(show)
    sw.classList.add("modelShow")
}
const closeDialog = (show) => {
    let sw = document.getElementById(show)
    sw.classList.remove("modelShow")
}