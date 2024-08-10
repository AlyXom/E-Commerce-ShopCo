const hamburger = document.getElementById("hamburger") as HTMLImageElement
const modal = document.getElementById("modal") as HTMLDivElement
const drawer = document.getElementsByClassName("drawer") as HTMLCollectionOf<HTMLDivElement>

function modalTrueOrFalse() {
    if(modal.style.left == "0px") {
        modal.style.left = "-1400px"
    } else {
        modal.style.left = "0px"
    }
}

function drawerTrueOrFalse() {

    const deskDrawer = drawer[0]
    const mobileDrawer = drawer[1]

    if(deskDrawer.style.height == "0px" && mobileDrawer.style.height == "0px") {
        deskDrawer.style.height = "70px"
        mobileDrawer.style.height = "70px"
    } else {
        deskDrawer.style.height = "0px"
        mobileDrawer.style.height = "0px"
    }
}

console.log(drawer)
