//Challenge 1

let capacity = 30;
let reservations = [];
let nextId = 1;

function totalConfirmed(date, hour) {
    let totalPeople = 0;

    for (let index = 0; index < reservations.length; index++) {
        let reservation = reservations[index];

        if (
            reservation.date === date &&
            reservation.heure === hour &&
            reservation.statut === "confirmée"
        ) {
            totalPeople += reservation.nombre_personnes;
        }
    }

    console.log(totalPeople);
}

function ajouterReservation(clientName, peopleCount, date, hour, phoneNumber) {
    let currentTotal = totalConfirmed(date, hour);
    let status = currentTotal + peopleCount <= capacity ? "confirmée" : "en attente";

    reservations.push({
        id: nextId++,
        nom_client: clientName,
        nombre_personnes: peopleCount,
        date: date,
        heure: hour,
        statut: status,
        telephone: phoneNumber
    });
}

function annulerReservation(id) {
    let reservationDate = null;
    let reservationHour = null;

    for (let index = 0; index < reservations.length; index++) {
        let reservation = reservations[index];

        if (reservation.id === id) {
            reservation.statut = "annulée";
            reservationDate = reservation.date;
            reservationHour = reservation.heure;
        }
    }

    let totalAfterCancellation = totalConfirmed(reservationDate, reservationHour);
    let waitingList = [];

    for (let index = 0; index < reservations.length; index++) {
        let reservation = reservations[index];

        if (
            reservation.date === reservationDate &&
            reservation.heure === reservationHour &&
            reservation.statut === "en attente"
        ) {
            waitingList.push(reservation);
        }
    }

    waitingList.sort(function (a, b) {
        return a.id - b.id;
    });

    for (let index = 0; index < waitingList.length; index++) {
        let waitingReservation = waitingList[index];

        if (totalAfterCancellation + waitingReservation.nombre_personnes <= capacity) {
            waitingReservation.statut = "confirmée";
            totalAfterCancellation += waitingReservation.nombre_personnes;
        }
    }
}

function listerReservations(date) {
    let resultList = [];

    for (let index = 0; index < reservations.length; index++) {
        let reservation = reservations[index];
        if (reservation.date === date) {
            resultList.push(reservation);
        }
    }

    resultList.sort(function (a, b) {
        return a.heure.localeCompare(b.heure);
    });

    console.log(resultList);
}

function tauxOccupation(date) {
    let occupationByHour = {};
    let result = {};

    for (let index = 0; index < reservations.length; index++) {
        let reservation = reservations[index];

        if (reservation.date === date && reservation.statut === "confirmée") {
            if (occupationByHour[reservation.heure] === undefined) {
                occupationByHour[reservation.heure] = 0;
            }
            occupationByHour[reservation.heure] += reservation.nombre_personnes;
        }
    }

    let hours = Object.keys(occupationByHour);

    for (let index = 0; index < hours.length; index++) {
        let hour = hours[index];
        let percentage = (occupationByHour[hour] / capacity) * 100;
        result[hour] = percentage.toFixed(2) + "%";
    }

    console.log(result);
}

// Tests
ajouterReservation("Alice", 10, "2026-03-30", "20:00", "0600000001");
ajouterReservation("Bob", 8, "2026-03-30", "20:00", "0600000002");
ajouterReservation("Chris", 12, "2026-03-30", "20:00", "0600000003");
ajouterReservation("David", 5, "2026-03-30", "20:00", "0600000004");
ajouterReservation("Emma", 4, "2026-03-30", "19:00", "0600000005");
ajouterReservation("Farah", 10, "2026-03-30", "19:00", "0600000006");
ajouterReservation("Hugo", 10, "2026-03-30", "19:00", "0600000007");
ajouterReservation("Ian", 5, "2026-03-30", "20:00", "0600000008");

annulerReservation(2);

console.log(listerReservations("2026-03-30"));
console.log(tauxOccupation("2026-03-30"));

// Challenge 2

// let catalogueProducts = [
//     { id: 1, nom: "iPhone 15 Pro", prix: 1199, stock_disponible: 15},
//     { id: 2, nom: "MacBook Air M3", prix: 1499, stock_disponible: 8},
//     { id: 3, nom: "AirPods Pro 2", prix: 279, stock_disponible: 25},
//     { id: 4, nom: "Apple Watch Ultra", prix: 899, stock_disponible: 12},
//     { id: 5, nom: "iPad Pro M4", prix: 1299, stock_disponible: 6},
//     { id: 6, nom: "Apple Pencil Pro", prix: 149, stock_disponible: 20}
// ];

// let panier = [
//     { productId: 1, quantity: 1 },
//     { productId: 3, quantity: 2 },
//     { productId: 6, quantity: 3 }
// ];

// function addProduct(productId, quantity){
//     if(!panier.find((element) => element.productId === productId)){
//         panier.push({productId: productId, quantity: quantity})
//     }else if(panier.find((element) => element.productId === productId)){
//         let product = panier.find((element) => element.productId)
//         product.quantity += quantity
//         console.log(product);
//     }
// }

// addProduct(1, 2)
// console.log(panier);

// function editProduct(productId, quantity){
//     catalogueProducts.forEach(element => {
//         if (element.id === productId) {
//             if (element.stock_disponible >= quantity) {
//                 let product = panier.find(p => p.productId === productId)
//                 product.quantity += quantity
//             }else{
//                 console.log("You can't do that");
                
//             }
//         }
//     });
// }

// editProduct(1, 111)
// console.log(panier);

// function removeProduct(productId){
//     let product = panier.find(p => p.productId === productId)

//     if (!product) {
//         return "that product doesn't exists"
//     }else{
//         panier.splice(product.productId - 1, 1)
//     }
// }

// removeProduct(1)
// console.log(panier);

// function calculatePrice(productId){
//     let product = panier.find(p => p.productId === productId)
//     let productPrice = 0
//     catalogueProducts.forEach(element => {
//         if (element.id === productId) {
//             productPrice = element.prix
//         }
//     });    
//     return product.quantity * productPrice   
// }

// calculatePrice(1)

// function applyPromo(code, productId) {
//     if (localStorage.getItem("code") || localStorage.getItem("code2") || localStorage.getItem("code3") === code) {
//         console.log("code has been expired");
        
//     }else{
//         if (code === "BIENVENUE") {
//             remise = calculatePrice(productId) - (calculatePrice(productId) * 0.15);
//             localStorage.setItem("code", "BIENVENUE")
//         }
//         else if (code === "NOEL2025" && calculatePrice(productId) > 50) {
//             remise = calculatePrice(productId) - 10;
//             localStorage.setItem("code2", "NOEL2025")
//         }
//         else if (code === "LIVGRATUITE") {
//             remise = calculatePrice(productId) - 7;
//             localStorage.setItem("code3", "NOEL2025")
//         }
//         console.log(remise);
//     }
// }

// applyPromo("NOEL2025", 1)

// Challenge 3

let currencies = {
    "USD": 1.08,
    "GBP": 0.86,
    "MAD": 10.85,
    "JPY": 162.5,
    "CAD": 1.47
}

function convert(price, deviseSource, deviseCible){

}

function convertCart(cart, deviseSource, deviseCible){

}

function meilleurTaux(montant, deviseSource){

}