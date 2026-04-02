CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    mot_de_passe VARCHAR(255),
    role ENUM('formateur', 'apprenant') NOT NULL
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100)
);

CREATE TABLE cours (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255),
    description TEXT,
    prix DECIMAL(10,2),
    formateur_id INT,
    categorie_id INT,
    FOREIGN KEY (formateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

CREATE TABLE modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255),
    cours_id INT,
    FOREIGN KEY (cours_id) REFERENCES cours(id)
);

CREATE TABLE lecons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255),
    contenu TEXT,
    module_id INT,
    FOREIGN KEY (module_id) REFERENCES modules(id)
);

CREATE TABLE inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apprenant_id INT,
    cours_id INT,
    date_inscription DATE,
    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (cours_id) REFERENCES cours(id)
);

CREATE TABLE avis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note INT,
    commentaire TEXT,
    apprenant_id INT,
    cours_id INT,
    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (cours_id) REFERENCES cours(id)
);