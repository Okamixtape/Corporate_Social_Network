// ---------------- IMPORTATIONS GÉNÉRALES ---------------------- // 

// Importation de file system pour la gestion des fichiers (de Node)
const fs = require('fs')



// --------------------- FONCTIONS / MIDDLEWARES ---------------------- // 

// ---- Fonction/Middleware permettant de supprimer un fichier ---- //

function deleteFile (imageUrl) {
    if (!imageUrl) return
    // Recherche du nom du fichier de l'image
    const filename = imageUrl.split('/images/')[1]
    // Utilisation de 'file system' pour supprimer le fichier du dossier 'images'
    fs.unlink(`images/${filename}`, () => {})
}



// --------------------- EXPORTATIONS ---------------------- //

module.exports = {
    deleteFile
}