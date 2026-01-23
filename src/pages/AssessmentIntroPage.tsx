import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppColors } from '../styles/AppColors';
import '../styles/AssessmentIntroPage.css';

/**
 * Page d'introduction à l'évaluation
 *
 * Reproduction EXACTE de lib/main.dart - AssessmentIntroPage (lignes 647-1031)
 */
const AssessmentIntroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="assessment-intro-page">
      {/* AppBar */}
      <div className="app-bar">
        <button className="back-button" onClick={() => navigate('/home')}>
          ←
        </button>
        <h2 className="app-bar-title">Nouvelle évaluation</h2>
        <div style={{ width: '40px' }}></div>
      </div>

      {/* Main Content */}
      <div className="assessment-content">
        {/* Illustration Circle */}
        <div className="illustration-circle">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.2C3.42 13.13 3 14.29 3 15.5C3 18.53 5.47 21 8.5 21C10.14 21 11.62 20.31 12.66 19.19L13 19.5C13.46 19.9 14 20 14.5 20C15.88 20 17 18.88 17 17.5C17 17 16.84 16.54 16.57 16.15C18.85 15.44 20.5 13.31 20.5 10.78C20.5 7.68 18.09 5.15 15 5.01C14.96 3.9 14.03 3 13 3Z"
              fill={AppColors.primary}
            />
          </svg>
        </div>

        {/* Title Section */}
        <h1 className="page-title">Évaluation cognitive</h1>
        <p className="page-subtitle">
          Cette évaluation mesure vos capacités cognitives à travers 5 domaines :
        </p>

        {/* Domain Tiles */}
        <div className="domain-tiles">
          <DomainTile
            icon="💬"
            title="Compréhension Verbale"
            color={AppColors.indexVCI}
          />
          <DomainTile
            icon="🎨"
            title="Raisonnement Visuo-Spatial"
            color={AppColors.indexVSI}
          />
          <DomainTile
            icon="🧩"
            title="Raisonnement Fluide"
            color={AppColors.indexFRI}
          />
          <DomainTile
            icon="🧠"
            title="Mémoire de Travail"
            color={AppColors.indexWMI}
          />
          <DomainTile
            icon="⚡"
            title="Vitesse de Traitement"
            color={AppColors.indexPSI}
          />
        </div>

        {/* Info Box */}
        <div className="info-box" style={{
          backgroundColor: AppColors.withOpacity(AppColors.info, 0.1),
          borderColor: AppColors.withOpacity(AppColors.info, 0.3)
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill={AppColors.info}/>
          </svg>
          <p style={{ color: AppColors.info }}>
            Durée estimée : 30-45 minutes<br />
            Assurez-vous d'être dans un environnement calme.
          </p>
        </div>

        {/* Primary CTA: TEST COMPLET WAIS-IV */}
        <div className="gradient-border-button" style={{
          background: `linear-gradient(135deg, ${AppColors.success} 0%, ${AppColors.withOpacity(AppColors.success, 0.7)} 100%)`
        }}>
          <button
            className="complete-test-button"
            onClick={() => navigate('/complete-test')}
            style={{ backgroundColor: AppColors.success }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.2C3.42 13.13 3 14.29 3 15.5C3 18.53 5.47 21 8.5 21C10.14 21 11.62 20.31 12.66 19.19L13 19.5C13.46 19.9 14 20 14.5 20C15.88 20 17 18.88 17 17.5C17 17 16.84 16.54 16.57 16.15C18.85 15.44 20.5 13.31 20.5 10.78C20.5 7.68 18.09 5.15 15 5.01C14.96 3.9 14.03 3 13 3Z" fill="white"/>
            </svg>
            <div className="button-content">
              <span className="button-title">TEST COMPLET WAIS-IV</span>
              <span className="button-subtitle">Tous les subtests (60-90 min)</span>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="divider-section">
          <div className="divider-line"></div>
          <span className="divider-text">OU tests individuels</span>
          <div className="divider-line"></div>
        </div>

        {/* Individual Test Buttons */}
        <div className="individual-tests">
          <TestButton title="Test des Cubes (Block Design)" color={AppColors.primary} onClick={() => navigate('/test/cubes')} />
          <TestButton title="Test des Matrices Progressives" color={AppColors.indexFRI} onClick={() => navigate('/test/matrices')} />
          <TestButton title="Test des Balances Quantitatives" color={AppColors.indexFRI} onClick={() => alert('En développement')} />
          <TestButton title="Test des Puzzles Visuels" color={AppColors.indexVSI} onClick={() => alert('En développement')} />
          <TestButton title="Test des Similitudes" color={AppColors.indexVCI} onClick={() => alert('En développement')} />
          <TestButton title="Test de Vocabulaire" color={AppColors.indexVCI} onClick={() => alert('En développement')} />
          <TestButton title="Test d'Information" color={AppColors.indexVCI} onClick={() => alert('En développement')} />
          <TestButton title="Test de Mémoire des Chiffres" color={AppColors.indexWMI} onClick={() => alert('En développement')} />
          <TestButton title="Test d'Arithmétique" color={AppColors.indexWMI} onClick={() => alert('En développement')} />
          <TestButton title="Test de Mémoire des Images" color={AppColors.indexWMI} onClick={() => alert('En développement')} />
          <TestButton title="Test de Code" color={AppColors.indexPSI} onClick={() => alert('En développement')} />
          <TestButton title="Test de Recherche de Symboles" color={AppColors.indexPSI} onClick={() => alert('En développement')} />
        </div>
      </div>
    </div>
  );
};

// Domain Tile Component
interface DomainTileProps {
  icon: string;
  title: string;
  color: string;
}

const DomainTile: React.FC<DomainTileProps> = ({ icon, title, color }) => (
  <div className="domain-tile">
    <div className="domain-icon" style={{ backgroundColor: AppColors.withOpacity(color, 0.1) }}>
      <span style={{ color, fontSize: '20px' }}>{icon}</span>
    </div>
    <span className="domain-title">{title}</span>
  </div>
);

// Test Button Component
interface TestButtonProps {
  title: string;
  color: string;
  onClick: () => void;
}

const TestButton: React.FC<TestButtonProps> = ({ title, color, onClick }) => (
  <button className="test-button" style={{ backgroundColor: color }} onClick={onClick}>
    {title}
  </button>
);

export default AssessmentIntroPage;
