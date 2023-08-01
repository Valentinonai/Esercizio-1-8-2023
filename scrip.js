const rimuovi = () => {
  document.querySelectorAll(".card").forEach((x) => (x.style.display = "none"));
  document.getElementById("show").classList.remove("disabled");
  document.getElementById("remove").classList.add("disabled");
};
const show = () => {
  document.querySelectorAll(".card").forEach((x) => (x.style.display = "block"));
  document.getElementById("show").classList.add("disabled");
  document.getElementById("remove").classList.remove("disabled");
};

document.getElementById("tot").innerText += document.getElementsByClassName("card").length;

let link = document.getElementsByClassName("link");
link = Array.from(link);
const cambiaLink = (event) => {
  if (event.target.innerText === "Nascondi sezione") event.target.innerText = "Mostra sezione";
  else if (event.target.innerText === "Mostra sezione") event.target.innerText = "Nascondi sezione";
};
link.forEach((x) => x.addEventListener("click", cambiaLink));

//! VERSIONE ABBREVIATA
/*
document.querySelectorAll(".link").forEach((x) =>
  x.addEventListener("click", (event) => {
    if (event.target.innerText === "Nascondi sezione") event.target.innerText = "Mostra sezione";
    else if (event.target.innerText === "Mostra sezione") event.target.innerText = "Nascondi sezione";
  })
);
*/
