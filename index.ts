const hamburger = document.getElementById("hamburger") as HTMLImageElement
const modal = document.getElementById("modal") as HTMLDivElement
const drawer = document.getElementsByClassName("drawer") as HTMLCollectionOf<HTMLDivElement>
const searchBarMobile = document.getElementById("searchBarMobile") as HTMLDivElement
const popup = document.getElementById("popup") as HTMLElement

interface Clothes {
    name: string,
    image: string,
    stars: number,
    price: number,
    discount: number
}

const new_arrival: Clothes[] = [
    {
        name: "T-shirt with Tape Details",
        image: "src/assets/clothes/t-shirt-1.png",
        price: 120,
        discount: 0,
        stars: 4.5
    }
] 

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

function showOrHideBar() {
    if(searchBarMobile.style.height == "0px") {
        searchBarMobile.style.height = "35px"
    } else {
        searchBarMobile.style.height = "0px"
    }
}

function closePopup() {
    popup.style.height = "0px"
}