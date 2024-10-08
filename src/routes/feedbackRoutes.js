import express from 'express';
import { addFeedback, getAllFeedback, deleteFeedbackByTitle } from '../controllers/feedbackController.js';
import { feedbackValidation } from '../middleware/validation.js'
import { sendSuccess, sendError } from '../utils/responseHelper.js';

const feedbackRouter = express.Router();


/**
* Route: POST /feedback
* Fügt neues Feedback hinzu.
*/
feedbackRouter.post('/feedback', feedbackValidation, async (req, res) => { 

    try {
        const { title, text } = req.body;
        const newFeedback = await addFeedback(title, text);
        sendSuccess(res, newFeedback, "Feedback erfolgreich gespeichert.");
    } catch (error) {
        sendError(res, "Fehler beim Speichern des Feedbacks.");
    }

});

/**
* Route: GET /feedback
* Ruft alle Feedback-Einträge ab.
*/
feedbackRouter.get('/feedback', async (req, res) => {

    try {
        const feedback = await getAllFeedback();
        sendSuccess(res, feedback, "Feedback erfolgreich abgefragt.");

    } catch (error) {
        sendError(res, "Fehler beim Abruf des Feedbacks.");
    }

});

/**
* Route: DELETE /feedback/:id
* Löscht einen Feedback-Eintrag anhand der ID.
*/
feedbackRouter.delete('/feedback/:title', async (req, res) => {

    try {
        const { title } = req.params;

        const result = await deleteFeedbackByTitle(title);
        if (result.rowCount === 0) {
            return sendError(res, "Feedback nicht gefunden", 404);
        }
        sendSuccess(res, null, "Feedback erfolgreich geloescht.");
    } catch (error) {
        sendError(res, "Fehler beim Loeschen des Feedbacks.");
    }
});

export default feedbackRouter;