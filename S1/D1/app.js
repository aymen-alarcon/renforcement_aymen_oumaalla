//Challenge 1

let inscriptions = [
    "User Number1",
    "User Number3",
    "User Number2",
    "User Number4",
    "User Number6",
    "User Number5",
]

console.log(inscriptions);
console.log(inscriptions[0]);
console.log(inscriptions[inscriptions.length - 1]);
console.log(inscriptions.length);
inscriptions.push("User Number7", "User Number8")
inscriptions.pop()
inscriptions.shift()
console.log(inscriptions);

// Challenge 2

let grades = [12, 8, 15, 6, 18, 9, 14]
let sum = 0
let average = 0
let sortedArray = grades.sort((a,b) => a - b)
let countAboveAverage = 0

for (let index = 0; index < grades.length; index++) {
    sum += grades[index]
    average = sum / grades.length
}

grades.forEach(grade => {
    if (grade > 10) {
        countAboveAverage += 1
    }
});

console.log(sum);
console.log(average);
console.log(sortedArray[length -  1]);
console.log(sortedArray[0]);
console.log(countAboveAverage);
console.log(sortedArray);

//Challenge 3

let person = {
    "nom" : "Ana",
    "prénom" : "Al A3la",
    "âge" : 99,
    "ville" : "Mdintna",
    "email" : "emaildyali@gmail.com",
}

console.log(person);

person["ville"] = "Mdinthoum"

console.log(person);

person["numéro Téléphone"] = 123456789

console.log(person);

//Challenge 4

let articles = [
    {
        "name" : "article1",
        "quantity" : 3,
        "price" : 15.00,
    },
    {
        "name" : "article2",
        "quantity" : 4,
        "price" : 25.00,
    },
    {
        "name" : "article3",
        "quantity" : 5,
        "price" : 35.00,
    },
    {
        "name" : "article4",
        "quantity" : 6,
        "price" : 45.00,
    },
    {
        "name" : "article5",
        "quantity" : 7,
        "price" : 5.00,
    },
]

let total = 0

articles.forEach(article => {
    console.log(article["name"] + " * " + article["quantity"] + " = " + Number(article["price"]) * Number(article["quantity"]) + " $");
    total = (Number(article["price"]) * Number(article["quantity"])) * 20 / 100
    console.log(total);
});

//Challenge 5

let students = [
    {
        "nom": "Martin",
        "prénom": "Lucas",
        "âge": 22,
        "moyenne": 14.5
    },
    {
        "nom": "Dupont",
        "prénom": "Emma",
        "âge": 20,
        "moyenne": 16.2
    },
    {
        "nom": "Leroy",
        "prénom": "Noah",
        "âge": 21,
        "moyenne": 12.8
    },
    {
        "nom": "Moreau",
        "prénom": "Léa",
        "âge": 23,
        "moyenne": 15.7
    },
    {
        "nom": "Simon",
        "prénom": "Hugo",
        "âge": 19,
        "moyenne": 13.9
    },
    {
        "nom": "Michel",
        "prénom": "Jade",
        "âge": 22,
        "moyenne": 17.1
    }
];

students.forEach(student => {
    if (student["moyenne"] >= 12) {
        console.log(student);
    }
});

let studentsSortedArray = students.sort((a, b) => Number(a.âge) - Number(b.âge));
console.log(studentsSortedArray);

students.forEach(student => {
    if (student["nom"] === "Michel") {
        console.log(student);
    }else{
        console.log("Étudiant non trouvé");
    }
});