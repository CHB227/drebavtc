# 📘 GUIDE ÉTAPE 1 : Configuration Firebase

## 🎯 Objectif
Créer un projet Firebase et obtenir les clés de configuration nécessaires.

---

## ✅ ÉTAPE 1.1 : Créer un compte Firebase

1. **Allez sur** : https://console.firebase.google.com/
2. **Cliquez sur** "Commencer" ou "Get Started"
3. **Connectez-vous** avec votre compte Google (ou créez-en un)
4. **Acceptez** les conditions d'utilisation

**✅ Validez cette étape avant de continuer :** Avez-vous créé votre compte Firebase ?

---

## ✅ ÉTAPE 1.2 : Créer un nouveau projet

1. **Cliquez sur** "Ajouter un projet" ou "Add project"
2. **Nom du projet** : Entrez `dreba-vtc` (ou un nom de votre choix)
3. **Cliquez sur** "Continuer" ou "Continue"
4. **Désactivez Google Analytics** (pour l'instant, vous pouvez l'activer plus tard)
   - Décochez "Enable Google Analytics for this project"
5. **Cliquez sur** "Créer le projet" ou "Create project"
6. **Attendez** que Firebase crée votre projet (30-60 secondes)
7. **Cliquez sur** "Continuer" ou "Continue"

**✅ Validez cette étape :** Voyez-vous l'écran d'accueil de votre projet Firebase ?

---

## ✅ ÉTAPE 1.3 : Activer Firestore (Base de données)

1. **Dans le menu de gauche**, cliquez sur **"Firestore Database"**
2. **Cliquez sur** "Créer une base de données" ou "Create database"
3. **Choisissez** "Commencer en mode test" ou "Start in test mode"
   - ⚠️ **Important** : Nous configurerons la sécurité plus tard
4. **Sélectionnez** une localisation (choisissez la plus proche de vous, par exemple : `europe-west`)
5. **Cliquez sur** "Activer" ou "Enable"
6. **Attendez** que la base de données soit créée (1-2 minutes)

**✅ Validez cette étape :** Voyez-vous l'interface Firestore avec le message "No collections yet" ?

---

## ✅ ÉTAPE 1.4 : Obtenir les clés de configuration

1. **Dans le menu de gauche**, cliquez sur l'icône ⚙️ **"Paramètres du projet"** (Project settings)
2. **Faites défiler** jusqu'à la section "Vos applications" ou "Your apps"
3. **Cliquez sur** l'icône `</>` (Web) pour ajouter une application web
4. **Nom de l'application** : Entrez `dreba-vtc-web`
5. **Cochez** "Configurer également Firebase Hosting" (optionnel, on utilisera Vercel)
6. **Cliquez sur** "Enregistrer l'application" ou "Register app"
7. **Vous verrez** un code de configuration qui ressemble à ceci :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "dreba-vtc.firebaseapp.com",
  projectId: "dreba-vtc",
  storageBucket: "dreba-vtc.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

8. **COPIEZ** ces valeurs (vous en aurez besoin dans l'étape suivante)

**✅ Validez cette étape :** Avez-vous copié toutes les valeurs de configuration ?

---

## ✅ ÉTAPE 1.5 : Configurer les règles de sécurité Firestore

1. **Retournez** dans "Firestore Database"
2. **Cliquez sur** l'onglet "Règles" ou "Rules" en haut
3. **Remplacez** le contenu par ceci :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Collection des chauffeurs
    match /drivers/{driverId} {
      allow read: if true; // Tout le monde peut lire
      allow create: if true; // Tout le monde peut créer (inscription)
      allow update: if request.auth != null; // Seuls les utilisateurs connectés peuvent modifier
      allow delete: if false; // Personne ne peut supprimer
    }
    
    // Collection des appels
    match /calls/{callId} {
      allow read: if true;
      allow create: if true;
      allow update: if false;
      allow delete: if false;
    }
    
    // Collection des réservations
    match /bookings/{bookingId} {
      allow read: if true;
      allow create: if true;
      allow update: if true;
      allow delete: if false;
    }
  }
}
```

4. **Cliquez sur** "Publier" ou "Publish"

**✅ Validez cette étape :** Les règles sont-elles publiées avec succès ?

---

## 🎉 Félicitations !

Vous avez terminé la configuration Firebase ! 

**Prochaines étapes :**
- Vous allez maintenant mettre à jour le fichier `firebase-config.js` avec vos clés
- Puis nous passerons au déploiement sur Vercel

**⚠️ Important :** Gardez vos clés Firebase secrètes. Ne les partagez jamais publiquement.

---

## 📝 Notes importantes

- **Mode test** : Firestore est en mode test pour l'instant. C'est OK pour commencer.
- **Sécurité** : Plus tard, nous pourrons améliorer les règles de sécurité.
- **Coûts** : Firebase a un plan gratuit généreux pour commencer.

