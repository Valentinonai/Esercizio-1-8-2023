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
