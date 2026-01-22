# Mentality - Évaluation Cognitive Adaptative

Application web d'évaluation cognitive inspirée des échelles WAIS-IV (Wechsler Adult Intelligence Scale).

## 🧠 Caractéristiques

- **12 tests cognitifs** reproduisant les subtests WAIS-IV
- **5 domaines cognitifs** évalués :
  - Compréhension Verbale (ICV)
  - Raisonnement Visuo-Spatial (IVS)
  - Raisonnement Fluide (IRF)
  - Mémoire de Travail (IMT)
  - Vitesse de Traitement (IVT)

- **IA adaptative** avec Item Response Theory (IRT)
- **Chat Assistant** propulsé par Claude AI
- **Design Material 3** fidèle à l'application Flutter originale

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📱 Tests Implémentés

### Tests principaux (WAIS-IV Core)
1. **Cubes (Block Design)** - Raisonnement visuo-spatial
2. **Similitudes** - Compréhension verbale
3. **Mémoire des Chiffres** - Mémoire de travail
4. **Matrices** - Raisonnement fluide
5. **Vocabulaire** - Compréhension verbale
6. **Arithmétique** - Mémoire de travail
7. **Recherche de Symboles** - Vitesse de traitement
8. **Puzzles Visuels** - Raisonnement visuo-spatial
9. **Information** - Compréhension verbale
10. **Code** - Vitesse de traitement

### Tests supplémentaires
11. **Mémoire des Images** - Mémoire de travail
12. **Balances (Figure Weights)** - Raisonnement fluide

## 🎨 Design System

L'application reproduit **exactement** le design de l'application Flutter originale :

- **Couleurs** : Palette Material Design 3 (Indigo, Cyan, Pink)
- **Typographie** : Système de 13 niveaux typographiques
- **Composants** : Cartes, boutons, gradients identiques au Flutter
- **Animations** : Transitions fluides (200ms, 400ms, 600ms)
- **Responsive** : Design adaptatif (base: 375×812)

## 📊 Architecture

```
src/
├── pages/           # Pages de l'application
│   ├── SplashScreen.tsx
│   ├── HomePage.tsx
│   ├── AssessmentIntroPage.tsx
│   ├── CompleteTestOrchestratorPage.tsx
│   ├── CompleteTestResultsPage.tsx
│   ├── ChatPage.tsx
│   └── tests/       # Pages de tests individuels
│       ├── MatricesTestPage.tsx
│       ├── CubesTestPage.tsx
│       └── ... (10 autres tests)
│
├── components/      # Composants réutilisables
├── models/          # Modèles de données TypeScript
├── generators/      # Générateurs d'items (Matrices, Cubes, etc.)
├── services/        # Services (Claude API, Scoring)
├── utils/           # Utilitaires
├── constants/       # Constantes de l'app
└── styles/          # CSS global et modules
```

## 🔬 Psychométrie

L'application utilise des normes psychométriques scientifiques :

- **Standardisation** : Moyenne 100, Écart-type 15 (QI)
- **Subtests** : Scores standardisés (M=10, SD=3)
- **Règles d'arrêt** : Discontinuation après échecs consécutifs
- **IRT** : Item Response Theory pour adaptation
- **Limites de temps** : Respectent les standards WAIS-IV

## ⚠️ Avertissement

Cette application est à des **fins éducatives et de démonstration** uniquement. Les scores ne constituent pas un diagnostic psychologique officiel. Pour une évaluation clinique, consultez un psychologue agréé.

## 🛠️ Technologies

- **React 18** + **TypeScript**
- **Vite** (Build tool rapide)
- **React Router** (Navigation)
- **Framer Motion** (Animations)
- **Axios** (API calls)
- **CSS Modules** (Styling)

## 📝 Statut de Développement

### ✅ Complété
- [x] Structure de l'application
- [x] Système de couleurs et design
- [x] Page d'accueil (HomePage)
- [x] Page d'introduction (AssessmentIntroPage)
- [x] Écran de démarrage (SplashScreen)
- [x] Modèles de données (CompleteTestSession)
- [x] Constantes psychométriques

### 🚧 En cours
- [ ] Implémentation des 12 tests cognitifs
- [ ] Générateurs d'items (Matrices, Cubes, Balances)
- [ ] Orchestrateur de test complet
- [ ] Page de résultats avec calcul du QI
- [ ] Intégration Claude AI pour le chat
- [ ] Système de scoring et IRT

### 📅 À venir
- [ ] Persistance des données (LocalStorage)
- [ ] Historique des résultats
- [ ] Export PDF des résultats
- [ ] Mode sombre
- [ ] Tests unitaires
- [ ] Déploiement (GitHub Pages / Vercel)

## 👥 Contribution

Ce projet est une reproduction de l'application Flutter "Mentality". Toutes les contributions pour améliorer les tests, ajouter des fonctionnalités ou corriger des bugs sont les bienvenues !

## 📄 Licence

MIT License - Libre d'utilisation pour des fins éducatives et non commerciales.

## 🙏 Crédits

Basé sur les échelles Wechsler (WAIS-IV, WISC-V, WPPSI-IV) développées par David Wechsler et Pearson Clinical Assessment.

---

**Version:** 1.0.0
**Auteur:** Mentality Team
**Date:** 2026
