let users = [
    {
        id: "1",
        pseudo: "Aymen Oumaalla",
        email: "Aymen@gmail.com",
        role: "acheteur",
        averageRating: 4.5,
        wallet: 1500,
    },
    {
        id: "2",
        pseudo: "Ayme Oumaalla",
        email: "Ayme@gmail.com",
        role: "Vendeur",
        averageRating: 4.5,
        wallet: 1500,
    },
    {
        id: "3",
        pseudo: "Aym Oumaalla",
        email: "Aym@gmail.com",
        role: "acheteur",
        averageRating: 4.5,
        wallet: 1500,
    },
    {
        id: "4",
        pseudo: "Ay Oumaalla",
        email: "Ay@gmail.com",
        role: "Vendeur",
        averageRating: 4.5,
        wallet: 1500,
    },
    {
        id: "5",
        pseudo: "A Oumaalla",
        email: "A@gmail.com",
        role: "Vendeur",
        averageRating: 4.5,
        wallet: 1500,
    },
]

let annonce = []
let counter = 0

function addAnAnnonce(data = {vendeur_id, titre, description, prix, categorie, etat, statut ,date_publication}){
    counter += 1
    data.id = counter
    annonce.push(data)
    console.log(annonce);
}

addAnAnnonce(data = {vendeur_id: 3, titre: "titre", description: "lorem", prix: 15, categorie: "Électronique", etat: "neuf", statut: "disponible",date_publication: "12-5-2022"})

function updateAnAnnonce(data = {vendeur_id, titre, description, prix, categorie, etat, statut ,date_publication}){

}

updateAnAnnonce(data = {vendeur_id: 3, titre: "titre", description: "lorem", prix: 15, categorie: "Électronique", etat: "neuf", statut: "disponible",date_publication: "12-5-2022"})

function deleteAnAnnonce(annonceId){
    annonce.splice(annonceId - 1, 1)
}

deleteAnAnnonce(2)