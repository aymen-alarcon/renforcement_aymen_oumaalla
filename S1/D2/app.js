//Challenge 1

// let music = [
//     {
//         "titre": "Bohemian Rhapsody",
//         "artiste": "Queen",
//         "durée en secondes": 355,
//         "genre": "Rock"
//     },
//     {
//         "titre": "Billie Jean",
//         "artiste": "Michael Jackson",
//         "durée en secondes": 294,
//         "genre": "Jazz"
//     },
//     {
//         "titre": "Stairway to Heaven",
//         "artiste": "Led Zeppelin",
//         "durée en secondes": 482,
//         "genre": "Rock"
//     },
//     {
//         "titre": "Imagine",
//         "artiste": "John Lennon",
//         "durée en secondes": 183,
//         "genre": "Pop"
//     },
//     {
//         "titre": "Smells Like Teen Spirit",
//         "artiste": "Nirvana",
//         "durée en secondes": 301,
//         "genre": "Grunge"
//     },
//     {
//         "titre": "Hotel California",
//         "artiste": "Eagles",
//         "durée en secondes": 391,
//         "genre": "Rock"
//     },
//     {
//         "titre": "Sweet Child O' Mine",
//         "artiste": "Guns N' Roses",
//         "durée en secondes": 359,
//         "genre": "Rock"
//     },
//     {
//         "titre": "Wonderwall",
//         "artiste": "Oasis",
//         "durée en secondes": 252,
//         "genre": "Rock"
//     },
//     {
//         "titre": "Like a Rolling Stone",
//         "artiste": "Bob Dylan",
//         "durée en secondes": 369,
//         "genre": "Rock"
//     },
//     {
//         "titre": "Yesterday",
//         "artiste": "The Beatles",
//         "durée en secondes": 124,
//         "genre": "Pop"
//     }
// ];

// let totalSeconds = 0
// let restOfSeconds = 0
// let sortedArray = []
// let longCount = 0
// let jazzCount = 0

// sortedArray = music.sort((a,b) => Number(a["durée en secondes"]) - Number(b["durée en secondes"]))
// console.log("the longest song is ");
// console.log(sortedArray[sortedArray.length - 1]);


// music.forEach(song => {
//     //  console.log(song["titre"]);
//     if (song["durée en secondes"] < 360) {
//         longCount += 1
//     }
    
//     if (song.genre === "Jazz") {
//         jazzCount += 1
//     }

//     totalSeconds += song["durée en secondes"]
//     totalMinutes = Math.floor(totalSeconds / 60)
//     restOfSeconds =  song["durée en secondes"] % 60

//     song["durée en secondes"] = totalMinutes + ":" + restOfSeconds 

//     let minutes = Math.floor(song["durée en secondes"] / 60)
//     let secondes =  song["durée en secondes"] % 60

//     song["durée en secondes"] = minutes + ":" + secondes

//     // console.log(song);
// });
// // console.log(totalMinutes + ":" + restOfSeconds);
//     if (longCount > 0) {
//         console.log("there is one or more songs longer than 6 minutes");   
//     }
//     if (jazzCount > 0) {
//         console.log("there is one or more Jazz songs");   
//     }

//     console.log(sortedArray); 

// Challenge 2

let ventesMensuelles = [
    {"mois": "Janvier", "chiffre_affaires": 12500, "nb_clients": 320, "ville": "Paris"},
    {"mois": "Février", "chiffre_affaires": 11800, "nb_clients": 298, "ville": "Paris"},
    {"mois": "Mars", "chiffre_affaires": 14200, "nb_clients": 356, "ville": "Lyon"},
    {"mois": "Avril", "chiffre_affaires": 13500, "nb_clients": 341, "ville": "Paris"},
    {"mois": "Mai", "chiffre_affaires": 16800, "nb_clients": 412, "ville": "Marseille"},
    {"mois": "Juin", "chiffre_affaires": 15200, "nb_clients": 387, "ville": "Lyon"},
    {"mois": "Juillet", "chiffre_affaires": 18900, "nb_clients": 456, "ville": "Paris"},
    {"mois": "Août", "chiffre_affaires": 17600, "nb_clients": 431, "ville": "Marseille"},
    {"mois": "Septembre", "chiffre_affaires": 14300, "nb_clients": 362, "ville": "Lyon"},
    {"mois": "Octobre", "chiffre_affaires": 15700, "nb_clients": 398, "ville": "Paris"},
    {"mois": "Novembre", "chiffre_affaires": 13400, "nb_clients": 337, "ville": "Paris"},
    {"mois": "Décembre", "chiffre_affaires": 215000, "nb_clients": 521, "ville": "Marseille"},
];

let total = 0

ventesMensuelles.forEach(venteDeMois => {
    total += venteDeMois.chiffre_affaires
});

console.log(total);
console.log(total / ventesMensuelles.length);

let VentesSortedArray = ventesMensuelles.sort((a,b) => a.chiffre_affaires - b.chiffre_affaires)
let clientsSortedArray = ventesMensuelles.sort((a,b) => a.nb_clients - b.nb_clients)

console.log(VentesSortedArray[VentesSortedArray.length - 1]);
console.log(clientsSortedArray[0]);

let mappedArray = ventesMensuelles.filter((element) => element.chiffre_affaires > 50000)

console.log(mappedArray);

let result = Object.groupBy(ventesMensuelles, ({ville}) => ville)
console.log(result);

console.log(VentesSortedArray.reverse());
