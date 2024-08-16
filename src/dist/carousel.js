"use strict";
const swaper = document.getElementById("swaper");
const cards_carousel = swaper.children;
let index = 0;
function updateCarousel() {
    if (index >= 3) {
        index = 0;
    }
    const width = cards_carousel[index].getBoundingClientRect().width;
    swaper.style.transform = `translateX(-${width * index}px)`;
}
function carousel(element) {
    if (element.id == "nextB") {
        index = (index + 1) % cards_carousel.length;
        updateCarousel();
    }
    else if (element.id == "prevB") {
        index = (index - 1 + cards_carousel.length) % cards_carousel.length;
        updateCarousel();
    }
}
