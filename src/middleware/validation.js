import { body, validationResult } from 'express-validator';

/**
* Middleware zur Validierung der Feedback-Eingaben.
* Prüft, ob die Felder `title` und `text` nicht leer sind.
*/
export const feedbackValidation = [
    body('title').notEmpty().withMessage("Titel ist erforderlich."),
    body('text').notEmpty().withMessage("Text ist erforderlich."),
    (res, req, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];