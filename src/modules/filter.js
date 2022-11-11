"use strict";


const filter = (data) => {
    const header = document.querySelector("header");
    const form = header.querySelector(".form")
    const filterCards = [];
    const formBody = {};

    const formData = new FormData(form);

    formData.forEach((val, key) => {
        formBody[key] = val;
    })

    data.forEach((card) => {
        let success = true;

        const cardCharacteristics = {
            "name": card.name,
            "real-name": card.realName === undefined ? "" : card.realName,
            "species": card.species === undefined ? "" : card.species,
            "gender": card.gender,
            "status": card.status === undefined ? "unknown" : card.status
        }

        for (let key in cardCharacteristics) {
            if ((key === "name" || key === "real-name") && formBody[key] !== "") {
                if (!(cardCharacteristics[key].toLowerCase().match(formBody[key].toLowerCase()))) {
                    success = false;
                    continue;
                }
            } else if ((cardCharacteristics[key] !== formBody[key]) && (formBody[key] !== "")) {
                success = false;
                return;
            };
        }

        if (success) filterCards.push(card);

    })

    return filterCards;
}


export default filter;