/**
* Globale Fehlerbehandlungsmiddleware.
* Fängt alle auftretenden Fehler ab und gibt eine 500-Fehlermeldung zurück.
* @param {Error} err - Der aufgetretene Fehler.
* @param {Request} req - Die Anfrage.
* @param {Response} res - Die Antwort.
* @param {Function} next - Der nächste Middleware-Handler.
*/
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
};