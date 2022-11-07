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

    // const characteristics = [inputName.value, inputRealName, seletSpecies, ]


    typeSearch.addEventListener("click", () => {
        typeSearch.textContent === "Name" ? typeSearch.textContent = "Real name" : typeSearch.textContent = "Name";
        inputName.classList.toggle("display-none");
        inputRealName.classList.toggle("display-none");
    })

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        data.forEach((card) => {
            // if (card.)
        })
    })

}

export default filter;