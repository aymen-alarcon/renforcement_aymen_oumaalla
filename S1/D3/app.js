//Challenge 1

let contacts = [
    {
        "nom": "Dupont Jean",
        "entreprise": "TechSolutions SARL",
        "email": "jean.dupont@techsolutions.fr",
        "telephone": "01 23 45 67 89",
        "ville": "Paris",
        "adresse": {
            "rue": "12 Rue de Rivoli",
            "code_postal": "75001",
            "ville": "Paris",
            "pays": "France"
        }
    },
    {
        "nom": "Martin Sophie",
        "entreprise": "Creative Agency",
        "email": "sophie.martin@creative.fr",
        "telephone": "04 56 78 90 12",
        "ville": "Lyon",
        "adresse": {
            "rue": "45 Boulevard des Belges",
            "code_postal": "69006",
            "ville": "Lyon",
            "pays": "France"
        }
    },
    {
        "nom": "Leroy Pierre",
        "entreprise": "Logistics Pro",
        "email": "pierre.leroy@logisticspro.com",
        "telephone": "02 98 76 54 32",
        "ville": "Marseille",
        "adresse": {
            "rue": "78 Avenue du Prado",
            "code_postal": "13008",
            "ville": "Marseille",
            "pays": "France"
        }
    },
    {
        "nom": "Moreau Claire",
        "entreprise": "HealthCare Clinic",
        "email": "claire.moreau@healthcare.fr",
        "telephone": "03 45 67 89 01",
        "ville": "Lille",
        "adresse": {
            "rue": "23 Rue de Béthune",
            "code_postal": "59000",
            "ville": "Lille",
            "pays": "France"
        }
    },
    {
        "nom": "Bernard Luc",
        "entreprise": "Finance Experts",
        "email": "luc.bernard@financex.fr",
        "telephone": "01 87 65 43 21",
        "ville": "Paris",
        "adresse": {
            "rue": "56 Rue Saint-Honoré",
            "code_postal": "75001",
            "ville": "Paris",
            "pays": "France"
        }
    },
    {
        "nom": "Roux Marie",
        "entreprise": "Green Energy",
        "email": "marie.roux@greenenergy.eu",
        "telephone": "05 12 34 56 78",
        "ville": "Toulouse",
        "adresse": {
            "rue": "89 Allée de Brienne",
            "code_postal": "31000",
            "ville": "Toulouse",
            "pays": "France"
        }
    },
];

contacts.forEach(contact => {
    console.log(contact.nom);
    console.log(contact.ville);
});

console.log(Object.groupBy(contacts, ({ville}) => ville))

function LookForContact(entreprise){
    console.log(contacts.find((element) => element.entreprise = entreprise))
}

contacts.forEach(contact => {
    contact.dernierContact = "2020"
});

console.log(contacts);