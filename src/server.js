import express from 'express';
import cors from 'cors';
import feedbackRouter from './routes/feedbackRoutes.js';
import { createTable } from './db.js';

// Express-App erstellen
const app = express();
const PORT = 3000;

// Middleware: CORS und JSON-Parsing
app.use(cors());
app.use(express.json());

// Erstellt die Feedback-Tabelle, wenn der Server startet.
createTable();


app.use('/', feedbackRouter);

// Startet den Server auf dem angegebenen Port.
app.listen(PORT, ()=> {
    console.log(`Server laeuft auf http://localhost:${PORT}`);
});
