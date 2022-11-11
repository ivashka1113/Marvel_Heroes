"use strict";

const popupCard = (card) => {

    const main = document.querySelector("main");
    const popup = document.createElement("div");

    popup.classList.add("popup-wrapper");
    popup.innerHTML =
        `<div class = "popup">
        <div class = "popup-close-btn">
        <img class = "popup-close-btn-img" src = "./images/cross-svgrepo-com.svg">
        </div>
        <img class = "popup-img" src = "${card.photo}" alt = "${card.name}">
        <div class = "popup-title">
            <h2 class = "popup-title-text">${card.name}</h2>
            <img class="gender-img" src="./images/${card.gender}.svg">
        </div>
        <div class="popup-status-species">
                <span>${card.status}</span>
                &nbsp;-&nbsp;
                <span>${card.species === undefined ? "unknown" : card.species}</span>
        </div>
        <div class = "popup-card-info">
        <p>Real name - ${card.realName === undefined ? "unknown" : card.realName}</p>
        <p>Citizenship - ${card.citizenship === undefined ? "unknown" : card.citizenship}</p>
        <p>Actors - ${card.actors}</p>
        <p>BirthDay - ${card.birthDay === undefined ? "unknown" : card.birthDay}</p>
        <p>DeathDay - ${card.deathDay === undefined ? "unknown" : card.deathDay}</p>
        </div>
        <span class = "films-participated">Participated in fimls:</span>
    </div>`

    const films = document.createElement("div");
    films.classList.add("films");

    if (card.movies !== undefined) {
        card.movies.forEach((film) => {
            const movie = document.createElement("div");
            movie.innerHTML = `<p class ="film">${film}</p>`;
            films.append(movie);
        })

    } else {
        films.textContent = "Haven't acted in any movie yet";
    }

    popup.querySelector(".popup").append(films);

    popup.addEventListener("click", (e) => {

        if (!(e.target.closest(".popup")) || e.target.closest(".popup-close-btn")) {
            popup.remove();
        }

    })

    main.append(popup)
}

export default popupCard;