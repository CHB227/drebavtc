# 🚀 Guide de Démarrage Rapide - Dréba VTC

## 📋 Vue d'ensemble

Ce guide vous accompagne étape par étape pour déployer votre site **Dréba VTC** sur **Vercel** avec **Firebase** comme base de données.

**Temps estimé :** 30-45 minutes

---

## ✅ Checklist de Déploiement

### Phase 1 : Firebase (15 minutes)
- [ ] Créer un compte Firebase
- [ ] Créer un projet Firebase
- [ ] Activer Firestore
- [ ] Obtenir les clés de configuration
- [ ] Configurer les règles de sécurité
- [ ] Mettre à jour `firebase-config.js` avec vos clés

### Phase 2 : GitHub (5 minutes)
- [ ] Créer un dépôt GitHub
- [ ] Pousser votre code sur GitHub

### Phase 3 : Vercel (10 minutes)
- [ ] Créer un compte Vercel
- [ ] Importer le projet depuis GitHub
- [ ] Configurer le domaine taxidrive.org
- [ ] Vérifier le déploiement

### Phase 4 : Test (5 minutes)
- [ ] Tester l'inscription d'un chauffeur
- [ ] Vérifier les données dans Firestore
- [ ] Tester la connexion chauffeur

---

## 📚 Guides Détaillés

1. **[GUIDE-ETAPE-1-FIREBASE.md](./GUIDE-ETAPE-1-FIREBASE.md)** - Configuration Firebase
2. **[GUIDE-ETAPE-2-VERCEL.md](./GUIDE-ETAPE-2-VERCEL.md)** - Déploiement Vercel
3. **[GUIDE-ETAPE-3-INTEGRATION.md](./GUIDE-ETAPE-3-INTEGRATION.md)** - Intégration finale

---

## ⚠️ Points Importants

### Avant de Commencer

1. **Assurez-vous d'avoir :**
   - Un compte Google (pour Firebase)
   - Un compte GitHub
   - Un compte Vercel (gratuit)
   - Votre domaine taxidrive.org configuré

2. **Fichiers à Modifier :**
   - `firebase-config.js` - Ajoutez vos clés Firebase ici

3. **Ne Pas Oublier :**
   - Sauvegarder vos clés Firebase en lieu sûr
   - Ne jamais partager vos clés publiquement
   - Tester localement avant de déployer

---

## 🆘 En Cas de Problème

### Erreur : "Firebase not initialized"
- Vérifiez que `firebase-config.js` contient vos vraies clés
- Vérifiez que les scripts Firebase sont chargés dans le HTML

### Erreur : "Permission denied" dans Firestore
- Vérifiez les règles Firestore dans la console Firebase
- Assurez-vous que les règles sont en mode test

### Le site ne se déploie pas sur Vercel
- Vérifiez que votre code est sur GitHub
- Vérifiez les logs de déploiement dans Vercel
- Assurez-vous que `vercel.json` est présent

### Le domaine ne fonctionne pas
- Attendez 1-24 heures pour la propagation DNS
- Vérifiez la configuration DNS chez votre fournisseur
- Vérifiez dans Vercel que le domaine est validé

---

## 📞 Support

Si vous rencontrez des problèmes :

1. **Vérifiez la console du navigateur** (F12) pour les erreurs
2. **Vérifiez la console Firebase** pour les erreurs Firestore
3. **Vérifiez les logs Vercel** pour les erreurs de déploiement

---

## 🎉 Une Fois Terminé

Votre site sera accessible sur :
- **Production :** https://taxidrive.org
- **Vercel :** https://votre-projet.vercel.app

**Félicitations !** 🎊

