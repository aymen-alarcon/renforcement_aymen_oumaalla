/* 3 */
SELECT client_id, COUNT(*) FROM `reservation` GROUP BY client_id HAVING COUNT(*) > 3;

/* 4 */

SELECT c.* FROM Chambre c WHERE c.id NOT IN 
(SELECT r.chambre_id FROM Reservation r WHERE NOT IN (r.date_fin < '2025-05-01' OR r.date_debut > '2025-05-05'));