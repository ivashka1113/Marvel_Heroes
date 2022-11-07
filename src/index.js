import getHeroes from "./modules/getHeroes.js";
import showCards from "./modules/showCards.js";
import filter from "./modules/filter.js";



getHeroes("dbHeroes.json").then(data => {
    showCards(data);
    filter(data);
})