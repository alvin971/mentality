import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConstants } from '../constants/AppConstants';
import { AppColors } from '../styles/AppColors';
import '../styles/HomePage.css';

/**
 * Page d'accueil
 *
 * Reproduction exacte de lib/main.dart - HomePage
 * - 3 cartes d'action: Nouvelle évaluation, Résultats, Chat
 * - Section "À propos" avec 3 tuiles informatives
 */
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container">
        {/* En-tête */}
        <div className="home-header fade-in">
          <h1 className="display-large">Bienvenue</h1>
          <p className="body-large mt-2">
            Découvrez votre profil cognitif à travers une évaluation scientifique
            adaptative.
          </p>
        </div>

        {/* Cartes d'action */}
        <div className="action-cards slide-in-up">
          {/* Carte 1: Nouvelle évaluation */}
          <div
            className="action-card card card-interactive"
            onClick={() => navigate('/assessment-intro')}
            style={{ animationDelay: '100ms' }}
          >
            <div
              className="action-card-icon"
              style={{
                backgroundColor: AppColors.withOpacity(AppColors.primary, 0.1),
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 5v14l11-7z"
                  fill={AppColors.primary}
                />
              </svg>
            </div>
            <div className="action-card-content">
              <h3 className="title-large">Commencer une évaluation</h3>
              <p className="body-medium" style={{ color: AppColors.grey600 }}>
                Durée : 30-45 minutes
              </p>
            </div>
            <div className="action-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                  fill={AppColors.grey400}
                />
              </svg>
            </div>
          </div>

          {/* Carte 2: Résultats */}
          <div
            className="action-card card card-interactive"
            onClick={() => alert('Fonctionnalité en développement')}
            style={{ animationDelay: '200ms' }}
          >
            <div
              className="action-card-icon"
              style={{
                backgroundColor: AppColors.withOpacity(AppColors.secondary, 0.1),
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"
                  fill={AppColors.secondary}
                />
              </svg>
            </div>
            <div className="action-card-content">
              <h3 className="title-large">Mes résultats</h3>
              <p className="body-medium" style={{ color: AppColors.grey600 }}>
                Historique des évaluations
              </p>
            </div>
            <div className="action-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                  fill={AppColors.grey400}
                />
              </svg>
            </div>
          </div>

          {/* Carte 3: Chat avec IA */}
          <div
            className="action-card card card-interactive"
            onClick={() => navigate('/chat')}
            style={{ animationDelay: '300ms' }}
          >
            <div
              className="action-card-icon"
              style={{
                backgroundColor: AppColors.withOpacity(AppColors.tertiary, 0.1),
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
                  fill={AppColors.tertiary}
                />
              </svg>
            </div>
            <div className="action-card-content">
              <h3 className="title-large">Parler avec Mentality</h3>
              <p className="body-medium" style={{ color: AppColors.grey600 }}>
                Assistant IA pour vos questions
              </p>
            </div>
            <div className="action-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                  fill={AppColors.grey400}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Section "À propos" */}
        <div className="about-section slide-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="title-medium mb-3">À propos</h2>

          <div className="info-tiles">
            {/* Tuile 1: 12 exercices */}
            <div className="info-tile">
              <div
                className="info-tile-icon"
                style={{ color: AppColors.primary }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.2C3.42 13.13 3 14.29 3 15.5C3 18.53 5.47 21 8.5 21C10.14 21 11.62 20.31 12.66 19.19L13 19.5C13.46 19.9 14 20 14.5 20C15.88 20 17 18.88 17 17.5C17 17 16.84 16.54 16.57 16.15C18.85 15.44 20.5 13.31 20.5 10.78C20.5 7.68 18.09 5.15 15 5.01C14.96 3.9 14.03 3 13 3Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="info-tile-content">
                <h4 className="title-medium">12 types d'exercices</h4>
                <p className="body-small">Évaluation complète des capacités cognitives</p>
              </div>
            </div>

            {/* Tuile 2: IA adaptative */}
            <div className="info-tile">
              <div
                className="info-tile-icon"
                style={{ color: AppColors.secondary }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="info-tile-content">
                <h4 className="title-medium">IA adaptative</h4>
                <p className="body-small">Difficulté ajustée en temps réel</p>
              </div>
            </div>

            {/* Tuile 3: Scientifiquement validé */}
            <div className="info-tile">
              <div
                className="info-tile-icon"
                style={{ color: AppColors.success }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="info-tile-content">
                <h4 className="title-medium">Scientifiquement validé</h4>
                <p className="body-small">Inspiré des échelles Wechsler</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="home-footer fade-in" style={{ animationDelay: '500ms' }}>
          <p className="body-small" style={{ color: AppColors.grey500 }}>
            {AppConstants.APP_NAME} v{AppConstants.APP_VERSION}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
