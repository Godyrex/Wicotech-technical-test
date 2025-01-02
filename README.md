
# Gestion des Produits - Projet Fullstack

Ce projet est une application fullstack pour gérer une collection de produits.  
Le backend est développé avec **Node.js, Express, et MongoDB**, tandis que le frontend est réalisé avec **Angular**.

---

## Fonctionnalités
- **Backend** :
    - API RESTful pour gérer les produits (CRUD).
    - Connexion à une base de données MongoDB.
    - Gestion des erreurs et middleware de logging.

- **Frontend** :
    - Interface utilisateur pour interagir avec l'API.
    - Gestion des produits avec Angular et Bootstrap.
    - Routing pour naviguer entre les pages.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :
- [Node.js](https://nodejs.org/) (version 16+)
- [npm](https://www.npmjs.com/) (inclus avec Node.js)
- [Angular CLI](https://angular.io/cli) (version 15.2.10)
- [MongoDB](https://www.mongodb.com/) (local ou distant)

---

## Instructions pour Exécuter le Projet

### 1. Cloner le dépôt
```bash
git clone https://github.com/Godyrex/wicotech-technical-test.git
cd Wicotech-technical-test
```

---

### 2. Lancer le Backend

1. **Accéder au dossier backend** :
   ```bash
   cd backend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :  
   Créez un fichier `.env` dans le dossier `backend` avec le contenu suivant :
   ```plaintext
   PORT=5000
   MONGO_URI=<URL_DE_VOTRE_BASE_MONGODB>
   ```

4. **Démarrer le serveur** :
   ```bash
   npm start
   ```
   Le serveur backend sera disponible sur [http://localhost:5000](http://localhost:5000).

---

### 3. Lancer le Frontend

1. **Accéder au dossier frontend** :
   ```bash
   cd ../frontend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer l'URL de l'API** :  
   Dans le fichier `src/environments/environment.ts`, remplacez la valeur de `apiUrl` :
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:5000/api',
   };
   ```

4. **Démarrer l'application Angular** :
   ```bash
   ng serve
   ```
   Le frontend sera disponible sur [http://localhost:4200](http://localhost:4200).

---

## Routes Backend

- `GET /api/produits` : Récupérer tous les produits.
- `GET /api/produits/:id` : Récupérer un produit spécifique.
- `POST /api/produits` : Ajouter un nouveau produit.
- `PUT /api/produits/:id` : Mettre à jour un produit.
- `DELETE /api/produits/:id` : Supprimer un produit.

---

## Routes Frontend

- `/produits` : Affiche la liste des produits.
- `/produits/ajouter` : Affiche le formulaire pour ajouter un produit.
- `/produits/:id` : Affiche les détails d'un produit.
- `/produits/modifier/:id` : Affiche le formulaire pour modifier un produit.

---

## Technologies Utilisées

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- Angular
- Bootstrap

---

## Auteur
Créé par **Oussema Ouakad** dans le cadre d'une démonstration de projet fullstack.

