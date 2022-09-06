// Calculer deux nombres via une function et retourner le resultat

let nombreUn = 4;
let nombreDeux = 7;

function addition(nombreA, nombreB) {
  let result = nombreA + nombreB;
  console.log(result); // Affiche un resultat
  return result; // retourne un resultat, tout se qui sera apres un return ne sera pas executé
}

console.log(addition(nombreUn, nombreDeux)); // 11




// Calculer le temps de preparation d'un gateau au chocolat en utilisant une function

let preparation = 10;
let cuisson = 15;

function cuisiner(nombreDeGateau, minutesDePreparation, minutesDeCuisson) {
  let resultat = nombreDeGateau * (minutesDePreparation + minutesDeCuisson);
  return resultat;
}

console.log(cuisiner(1, preparation, cuisson));


// Parmi tes invités, 1 personne n'aime pas le chocolat. 
// Fais une fonction en prenant en compte de parametre. 

function cuisiner(
  nombreDeGateau,
  minutesDePreparation = 10,
  minutesDeCuisson = 15
) {
  let resultat = nombreDeGateau * (minutesDePreparation + minutesDeCuisson);
  return resultat;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);

console.log(tempsDePreparationFraisier);  // 35 min pour le fraisier
console.log(tempsDePreparationFraisier + tempsDePreparationChocolat); // 135min au total


// Creer une alert qui affiche l'age que la personne a indiqué

function demanderAge() {
  let age = prompt("Quel age as tu ?");
  alert("Vous avez " + age + " ans");
}

demanderAge();

// Prevoir l'age que cette personne aura bientot

function prevoirAge() {
  let age = prompt("Quel age as tu ?");
/*   age = Number(age); */  // Autre possibilité
alert("Bientot tu auras " + (+age + 1) + "ans"); 
}

prevoirAge();


 