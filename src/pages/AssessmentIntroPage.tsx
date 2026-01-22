import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppColors } from '../styles/AppColors';

const AssessmentIntroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container fade-in" style={{ padding: '40px 24px' }}>
      <h1 className="display-medium text-center mb-4">Évaluation cognitive</h1>

      <p className="body-large text-center mb-4">
        Cette évaluation mesure vos capacités cognitives à travers 5 domaines :
      </p>

      {/* Domaines cognitifs */}
      <div style={{ marginBottom: '32px' }}>
        <div className="card mb-2" style={{ borderLeft: `4px solid ${AppColors.indexVCI}` }}>
          <h3 className="title-large">Compréhension Verbale</h3>
          <p className="body-medium">Capacité à comprendre et utiliser le langage</p>
        </div>

        <div className="card mb-2" style={{ borderLeft: `4px solid ${AppColors.indexVSI}` }}>
          <h3 className="title-large">Raisonnement Visuo-Spatial</h3>
          <p className="body-medium">Capacité à analyser et manipuler des images mentales</p>
        </div>

        <div className="card mb-2" style={{ borderLeft: `4px solid ${AppColors.indexFRI}` }}>
          <h3 className="title-large">Raisonnement Fluide</h3>
          <p className="body-medium">Capacité à résoudre des problèmes nouveaux</p>
        </div>

        <div className="card mb-2" style={{ borderLeft: `4px solid ${AppColors.indexWMI}` }}>
          <h3 className="title-large">Mémoire de Travail</h3>
          <p className="body-medium">Capacité à retenir et manipuler des informations</p>
        </div>

        <div className="card mb-2" style={{ borderLeft: `4px solid ${AppColors.indexPSI}` }}>
          <h3 className="title-large">Vitesse de Traitement</h3>
          <p className="body-medium">Rapidité d'exécution des tâches cognitives</p>
        </div>
      </div>

      {/* Info box */}
      <div
        className="card mb-4"
        style={{
          backgroundColor: AppColors.withOpacity(AppColors.info, 0.1),
          borderColor: AppColors.info,
        }}
      >
        <p className="body-medium" style={{ color: AppColors.info }}>
          ℹ️ Durée estimée : 60-90 minutes<br />
          Assurez-vous d'être dans un environnement calme.
        </p>
      </div>

      {/* Bouton test complet */}
      <button
        className="btn btn-primary w-full mb-3"
        onClick={() => navigate('/complete-test')}
        style={{
          background: AppColors.successGradient(),
          padding: '24px',
          fontSize: '18px',
        }}
      >
        🧠 TEST COMPLET WAIS-IV
        <br />
        <span style={{ fontSize: '12px', opacity: 0.9 }}>Tous les subtests (60-90 min)</span>
      </button>

      {/* Separator */}
      <div className="text-center mb-3">
        <span className="body-medium" style={{ color: AppColors.grey600 }}>
          OU tests individuels
        </span>
      </div>

      {/* Tests individuels */}
      <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <button className="btn btn-outlined" onClick={() => navigate('/test/matrices')}>
          Matrices Progressives
        </button>
        <button className="btn btn-outlined" onClick={() => navigate('/test/cubes')}>
          Cubes (Block Design)
        </button>
        <button className="btn btn-outlined" onClick={() => alert('En développement')}>
          Balances (Figure Weights)
        </button>
        <button className="btn btn-outlined" onClick={() => alert('En développement')}>
          Puzzles Visuels
        </button>
        <button className="btn btn-outlined" onClick={() => alert('En développement')}>
          Similitudes
        </button>
        <button className="btn btn-outlined" onClick={() => alert('En développement')}>
          Vocabulaire
        </button>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-text" onClick={() => navigate('/home')}>
          ← Retour
        </button>
      </div>
    </div>
  );
};

export default AssessmentIntroPage;
