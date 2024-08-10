"use strict";
const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const drawer = document.getElementsByClassName("drawer");
const searchBarMobile = document.getElementById("searchBarMobile");
const popup = document.getElementById("popup");
function modalTrueOrFalse() {
    if (modal.style.left == "0px") {
        modal.style.left = "-1400px";
    }
    else {
        modal.style.left = "0px";
    }
}
function drawerTrueOrFalse() {
    const deskDrawer = drawer[0];
    const mobileDrawer = drawer[1];
    if (deskDrawer.style.height == "0px" && mobileDrawer.style.height == "0px") {
        deskDrawer.style.height = "70px";
        mobileDrawer.style.height = "70px";
    }
    else {
        deskDrawer.style.height = "0px";
        mobileDrawer.style.height = "0px";
    }
}
function showOrHideBar() {
    if (searchBarMobile.style.height == "0px") {
        searchBarMobile.style.height = "35px";
    }
    else {
        searchBarMobile.style.height = "0px";
    }
}
function closePopup() {
    popup.style.height = "0px";
}
