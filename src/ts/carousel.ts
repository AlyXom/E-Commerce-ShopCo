const swaper = document.getElementById("swaper") as HTMLDivElement
const cards_carousel = swaper.children
let index: number = 0;

function updateCarousel(): void {
    if(index >= 3) {
        index = 0
    }
    const width = cards_carousel[index].getBoundingClientRect().width;
    swaper.style.transform = `translateX(-${width * index}px)`;
  }

function carousel(element: HTMLButtonElement): void {
    if(element.id == "nextB") {
        index = (index + 1) % cards_carousel.length
        updateCarousel()
    } else if(element.id == "prevB") {
        index = (index - 1 + cards_carousel.length) % cards_carousel.length
        updateCarousel() 
    }
} 