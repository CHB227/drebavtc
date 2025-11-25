# 🚕 Dréba VTC - Site Web de Réservation de Taxis

Site web moderne pour la réservation de taxis au Niger, déployé sur Vercel avec Firebase comme base de données.

## 📋 Prérequis

- Un compte Google (pour Firebase)
- Un compte GitHub
- Un compte Vercel
- Un domaine (taxidrive.org)

## 🚀 Guide de Déploiement

### Étape 1 : Configuration Firebase
Suivez le guide détaillé : **[GUIDE-ETAPE-1-FIREBASE.md](./GUIDE-ETAPE-1-FIREBASE.md)**

### Étape 2 : Déploiement sur Vercel
Suivez le guide détaillé : **[GUIDE-ETAPE-2-VERCEL.md](./GUIDE-ETAPE-2-VERCEL.md)**

### Étape 3 : Intégration Firebase
Suivez le guide détaillé : **[GUIDE-ETAPE-3-INTEGRATION.md](./GUIDE-ETAPE-3-INTEGRATION.md)**

## 📁 Structure du Projet

```
drebavtc/
├── Dréba VTC.html          # Fichier HTML principal
├── firebase-config.js      # Configuration Firebase (à compléter)
├── vercel.json             # Configuration Vercel
├── Icon/                   # Images et logos
├── Photo Taxi/             # Photos des véhicules
└── Guides/                 # Guides de déploiement
```

## 🔧 Configuration

### Firebase
1. Créez un projet Firebase
2. Activez Firestore
3. Copiez vos clés dans `firebase-config.js`

### Vercel
1. Connectez votre dépôt GitHub
2. Configurez votre domaine taxidrive.org
3. Déployez !

## 📝 Notes Importantes

- ⚠️ **Sécurité** : Les règles Firestore sont en mode test. Améliorez-les en production.
- ⚠️ **PIN** : Les codes PIN sont stockés en clair. En production, utilisez le hachage.
- ✅ **HTTPS** : Vercel fournit automatiquement un certificat SSL.

## 🆘 Support

En cas de problème, vérifiez :
1. Les clés Firebase dans `firebase-config.js`
2. La console du navigateur (F12) pour les erreurs
3. Les règles Firestore dans la console Firebase

## 📄 Licence

Tous droits réservés - Dréba VTC

