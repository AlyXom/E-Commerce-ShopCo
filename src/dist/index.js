"use strict";
const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
function modalTrueOrFalse() {
    if (modal.style.left == "0px") {
        modal.style.left = "-1000px";
    }
    else {
        modal.style.left = "0px";
    }
}
