"use strict";

const filter = (data) => {
    const header = document.querySelector("header");
    const typeSearch = header.querySelector(".type-search");
    const inputName = header.querySelector(".name-input");
    const inputRealName = header.querySelector(".real-name-input");
    const seletSpecies = header.querySelector(".selec-species");
    const selectGenders = header.querySelector(".select-gender");
    const selectStatus = header.querySelector(".select-status");
    const searchBtn = header.querySelector(".search-btn");
    const main = document.querySelector("main");
    const cards = main.querySelectorAll(".card");
    const noResault = main.querySelector("span")
    let allCardsDisplayNone = 0;


    typeSearch.addEventListener("click", () => {
        if (typeSearch.textContent === "Name") {
            typeSearch.textContent = "Real name";
            inputName.value = "";
        } else {
            typeSearch.textContent = "Name";
            inputRealName.value = "";
        }
        inputName.classList.toggle("display-none");
        inputRealName.classList.toggle("display-none");
    })

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const characteristics = [inputName.value, inputRealName.value, seletSpecies.value, selectGenders.value, selectStatus.value]
        data.forEach((card, index) => {
            const cardCharacteristics = [card.name, card.realName === undefined ? "" : card.realName, card.species === undefined ? "" : card.species, card.gender, card.status === undefined ? "unknown" : card.status]
            for (let i = 0; i < characteristics.length; i++) {
                // if (i <= 2) {
                //     if ((cardCharacteristics[i] === characteristics[i]) || (characteristics[i] === "")) {
                //         cards[index].style.display = "flex";
                //     }
                if ((cardCharacteristics[i] === characteristics[i]) || (characteristics[i] === "")) {
                    cards[index].style.display = "flex";
                } else {
                    cards[index].style.display = "none";
                    return
                }
            }
        })

        cards.forEach((card) => {
            if (card.style.display === "none") allCardsDisplayNone++;
        })
        if (allCardsDisplayNone === cards.length) {
            noResault.classList.remove("display-none");
        } else if (allCardsDisplayNone < cards.length) {
            noResault.classList.add("display-none");
        }
        allCardsDisplayNone = 0;
    })
}

export default filter;