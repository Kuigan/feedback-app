import { pool } from './db.js';

/**
* Fügt ein neues Feedback in die Datenbank ein.
* @async
* @param {string} title - Der Titel des Feedbacks.
* @param {string} text - Der Text des Feedbacks.
* @returns {Promise<Object>} Das neu erstellte Feedback-Ob
jekt.
*/
export const addFeedback = async (title, text) => {
    const query = `INSERT INTO feedback (title, text) VALUES ($1, $2) RETURNING *;`;
    const result = await pool.query(query, [title, text]);

    return result.rows[0];
}

/**
* Ruft alle Feedback-Einträge aus der Datenbank ab.
* @async
* @returns {Promise<Object[]>} Eine Liste aller Feedback-Einträge.
*/
export const getAllFeedback = async () => {
    const query = `SELECT * FROM feedback;`;
    const result = await pool.query(query);

    return result.rows;
}

/**
* Löscht einen Feedback-Eintrag anhand der ID aus der Datenbank.
* @async
* @param {number} id - Die ID des zu löschenden Feedback-Eintrags.
* @returns {Promise<Object>} Das Ergebnis des Löschvorgangs.
*/
export const deleteFeedbackByTitle = async (title) => {
    const query = `DELETE FROM feedback WHERE title = $1 RETURNING *;`;
    const result = await pool.query(query, [title]);
    
    return result;
}