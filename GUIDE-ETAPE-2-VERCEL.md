# 📘 GUIDE ÉTAPE 2 : Déploiement sur Vercel

## 🎯 Objectif
Déployer votre site sur Vercel et le connecter à votre domaine taxidrive.org

---

## ✅ ÉTAPE 2.1 : Créer un compte Vercel

1. **Allez sur** : https://vercel.com/
2. **Cliquez sur** "Sign Up" ou "S'inscrire"
3. **Choisissez** "Continue with GitHub" (recommandé) ou utilisez votre email
4. **Autorisez** Vercel à accéder à votre compte GitHub si nécessaire
5. **Complétez** votre profil si demandé

**✅ Validez cette étape :** Êtes-vous connecté à votre compte Vercel ?

---

## ✅ ÉTAPE 2.2 : Préparer votre projet sur GitHub

### Option A : Si vous avez déjà un dépôt GitHub

1. **Ouvrez** votre terminal ou PowerShell
2. **Naviguez** vers votre dossier de projet :
   ```powershell
   cd C:\Users\T460s\Documents\GitHub\drebavtc
   ```
3. **Vérifiez** que tous vos fichiers sont là
4. **Ajoutez** tous les fichiers :
   ```powershell
   git add .
   ```
5. **Créez** un commit :
   ```powershell
   git commit -m "Préparation pour déploiement Vercel"
   ```
6. **Poussez** vers GitHub :
   ```powershell
   git push origin main
   ```

### Option B : Si vous n'avez pas encore de dépôt GitHub

1. **Allez sur** : https://github.com/
2. **Créez** un nouveau dépôt (cliquez sur "+" en haut à droite)
3. **Nom du dépôt** : `dreba-vtc` ou `taxidrive`
4. **Choisissez** "Public" ou "Private"
5. **Ne cochez PAS** "Initialize with README"
6. **Cliquez sur** "Create repository"
7. **Dans votre terminal**, exécutez :
   ```powershell
   cd C:\Users\T460s\Documents\GitHub\drebavtc
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/dreba-vtc.git
   git push -u origin main
   ```
   (Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)

**✅ Validez cette étape :** Votre code est-il sur GitHub ?

---

## ✅ ÉTAPE 2.3 : Importer le projet dans Vercel

1. **Dans Vercel**, cliquez sur "Add New..." → "Project"
2. **Cliquez sur** "Import Git Repository"
3. **Sélectionnez** votre dépôt GitHub (dreba-vtc ou taxidrive)
4. **Si demandé**, autorisez Vercel à accéder à votre dépôt
5. **Configuration du projet** :
   - **Framework Preset** : Laissez "Other" ou sélectionnez "Other"
   - **Root Directory** : Laissez vide (`.`)
   - **Build Command** : Laissez vide
   - **Output Directory** : Laissez vide
   - **Install Command** : Laissez vide
6. **Cliquez sur** "Deploy"

**✅ Validez cette étape :** Le déploiement a-t-il commencé ?

---

## ✅ ÉTAPE 2.4 : Attendre le déploiement

1. **Attendez** 1-2 minutes que Vercel déploie votre site
2. **Vous verrez** une URL temporaire comme : `dreba-vtc.vercel.app`
3. **Cliquez sur** "Visit" pour voir votre site

**✅ Validez cette étape :** Votre site fonctionne-t-il sur l'URL Vercel ?

---

## ✅ ÉTAPE 2.5 : Ajouter votre domaine taxidrive.org

1. **Dans Vercel**, allez dans votre projet
2. **Cliquez sur** l'onglet "Settings"
3. **Dans le menu de gauche**, cliquez sur "Domains"
4. **Entrez** votre domaine : `taxidrive.org`
5. **Cliquez sur** "Add"
6. **Vercel vous donnera** des instructions pour configurer votre DNS

### Configuration DNS

Vous devrez ajouter ces enregistrements DNS chez votre fournisseur de domaine :

**Option 1 : Configuration simple (A Record)**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Option 2 : Configuration avec CNAME (recommandé)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

**Option 3 : Sous-domaine www**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

7. **Attendez** 1-24 heures que le DNS se propage
8. **Vercel vérifiera** automatiquement et activera votre domaine

**✅ Validez cette étape :** Votre domaine est-il configuré dans Vercel ?

---

## ✅ ÉTAPE 2.5 : Vérifier le déploiement

1. **Visitez** : https://taxidrive.org
2. **Vérifiez** que votre site s'affiche correctement
3. **Testez** les fonctionnalités principales

**✅ Validez cette étape :** Votre site fonctionne-t-il sur taxidrive.org ?

---

## 🎉 Félicitations !

Votre site est maintenant déployé sur Vercel avec votre domaine !

**Prochaines étapes :**
- Mettre à jour le fichier HTML avec la configuration Firebase
- Tester toutes les fonctionnalités

---

## 📝 Notes importantes

- **Déploiements automatiques** : Chaque fois que vous poussez du code sur GitHub, Vercel redéploiera automatiquement
- **URLs de prévisualisation** : Vercel crée une URL unique pour chaque déploiement
- **HTTPS** : Vercel fournit automatiquement un certificat SSL gratuit

