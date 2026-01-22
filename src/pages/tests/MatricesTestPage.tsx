import React from 'react';
import { useNavigate } from 'react-router-dom';

const MatricesTestPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container fade-in text-center" style={{ paddingTop: '80px' }}>
      <h1 className="display-medium mb-4">Test des Matrices Progressives</h1>
      <p className="body-large mb-4">
        Raisonnement fluide - 26 items avec difficulté adaptive
      </p>
      <p className="body-medium mb-4" style={{ color: 'var(--grey-600)' }}>
        🚧 En cours de développement
      </p>
      <button className="btn btn-primary" onClick={() => navigate('/assessment-intro')}>
        Retour
      </button>
    </div>
  );
};

export default MatricesTestPage;
