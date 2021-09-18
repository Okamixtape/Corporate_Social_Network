# Groupomania / Backend #

## Installation ##

Avant d'installer les dépendances, exécutez la commande suivante dans votre terminal : 

- `cd backend`

1) Installez les dépendances avec npm (gestionnaire de paquets Node JS) :

- `npm install`

2) Installez nodemon :

- `npm install -g nodemon`

3) Vérifiez que vous avez bien installé MySQL et exécutez les commandes suivantes :

- Créez la base de données en entrant `npx sequelize-cli db:create`

- Migrez les tables nécessaires `npx sequelize-cli db:migrate`

4) Créer un dossier 'images' dans le dossier backend

5) Gestion des variables d'environnements

Remplacer les variables pour la connexion à la base de données dans le fichier .env (dossier backend)

## Utilisation ##

Vous pouvez maintenant lancer : `nodemon server` dans votre terminal

Si le serveur fonctionne le terminal doit afficher : 
"Listening on port 3000"

L'application devrait se recharger automatiquement quand vous modifiez un fichier.

Utilsez `Ctrl+C` dans votre terminal pour arrêter nodemon.
