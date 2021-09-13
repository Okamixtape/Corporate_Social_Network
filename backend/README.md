# Groupomania / Backend #

## Installation ##

Avant d'installer les dépendances, exécutez la commande suivante dans votre terminal : 

- `cd backend`

1) Installez npm (gestionnaire de paquets Node JS) :

- `npm install`

2) Installez nodemon :

- `npm install -g nodemon`

3) Installez toutes les dépendances présentes dans "package.json" :

- "bcrypt": "^5.0.1", = `npm install --save bcrypt`
- "body-parser": "^1.19.0", = `npm install --save body-parser`
- "cors": "^2.8.5", = `npm install --save cors`
- "dotenv": "^10.0.0", = `npm install --save dotenv`
- "express": "^4.17.1", = `npm install --save express`
- "express-rate-limit": "^5.3.0", = `npm install --save express-rate-limit`
- "helmet": "^4.6.0", = `npm install --save helmet`
- "jsonwebtoken": "^8.5.1", = `npm install --save jsonwebtoken`
- "moment": "^2.29.1", = `npm install --save moment`
- "multer": "^1.4.3", = `npm install --save multer`
- "mysql": "^2.18.1", = `npm install --save mysql`
- "mysql2": "^2.3.0", = `npm install --save mysql2`
- "password-validator": "^5.1.1", = `npm install --save password-validator`
- "sequelize": "^6.6.5", = `npm install --save sequelize`
- "sequelize-cli": "^6.2.0", `npm install --save-dev sequelize-cli`
- "standard": "^16.0.3", = `npm install --save standard`

4) Vérifiez que vous avez bien installé MySQL et exécutez les commandes suivantes :

Créez la base de données en entrant `npx sequelize-cli db:create`
Migrez les tables nécessaires `npx sequelize-cli db:migrate`

5) Si le dossier 'images' ne figure pas dans les dossiers du backend, veuillez le créer (s'il est manquant vous ne pourrez pas télécharger une image si vous voulez créer ou modifer une publication)

## Utilisation ##

Vous pouvez maintenant lancer : `nodemon server` dans votre terminal

Si le serveur fonctionne le terminal doit afficher : 
"Listening on port 3000"

L'application devrait se recharger automatiquement quand vous modifiez un fichier.

Utilsez `Ctrl+C` dans votre terminal pour arrêter nodemon.
