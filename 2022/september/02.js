// 1 -- Creer un button qui change de couleur au passage de la souris
/* let a = document.querySelector("a");
let button = document.querySelector("button"); */

// Ancienne version :
/* a.onclick = function () {
  if (confirm("Etes-vous sûr ?")) {
    location.href = "https://www.youtube.com/watch?v=DqacbfYzRro";
  }
}; */

// 2 -- Nouvelle version, avec les functions flechees:
/* a.onclick = () => {
  if (confirm("Etes-vous sûr ?")) {
    location.href = "https://www.youtube.com/watch?v=DqacbfYzRro";
  }
};

button.onmouseover = () => {
  document.body.style.backgroundColor = "orange";
};

button.onmouseout = () => {
  document.body.style.backgroundColor = "white";
}; */

// 3 -- Nouvelle version, la plus conseillé car elle peut utiliser le gestionnaire d'event
// pour supprimer des events (addEventListener):

let a = document.querySelector("a");
let button = document.querySelector("button");

a.addEventListener("click", () => {
  if (confirm("Etes-vous sûr ?")) {
    location.href = "https://www.youtube.com/watch?v=DqacbfYzRro";
  }
});

button.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "orange";
});

function backgroundWhite() {
  document.body.style.backgroundColor = "white";
}

button.addEventListener("mouseout", backgroundWhite);

button.removeEventListener("mouseout", backgroundWhite); // preciser ce que je veux supprimer = creer une fonction pour cet element
