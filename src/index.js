import typeSearch from "./modules/typeSearch.js";
import getHeroes from "./modules/getHeroes.js";
import showCards from "./modules/showCards.js";
import filter from "./modules/filter.js";


const searchBtn = document.querySelector(".search-btn");

getHeroes("dbHeroes.json").then(data => {
    typeSearch();
    showCards(data);
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showCards(filter(data));
    })
})