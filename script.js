const url = "https://tema7-a0bc.restdb.io/rest/medlemmer";

const options = {
  headers: {
    "x-apikey": "61fcf7e63f215f310a37be64",
  },
};

const section = document.querySelector("section");
const template = document.querySelector("template").content;

document.addEventListener("DOMContentLoaded", start);
let personer;
let filter = "ja";
function start() {
  loadJSON();
}

async function hentData() {
  const resspons = await fetch(url, options);

  const json = await resspons.json();
  vis(json);
}

function vis(personliste) {
  console.log(personliste);
  personliste.forEach((medlem) => {
    if (filter == medlem.troende) {
      const klon = template.cloneNode(true);
      klon.querySelector(
        "h2"
      ).textContent = `${medlem.fornavn} ${medlem.efternavn}`;
      klon.querySelector(".email").textContent = medlem.email;
      // klon.querySelector(".info").textContent = person.info;
      klon.querySelector("img").src = "/faces/" + medlem.profilbillede;
      section.appendChild(klon);
    }
  });
}

hentData();
