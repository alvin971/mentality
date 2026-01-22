#!/bin/bash

# Script de déploiement rapide sur GitHub Pages

echo "🚀 Déploiement de Mentality Web sur GitHub Pages"
echo "================================================"
echo ""

# 1. Build de l'application
echo "📦 Build de l'application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build!"
    exit 1
fi

echo "✅ Build réussi!"
echo ""

# 2. Installer gh-pages si nécessaire
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📥 Installation de gh-pages..."
    npm install --save-dev gh-pages
fi

echo ""

# 3. Déploiement
echo "🌐 Déploiement sur GitHub Pages..."
npx gh-pages -d dist

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du déploiement!"
    exit 1
fi

echo ""
echo "✅ Déploiement réussi!"
echo ""
echo "Votre application sera disponible dans quelques minutes sur :"
echo "https://VOTRE_USERNAME.github.io/mentality-web"
echo ""
echo "N'oubliez pas de :"
echo "1. Configurer GitHub Pages dans les paramètres du repo"
echo "2. Sélectionner la branche 'gh-pages' comme source"
echo ""
