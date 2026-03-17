let fruits = ["pomme", "banane", "orange"]

console.log(fruits[1]);

let colors = ["rouge", "bleu", "vert"]

colors.push("violet")

console.log(colors.length);

let personne = {
    "nom" : "Alice",
    "age" : 25,
    "ville" : "Paris",
}

console.log(personne.nom);

let animaux = ["chat", "chien", "lapin", "tortue"];

for (let index = 0; index < animaux.length; index++) {
    console.log(animaux[index]);
}

let courses = [
    { nom: "Pain", prix: 15 },
    { nom: "Lait", prix: 20 },
    { nom: "Oeufs", prix: 25 },
]

let total = 0

for (let index = 0; index < courses.length; index++) {
    total += courses[index].prix
}

console.log(total);

