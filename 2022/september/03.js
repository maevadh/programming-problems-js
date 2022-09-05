// Arreter la propagation des events
// sur les enfants

let article = document.querySelector("article");
let h1 = document.querySelector("h1");

article.addEventListener("click", () => {
  alert("alerte cliqué");
});

h1.addEventListener("click", (e) => {
  alert("Titre cliqué");
  e.stopPropagation(); // Arreter la propagation de l'element padre.
});

// Programmer un event :
// setTimout, prends 2 parametres.
let timer = setTimeout("alert('Bonjour')", 3000); // 1. ce que doit faire la function, 2. le nombre de miliseconde (1sec 0 1000ms) a attendre avant de s'executer.
clearTimeout(timer); // Arreter l'execution avant qu'elle se fasse

// setInterval
let interval = setInterval("alert('Hola')", 5000); // s'execute en permanence
clearInterval(interval); // Arreter l'execution avant qu'elle se fasse
