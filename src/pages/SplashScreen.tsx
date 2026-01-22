import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConstants } from '../constants/AppConstants';
import { AppColors } from '../styles/AppColors';
import '../styles/SplashScreen.css';

/**
 * Écran de démarrage
 *
 * Reproduction exacte de lib/main.dart - SplashScreen
 * - Affiche le logo et le nom de l'app pendant 3 secondes
 * - Gradient de fond (primary colors)
 * - Redirection automatique vers HomePage
 */
const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection après 3 secondes
    const timer = setTimeout(() => {
      navigate('/home');
    }, AppConstants.SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="splash-screen"
      style={{
        background: AppColors.primaryGradient(),
      }}
    >
      <div className="splash-content fade-in">
        {/* Icône principale - Psychology (cerveau) */}
        <div className="splash-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.2C3.42 13.13 3 14.29 3 15.5C3 18.53 5.47 21 8.5 21C10.14 21 11.62 20.31 12.66 19.19L13 19.5C13.46 19.9 14 20 14.5 20C15.88 20 17 18.88 17 17.5C17 17 16.84 16.54 16.57 16.15C18.85 15.44 20.5 13.31 20.5 10.78C20.5 7.68 18.09 5.15 15 5.01C14.96 3.9 14.03 3 13 3ZM13 5C13.55 5 14 5.45 14 6C14 6.55 13.55 7 13 7C12.45 7 12 6.55 12 6C12 5.45 12.45 5 13 5ZM8.5 19C6.57 19 5 17.43 5 15.5C5 14.66 5.26 13.88 5.71 13.25L7 11.41V9.87C7.16 6.98 9.53 5 12.5 5.03C13.14 5.03 13.73 5.21 14.23 5.5C16.26 5.84 18 7.61 18 10.78C18 12.73 16.69 14.38 14.87 14.82C14.95 15.03 15 15.26 15 15.5C15 16.88 13.88 18 12.5 18C12 18 11.54 17.84 11.15 17.57L10.66 17.19C9.73 18.31 8.19 19 8.5 19Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Nom de l'application */}
        <h1 className="splash-title">{AppConstants.APP_NAME}</h1>

        {/* Tagline */}
        <p className="splash-tagline">{AppConstants.APP_TAGLINE}</p>

        {/* Loading spinner */}
        <div className="splash-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
