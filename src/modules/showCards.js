"use strict";

const showCards = (data) => {
    const main = document.querySelector("main");

    if (data.length === 0) {
        main.innerHTML = `<span class = "no-results">"Sorry, your search did not match any results."</span>`;
        return;
    } else {
        main.innerHTML = "";
    }

    data.forEach((card) => {
        let div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
        <img class="card-img" src="${card.photo}">
        <div class="card-info">
            <div class= "card-title">
                <h2 class="card-title-text">${card.name}</h2>
                <img class="gender-img" src="./images/${card.gender}.svg">
            </div>
            <div class="card-desc">
            <div class="status-species">
                <span>${card.status}</span>
                &nbsp;-&nbsp;
                <span>${card.species === undefined ? "unknown" : card.species}</span>
            </div>
                <p>Real name - ${card.realName === undefined ? "unknown" : card.realName}</p>
                <p>Citizenship - ${card.citizenship === undefined ? "unknown" : card.citizenship}</p>
                <p>Actors - ${card.actors}</p>
            </div>
        </div>`

        main.append(div);
    });

}

export default showCards;