import pkg from 'pg';
const { Pool } = pkg;

/**
* Erstellt eine neue Verbindung zur PostgreSQL-Datenbank.
* Die Verbindung wird mit Umgebungsvariablen konfiguriert.
*/
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { 
        rejectUnauthorized: false,
    }
});

/**
* Erstellt die Feedback-Tabelle in der Datenbank, falls sie nicht existiert.
* @async
* @returns {Promise<void>} Eine Promise, die die Tabellenerstellung abschließt.
*/ 
const createTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS feedback (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                text TEXT NOT NULL
                );
            `);

    } catch (error) {
        console.error('Error creating table: ', error);
    }
}

export { pool, createTable };