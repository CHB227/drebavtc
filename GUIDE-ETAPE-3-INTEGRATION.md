# 📘 GUIDE ÉTAPE 3 : Intégration Firebase dans le code

## 🎯 Objectif
Mettre à jour votre code HTML pour utiliser Firebase au lieu de l'API backend.

---

## ⚠️ AVANT DE COMMENCER

Assurez-vous d'avoir :
- ✅ Terminé l'ÉTAPE 1 (Configuration Firebase)
- ✅ Copié vos clés Firebase
- ✅ Votre projet est prêt sur GitHub

---

## ✅ ÉTAPE 3.1 : Mettre à jour firebase-config.js

1. **Ouvrez** le fichier `firebase-config.js`
2. **Remplacez** toutes les valeurs `VOTRE_..._ICI` par vos vraies clés Firebase
3. **Sauvegardez** le fichier

**Exemple :**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdefghijklmnopqrstuv",
  authDomain: "dreba-vtc.firebaseapp.com",
  projectId: "dreba-vtc",
  storageBucket: "dreba-vtc.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

**✅ Validez cette étape :** Avez-vous mis à jour toutes les clés dans firebase-config.js ?

---

## ✅ ÉTAPE 3.2 : Ajouter les scripts Firebase dans le HTML

Le fichier HTML a déjà été mis à jour pour inclure Firebase. Vérifiez que ces lignes sont présentes dans la section `<head>` :

```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"></script>
```

**✅ Validez cette étape :** Les scripts Firebase sont-ils présents dans le HTML ?

---

## ✅ ÉTAPE 3.3 : Tester localement (optionnel mais recommandé)

1. **Ouvrez** le fichier `Dréba VTC.html` dans votre navigateur
2. **Ouvrez** la console du navigateur (F12)
3. **Vérifiez** qu'il n'y a pas d'erreurs Firebase
4. **Testez** le formulaire d'inscription chauffeur

**✅ Validez cette étape :** Le site fonctionne-t-il localement sans erreurs ?

---

## ✅ ÉTAPE 3.4 : Pousser les modifications sur GitHub

1. **Ouvrez** votre terminal dans le dossier du projet
2. **Ajoutez** les fichiers modifiés :
   ```powershell
   git add .
   ```
3. **Créez** un commit :
   ```powershell
   git commit -m "Intégration Firebase"
   ```
4. **Poussez** vers GitHub :
   ```powershell
   git push origin main
   ```

**✅ Validez cette étape :** Les modifications sont-elles sur GitHub ?

---

## ✅ ÉTAPE 3.5 : Vérifier le déploiement automatique

1. **Allez sur** Vercel
2. **Vérifiez** qu'un nouveau déploiement a commencé automatiquement
3. **Attendez** que le déploiement se termine
4. **Visitez** https://taxidrive.org
5. **Testez** le formulaire d'inscription chauffeur

**✅ Validez cette étape :** Le formulaire fonctionne-t-il sur le site en ligne ?

---

## 🎉 Félicitations !

Votre site est maintenant intégré avec Firebase !

**Prochaines étapes :**
- Tester toutes les fonctionnalités
- Vérifier que les données s'enregistrent dans Firestore

---

## 🔍 Comment vérifier que Firebase fonctionne

1. **Allez sur** : https://console.firebase.google.com/
2. **Sélectionnez** votre projet
3. **Cliquez sur** "Firestore Database"
4. **Vous devriez voir** des collections apparaître quand vous utilisez le site :
   - `drivers` : Les chauffeurs inscrits
   - `calls` : Les appels enregistrés
   - `bookings` : Les réservations

---

## 📝 Notes importantes

- **Premier test** : Essayez de vous inscrire comme chauffeur sur le site
- **Vérification** : Allez dans Firestore pour voir si les données apparaissent
- **Erreurs** : Si vous voyez des erreurs, vérifiez la console du navigateur (F12)

