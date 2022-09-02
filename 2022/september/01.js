// Faire plusieurs calculs en utilisant le Rest parameters

function addition(...nombres) {
  let resultat = 0;

  nombres.forEach((nombre) => {
    resultat += nombre;
  });
  console.log(resultat);
}

addition(5, 7, 12, 40); // 64

//___________________________________________________

// Calcul avec la declarative function

function foo() {
  const e = 23;
  const too = () => {
    console.log(e + 2);
  };
  too();
}

foo(); // 25

//___________________________________________________

// Spread Operador/Operateur de decomposition

// Fusionner plusieurs tableaux
let fruits = ["fraise", "banane", "poire"];
let aliments = ["chocolat", "amandes", "avoine", ...fruits];

console.log(aliments);

// Fusionner plusieurs tableaux
// Decouper un string en plusieurs elements
let phrase = "Bonjour";
let phraseTableau = [...phrase];

console.log(phraseTableau);

// Selectionner un element et stocker les autres dans une variable
// Sans decomposition

//___________________________________________________

// 3 maneras de hacer una función :

function goo1(a) {
  return 21 + a;
}

const goo2 = function (a) {
  return 22 + a;
};

const goo3 = (a) => {
  return 23 + a;
};

console.log(goo1(7), goo2(7), goo3(7));
