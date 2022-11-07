"use strict";

const getHeroes = (url) => {
    fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error));
}

export default getHeroes;