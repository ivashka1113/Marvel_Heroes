import getHeroes from "./modules/getHeroes.js";
import showCards from "./modules/showCards.js"


getHeroes("dbHeroes.json").then(data => console.log(data));