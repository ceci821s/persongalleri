const url = "https://tema7-a0bc.restdb.io/rest/medlemmer";

const options = {
  headers: {
    "x-apikey": "61fcf7e63f215f310a37be64",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  //   console.log(resspons);
  const json = await resspons.json();
  vis(json);
}

function vis(json) {
  console.log(json);
}

hentData();

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((person) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".navn").textContent = person.navn;
    klon.querySelector(".email").textContent = person.email;
    klon.querySelector(".info").textContent = person.info;
    // klon.querySelector(".billede").src = mediurl + person.billede;
    main.appendChild(klon);
  });
}
