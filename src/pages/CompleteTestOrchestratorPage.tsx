import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompleteTestOrchestratorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container fade-in text-center" style={{ paddingTop: '80px' }}>
      <h1 className="display-medium mb-4">Orchestrateur de Test Complet</h1>
      <p className="body-large mb-4">
        Cette page lancera automatiquement les 12 subtests en séquence.
      </p>
      <p className="body-medium mb-4" style={{ color: 'var(--grey-600)' }}>
        🚧 En cours de développement
      </p>
      <button className="btn btn-primary" onClick={() => navigate('/home')}>
        Retour à l'accueil
      </button>
    </div>
  );
};

export default CompleteTestOrchestratorPage;
