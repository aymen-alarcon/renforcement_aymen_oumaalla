/* 1 */
SELECT
    l.titre,
    e.nom AS editeur,
    g.nom AS genre
FROM
    livres l
    JOIN editeurs e ON l.editeur_id = e.id
    JOIN genres g ON l.genre_id = g.id;

/* 2 */
SELECT
    e.nom,
    COUNT(l.id) AS nombre_livres
FROM
    editeurs e
    LEFT JOIN livres l ON l.editeur_id = e.id
GROUP BY
    e.id,
    e.nom
ORDER BY
    nombre_livres DESC;

/* 3 */
SELECT
    g.nom,
    SUM(l.prix * v.quantite) AS chiffre_affaires
FROM
    ventes v
    JOIN livres l ON v.livre_id = l.id
    JOIN genres g ON l.genre_id = g.id
GROUP BY
    g.id,
    g.nom;

/* 4 */
SELECT
    e.nom
FROM
    editeurs e
    LEFT JOIN livres l ON l.editeur_id = e.id
    LEFT JOIN ventes v ON v.livre_id = l.id
WHERE
    v.id IS NULL;

/* 5 */
SELECT
    l.titre
FROM
    livres l
    JOIN ventes v ON l.id = v.livre_id
GROUP BY
    l.genre_id
ORDER BY
    COUNT(v.livre_id) DESC;

/* 6 */
SELECT
    v.client
FROM
    ventes v
    JOIN livres l ON v.livre_id = l.id
GROUP BY
    v.client
HAVING
    COUNT(DISTINCT l.genre_id) > 3;

/* 8 */
SELECT
    l.titre,
    l.prix
FROM
    livres l
WHERE
    l.annee_publication > 2020
    AND l.prix > (
        SELECT
            AVG(l2.prix)
        FROM
            livres l2
        WHERE
            l2.genre_id = l.genre_id
    );