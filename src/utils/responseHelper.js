/**
* Sendet eine erfolgreiche JSON-Antwort an den Client.
* @param {Response} res - Die Antwort.
* @param {Object} data - Die Daten, die in der Antwort gesendet werden.
* @param {string} [message='Operation successful'] - Die Nachricht, die in der Antwort gesendet wird.
*/
export const sendSuccess = (res, data, message = "Anfrage erfolgreich.") => {
    res.status(200).json({ message, data });
};

/**
* Sendet eine Fehler-Antwort an den Client.
* @param {Response} res - Die Antwort.
* @param {string} error - Die Fehlermeldung.
* @param {number} [statusCode=500] - Der HTTP-Statuscode für die Fehlermeldung.
*/
export const sendError = (res, error, statusCode = 500) => {
    res.status(statusCode).json({ error });
}