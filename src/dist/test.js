"use strict";
filteredClothes = this.clothes.filter((item => item.stars >= 4)).sort((a, b) => a.stars - b.stars).reverse();
