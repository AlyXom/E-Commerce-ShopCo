"use strict";
const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const drawer = document.getElementsByClassName("drawer");
const searchBarMobile = document.getElementById("searchBarMobile");
const popup = document.getElementById("popup");
const clothes = document.getElementById("clothes");
const topSelling = document.getElementById("topSelling");
const box = document.getElementById("box");
const boxSelling = document.getElementById("boxSelling");
const cards_carousel = document.querySelectorAll(".card-carousel");
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
function reviewRate(stars) {
    let starsHtml = "";
    for (var n = 0; n < stars; n++) {
        var midstar = stars - n;
        if (midstar == 0.5) {
            starsHtml += "<img src='src/assets/icons/mid-star.svg' />";
        }
        else {
            starsHtml += "<img src='src/assets/icons/rating-star.svg' />";
        }
    }
    return starsHtml;
}
function viewAll(element) {
    if (element.id == "arrival") {
        if (box.className == "switchOn") {
            box.className = "switchOff";
            element.textContent = "View All";
        }
        else {
            box.className = "switchOn";
            element.textContent = "View Less";
        }
    }
    else {
        if (boxSelling.className == "switchOn") {
            boxSelling.className = "switchOff";
            element.textContent = "View All";
        }
        else {
            boxSelling.className = "switchOn";
            element.textContent = "View Less";
        }
    }
}
function carousel(element) {
    console.log(element);
}
const new_arrival = [
    {
        name: "T-shirt with Tape Details",
        image: "src/assets/clothes/t-shirt-1.png",
        price: 120,
        discount: 0,
        stars: 4.5
    },
    {
        name: "Skinny Fit Jeans",
        image: "src/assets/clothes/pants-1.png",
        price: 240,
        discount: 20,
        stars: 3.5
    },
    {
        name: "Checkered Shirt",
        image: "src/assets/clothes/t-shirt-2.png",
        price: 180,
        discount: 0,
        stars: 4.5
    },
    {
        name: "Sleeve Striped T-shirt",
        image: "src/assets/clothes/t-shirt-3.png",
        price: 160,
        discount: 30,
        stars: 4.5
    },
    {
        name: "Vertical Striped Shirt",
        image: "src/assets/clothes/t-shirt-4.png",
        price: 212,
        discount: 20,
        stars: 5
    },
    {
        name: "Courage Graphic T-shirt",
        image: "src/assets/clothes/t-shirt-5.png",
        price: 145,
        discount: 0,
        stars: 4
    },
    {
        name: "Loose Fit Bermuda Shorts",
        image: "src/assets/clothes/pants-2.png",
        price: 80,
        discount: 0,
        stars: 3
    },
    {
        name: "Faded Skinny Jeans",
        image: "src/assets/clothes/pants-3.png",
        price: 210,
        discount: 0,
        stars: 4.5
    },
    {
        name: "Gradient Graphic T-shirt",
        image: "src/assets/clothes/t-shirt-6.png",
        price: 145,
        discount: 0,
        stars: 3.5
    },
    {
        name: "Polo with Tipping Details",
        image: "src/assets/clothes/t-shirt-7.png",
        price: 180,
        discount: 0,
        stars: 4.5
    },
    {
        name: "Black Striped T-shirt",
        image: "src/assets/clothes/t-shirt-8.png",
        price: 120,
        discount: 30,
        stars: 5
    }
];
new_arrival.forEach(({ name, image, price, discount, stars }) => {
    clothes.innerHTML += `
        <div class="cards">
            <section>
                <img class="card-image" src="${image}"/>
            </section>
            <article>
                <p>${name}</p>
                <span>
                ${reviewRate(stars)}
                <p>${stars}/<span>5</span></p>
                </span>
                <div id="infos">
                    <p>$${Math.floor(price - ((discount / 100) * price))}</p>
                    <p class="discount">${discount == 0 ? "" : `$${price}`}</p>
                    ${discount == 0 ? `<span></span>` : `<span class="float-discount">-${discount}%</span>`}
                </div>
            </article>
        </div>
    `;
});
const top_selling = new_arrival.reverse().filter((item => item.stars >= 4));
top_selling.forEach(({ name, image, price, discount, stars }) => {
    topSelling.innerHTML += `
        <div class="cards">
            <section>
                <img class="card-image" src="${image}"/>
            </section>
            <article>
                <p>${name}</p>
                <span>
                ${reviewRate(stars)}
                <p>${stars}/<span>5</span></p>
                </span>
                <div id="infos">
                    <p>$${Math.floor(price - ((discount / 100) * price))}</p>
                    <p class="discount">${discount == 0 ? "" : `$${price}`}</p>
                    ${discount == 0 ? `<span></span>` : `<span class="float-discount">-${discount}%</span>`}
                </div>
            </article>
        </div>
    `;
});
