//Challenge 1

let music = [
    {
        "titre": "Bohemian Rhapsody",
        "artiste": "Queen",
        "durée en secondes": 355,
        "genre": "Rock"
    },
    {
        "titre": "Billie Jean",
        "artiste": "Michael Jackson",
        "durée en secondes": 294,
        "genre": "Jazz"
    },
    {
        "titre": "Stairway to Heaven",
        "artiste": "Led Zeppelin",
        "durée en secondes": 482,
        "genre": "Rock"
    },
    {
        "titre": "Imagine",
        "artiste": "John Lennon",
        "durée en secondes": 183,
        "genre": "Pop"
    },
    {
        "titre": "Smells Like Teen Spirit",
        "artiste": "Nirvana",
        "durée en secondes": 301,
        "genre": "Grunge"
    },
    {
        "titre": "Hotel California",
        "artiste": "Eagles",
        "durée en secondes": 391,
        "genre": "Rock"
    },
    {
        "titre": "Sweet Child O' Mine",
        "artiste": "Guns N' Roses",
        "durée en secondes": 359,
        "genre": "Rock"
    },
    {
        "titre": "Wonderwall",
        "artiste": "Oasis",
        "durée en secondes": 252,
        "genre": "Rock"
    },
    {
        "titre": "Like a Rolling Stone",
        "artiste": "Bob Dylan",
        "durée en secondes": 369,
        "genre": "Rock"
    },
    {
        "titre": "Yesterday",
        "artiste": "The Beatles",
        "durée en secondes": 124,
        "genre": "Pop"
    }
];

let totalSeconds = 0
let restOfSeconds = 0
let sortedArray = []
let longCount = 0
let jazzCount = 0

sortedArray = music.sort((a,b) => Number(a["durée en secondes"]) - Number(b["durée en secondes"]))
console.log("the longest song is ");
console.log(sortedArray[sortedArray.length - 1]);


music.forEach(song => {
    //  console.log(song["titre"]);
    if (song["durée en secondes"] < 360) {
        longCount += 1
    }
    
    if (song.genre === "Jazz") {
        jazzCount += 1
    }

    totalSeconds += song["durée en secondes"]
    totalMinutes = Math.floor(totalSeconds / 60)
    restOfSeconds =  song["durée en secondes"] % 60

    song["durée en secondes"] = totalMinutes + ":" + restOfSeconds 

    let minutes = Math.floor(song["durée en secondes"] / 60)
    let secondes =  song["durée en secondes"] % 60

    song["durée en secondes"] = minutes + ":" + secondes

    // console.log(song);
});
// console.log(totalMinutes + ":" + restOfSeconds);
    if (longCount > 0) {
        console.log("there is one or more songs longer than 6 minutes");   
    }
    if (jazzCount > 0) {
        console.log("there is one or more Jazz songs");   
    }

    console.log(sortedArray); 