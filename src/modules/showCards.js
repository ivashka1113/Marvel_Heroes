"use strict";

const showCards = (data) => {
    const main = document.querySelector("main")
    data.forEach((card) => {
        let div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
        <img class="card-img" src="${card.photo}">
        <div class="card-info">
            <div class= "card-title">
                <h2 class="card-title-text">${card.name}</h2>
                <img src="./images/${card.gender}.svg"></img>
            </div>
        <div class="card-desc">
            <span>${card.status}</span>
            &nbsp;-&nbsp;
            <span>${species}</span>
            <p>Real name - ${card.realName}</p>
            <p>Species   - ${card.species}</p>
            <p>Citizenship - ${card.citizenship}</p>
            <p>Actors - ${card.actors}</p>
            <p>Real name - ${card.realName}</p>
        </div>
        </div>`
        main.append(div);
    });
}

export default showCards;