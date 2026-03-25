// Challenge 1

let reservations = [
    { id: 1, nom_client: "Dupont Jean", nombre_personnes: 4, date: "2024-05-15", heure: "19:00", statut: "confirmée", telephone: "0612345678" },
    { id: 2, nom_client: "Martin Sophie", nombre_personnes: 2, date: "2024-05-15", heure: "20:30", statut: "en attente", telephone: "0678901234" },
    { id: 3, nom_client: "Leroy Pierre", nombre_personnes: 6, date: "2024-05-16", heure: "18:45", statut: "confirmée", telephone: "0699123456" },
    { id: 4, nom_client: "Moreau Claire", nombre_personnes: 3, date: "2024-05-16", heure: "21:00", statut: "annulée", telephone: "0687654321" },
    { id: 5, nom_client: "Bernard Luc", nombre_personnes: 5, date: "2024-05-17", heure: "19:30", statut: "confirmée", telephone: "0623456789" }
];

function addReservation(){

}

// Challenge 2

let catalogueProducts = [
    { id: 1, nom: "iPhone 15 Pro", prix: 1199, stock_disponible: 15},
    { id: 2, nom: "MacBook Air M3", prix: 1499, stock_disponible: 8},
    { id: 3, nom: "AirPods Pro 2", prix: 279, stock_disponible: 25},
    { id: 4, nom: "Apple Watch Ultra", prix: 899, stock_disponible: 12},
    { id: 5, nom: "iPad Pro M4", prix: 1299, stock_disponible: 6},
    { id: 6, nom: "Apple Pencil Pro", prix: 149, stock_disponible: 20}
];

let panier = [
    { productId: 1, quantity: 1 },
    { productId: 3, quantity: 2 },
    { productId: 6, quantity: 3 }
];

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

function calculatePrice(productId){
    let product = panier.find(p => p.productId === productId)
    let productPrice = 0
    catalogueProducts.forEach(element => {
        if (element.id === productId) {
            productPrice = element.prix
        }
    });    
    console.log(product.quantity * productPrice);    
}

calculatePrice(1)

function applyPromo(code, totalHT) {
    let remise = 0;

    if (code === "BIENVENUE") {
        remise = totalHT * 0.15;
    }
    else if (code === "NOEL2025" && totalHT > 50) {
        remise = 10;
    }
    else if (code === "LIVGRATUITE") {
        remise = 7;
    }

    return remise;
}