# 🚀 Déploiement Rapide sur GitHub

## ✅ Ce qui est déjà fait :
- ✅ Git initialisé
- ✅ Premier commit créé
- ✅ Branche renommée en 'main'
- ✅ Code prêt à être poussé

## 📤 Étapes pour Déployer (3 minutes)

### Étape 1 : Créer le Repository sur GitHub

1. Allez sur https://github.com/new
2. Remplissez :
   - **Repository name:** `mentality-web`
   - **Description:** `Évaluation cognitive adaptative - Version web de l'app Flutter Mentality`
   - **Public** (coché)
   - **N'ajoutez RIEN** (pas de README, pas de .gitignore, pas de license)
3. Cliquez sur **"Create repository"**

### Étape 2 : Pousser le Code

Copiez-collez ces commandes dans votre terminal :

```bash
cd "/Users/alvinkuyo/Downloads/Mentality copie/mentality-web"

# Récupérez votre nom d'utilisateur GitHub
# Si c'est "alvinkuyo", utilisez :
git remote add origin https://github.com/alvinkuyo/mentality-web.git

# Si votre username est différent, remplacez "alvinkuyo" par votre username
# git remote add origin https://github.com/VOTRE_USERNAME/mentality-web.git

# Pousser le code
git push -u origin main
```

GitHub va vous demander de vous authentifier :
- **Username:** votre username GitHub
- **Password:** utilisez un **Personal Access Token** (pas votre mot de passe)

### Comment créer un Personal Access Token (si nécessaire) :

1. Allez sur https://github.com/settings/tokens
2. Cliquez sur **"Generate new token"** → **"Generate new token (classic)"**
3. Donnez un nom : `mentality-web-deploy`
4. Sélectionnez les scopes : **`repo`** (cochez toutes les sous-cases)
5. Cliquez sur **"Generate token"**
6. **COPIEZ LE TOKEN** (vous ne pourrez plus le voir après !)
7. Utilisez ce token comme mot de passe quand git vous le demande

### Étape 3 : Activer GitHub Pages

1. Allez sur votre repository : `https://github.com/VOTRE_USERNAME/mentality-web`
2. Cliquez sur **"Settings"**
3. Dans la sidebar, cliquez sur **"Pages"**
4. Dans "Build and deployment" :
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Cliquez sur **"Save"**

### Étape 4 : Modifier vite.config.ts (Important !)

Avant que GitHub Pages fonctionne, modifiez le fichier `vite.config.ts` :

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/mentality-web/',  // ← Ajoutez cette ligne !
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Ensuite, re-commitez et poussez :

```bash
cd "/Users/alvinkuyo/Downloads/Mentality copie/mentality-web"
git add vite.config.ts
git commit -m "Configure base URL for GitHub Pages"
git push
```

### Étape 5 : Déployer avec GitHub Actions (Option Automatique)

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

Puis :

```bash
mkdir -p .github/workflows
# Créez le fichier deploy.yml avec le contenu ci-dessus
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for deployment"
git push
```

### Étape 6 : Vérifier le Déploiement

Votre site sera disponible sur :
```
https://VOTRE_USERNAME.github.io/mentality-web/
```

Par exemple :
```
https://alvinkuyo.github.io/mentality-web/
```

⏱️ Le déploiement prend 2-3 minutes.

## 🎉 C'est Tout !

Votre application Mentality Web est maintenant en ligne !

## 🔧 Pour Mettre à Jour Plus Tard

Quand vous modifiez le code :

```bash
cd "/Users/alvinkuyo/Downloads/Mentality copie/mentality-web"
git add .
git commit -m "Description de vos changements"
git push
```

GitHub Pages se mettra à jour automatiquement (si vous avez configuré GitHub Actions).

## 📝 Résumé des Commandes

```bash
# 1. Créer le repo sur GitHub (via le site web)

# 2. Pousser le code
cd "/Users/alvinkuyo/Downloads/Mentality copie/mentality-web"
git remote add origin https://github.com/VOTRE_USERNAME/mentality-web.git
git push -u origin main

# 3. Modifier vite.config.ts (ajouter base: '/mentality-web/')
# 4. Re-commit et push
git add vite.config.ts
git commit -m "Configure base URL for GitHub Pages"
git push

# 5. Activer GitHub Pages dans Settings > Pages
# 6. Visiter https://VOTRE_USERNAME.github.io/mentality-web/
```

---

**Besoin d'aide ?** Suivez les étapes une par une et tout fonctionnera ! 🚀
