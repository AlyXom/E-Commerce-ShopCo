const hamburger = document.getElementById("hamburger")
const modal = document.getElementById("modal") as HTMLDivElement

function modalTrueOrFalse() {
    if(modal.style.left == "0px") {
        modal.style.left = "-1000px"
    } else {
        modal.style.left = "0px"
    }
}
