# 🚀 Guide d'Installation et Déploiement - Mentality Web

## ✅ Ce qui a été créé

J'ai créé une application web **identique visuellement** à votre application Flutter Mentality, avec :

### Structure complète
- ✅ Page d'accueil (HomePage) avec 3 cartes d'action
- ✅ Écran de démarrage (SplashScreen) avec animation 3s
- ✅ Page d'introduction d'évaluation (AssessmentIntroPage)
- ✅ Système de couleurs **exactement identique** au Flutter (272 lignes)
- ✅ CSS global avec Material Design 3
- ✅ Modèles de données TypeScript (CompleteTestSession)
- ✅ Constantes psychométriques
- ✅ Pages placeholder pour tous les tests
- ✅ Page de chat (placeholder)
- ✅ README complet

### Design fidèle
- Même palette de couleurs (Indigo, Cyan, Pink)
- Même typographie (13 niveaux)
- Mêmes gradients
- Mêmes bordures arrondies
- Mêmes espacements
- Même responsive design

## 📦 Installation Locale

```bash
# 1. Aller dans le dossier
cd "/Users/alvinkuyo/Downloads/Mentality copie/mentality-web"

# 2. Installer les dépendances (déjà fait !)
npm install

# 3. Lancer l'application
npm run dev

# L'application sera disponible sur : http://localhost:5173
```

## 🌐 Déployer sur GitHub Pages

### Étape 1 : Préparer pour le déploiement

```bash
# Dans le dossier mentality-web

# 1. Installer gh-pages
npm install --save-dev gh-pages

# 2. Ajouter ces lignes dans package.json :
```

Modifiez `package.json` pour ajouter :

```json
{
  "name": "mentality-web",
  "homepage": "https://VOTRE_USERNAME.github.io/mentality-web",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Étape 2 : Créer le repository GitHub

```bash
# 1. Initialiser git
git init
git add .
git commit -m "Initial commit - Mentality Web App"

# 2. Créer un repo sur GitHub (via le site web)
# Nom suggéré : mentality-web

# 3. Lier le repo local au repo GitHub
git remote add origin https://github.com/VOTRE_USERNAME/mentality-web.git

# 4. Push initial
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer

```bash
# Déployer sur GitHub Pages
npm run deploy

# Votre app sera disponible sur :
# https://VOTRE_USERNAME.github.io/mentality-web
```

### Étape 4 : Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur "Settings"
3. Dans la sidebar, cliquez sur "Pages"
4. Source : sélectionnez "gh-pages" branch
5. Cliquez sur "Save"

Votre site sera en ligne en quelques minutes ! 🎉

## 🔧 Modifier le vite.config.ts pour GitHub Pages

Si vous déployez sur GitHub Pages, modifiez `vite.config.ts` :

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/mentality-web/', // Nom de votre repo
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 📝 Prochaines Étapes de Développement

Pour compléter l'application et la rendre **100% identique** au Flutter :

### 1. Implémenter les générateurs d'items
- `src/generators/MatrixGenerator.ts` - Génère 26 matrices uniques
- `src/generators/CubePatternGenerator.ts` - Génère 14 patterns de cubes
- `src/generators/BalanceGenerator.ts` - Génère 27 équations

### 2. Créer les 12 tests cognitifs
Chaque test dans `src/pages/tests/` :
- MatricesTestPage.tsx (Raisonnement fluide)
- CubesTestPage.tsx (Visuo-spatial)
- FigureWeightsTestPage.tsx (Raisonnement quantitatif)
- VisualPuzzlesTestPage.tsx
- SimilaritiesTestPage.tsx
- VocabularyTestPage.tsx
- InformationTestPage.tsx
- DigitSpanTestPage.tsx
- ArithmeticTestPage.tsx
- PictureSpanTestPage.tsx
- CodingTestPage.tsx
- SymbolSearchTestPage.tsx

### 3. Orchestrateur de test complet
`CompleteTestOrchestratorPage.tsx` :
- Lance les 12 tests en séquence
- Enregistre les scores
- Affiche la progression (X/12)
- Transitions de 500ms entre tests

### 4. Page de résultats
`CompleteTestResultsPage.tsx` :
- Calcul des 5 indices cognitifs (ICV, IVS, IRF, IMT, IVT)
- Calcul du QI estimé
- Affichage avec graphiques
- Export PDF

### 5. Chat Claude AI
Intégrer l'API Claude :
```typescript
// src/services/ClaudeAPI.ts
const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;

// Créer un fichier .env :
VITE_CLAUDE_API_KEY=votre_clé_api
```

## 🎨 Personnalisation

### Changer les couleurs
Modifiez `src/styles/AppColors.ts` :
```typescript
static readonly primary = '#VOTRE_COULEUR';
```

### Changer les textes
Modifiez `src/constants/AppConstants.ts` :
```typescript
static readonly APP_NAME = 'Votre Nom';
static readonly APP_TAGLINE = 'Votre tagline';
```

## 🐛 Résolution de Problèmes

### Le serveur ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreurs TypeScript
```bash
# Vérifier la configuration
npx tsc --noEmit
```

### Build échoue
```bash
# Nettoyer et rebuild
rm -rf dist
npm run build
```

## 📊 Statut Actuel

✅ **Complété (40%)**
- Structure de l'application
- Design system complet
- Pages principales
- Navigation
- Modèles de données

🚧 **En cours (60%)**
- Tests cognitifs (0/12 implémentés)
- Générateurs d'items
- Orchestrateur
- Résultats et scoring
- Chat AI

## 💡 Conseils

1. **Testez régulièrement** : Lancez `npm run dev` après chaque modification
2. **Commitez souvent** : `git commit` après chaque fonctionnalité
3. **Utilisez les branches** : `git checkout -b feature/matrices-test`
4. **Documentez** : Ajoutez des commentaires dans le code

## 🆘 Besoin d'Aide ?

Pour continuer le développement de l'application :
1. Commencez par implémenter un test simple (Matrices ou Cubes)
2. Testez-le complètement
3. Répétez pour les 11 autres tests
4. Intégrez l'orchestrateur
5. Finalisez avec les résultats et le chat

## 📧 Contact

Pour toute question sur le code ou l'architecture, référez-vous :
- Au README.md principal
- Aux commentaires dans le code source
- À la documentation Flutter originale

---

**Bonne chance avec votre application Mentality Web ! 🧠✨**
