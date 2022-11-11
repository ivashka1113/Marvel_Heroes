"use strict";

import popupCard from "./popupCard.js";

const showPopup = (event, data) => {

    if (event.target.closest(".card")) {
        const cardName = event.target.closest(".card").querySelector(".card-title-text").textContent;
        let selectCard;
        data.forEach((card) => {
            if (card.name.toLowerCase() === cardName.toLowerCase()) {
                selectCard = card;
                popupCard(selectCard);
            }
        })
    }
}

export default showPopup;