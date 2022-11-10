"use strict";

const typeSearch = () => {

    const typeSearch = document.querySelector(".type-search");
    const inputName = document.querySelector(".name-input");
    const inputRealName = document.querySelector(".real-name-input");


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

}

export default typeSearch;