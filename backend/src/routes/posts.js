// ---------------- IMPORTATIONS GÉNÉRALES ---------------------- // 

// Importation de l'infrastructure d'application Web Node.js
const express = require('express')

// Création du routeur
const router = express.Router()

// Importation du controlleur 'posts'
const postsCtrl = require('../controllers/posts')

// Importations des middlewares d'authentification et de gestion des fichiers
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')



// ---------------- ROUTES PUBLICATIONS ---------------------- // 

// Route utilisant la méthode POST pour ajouter une publication (utilisation du controlleur 'createPost')
router.post('/', auth, multer, postsCtrl.createPost)

// Route utilisant la méthode GET pour récupérer une publication avec son identifiant (utilisation du controlleur 'getOnePost')
// ':' indique que la route est dynamique
router.get('/:id', auth, postsCtrl.getOnePost)

// Route utilisant la méthode GET pour récupérer toutes les publications (utilisation du controlleur 'getAllPosts')
router.get('/', auth, postsCtrl.getAllPosts)

// Route utilisant la méthode PUT pour modifier une publication existante (utilisation du controlleur 'modifyPost')
router.put('/:id', auth, multer, postsCtrl.modifyPost)

// Route utilisant la méthode DELETE pour supprimer une publication existante (utilisation du controlleur 'deletePost')
router.delete('/:id', auth, postsCtrl.deletePost)



// ---------------- EXPORTATIONS ---------------------- // 

// Exportation des routeurs
module.exports = router