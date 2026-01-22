import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppColors } from '../styles/AppColors';

const ChatPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fade-in" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div
        style={{
          background: AppColors.primaryGradient(),
          color: 'white',
          padding: '20px 24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => navigate('/home')}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            ←
          </button>
          <div>
            <h2 className="title-large" style={{ color: 'white', margin: 0 }}>
              Mentality Assistant
            </h2>
            <p className="body-small" style={{ color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Posez vos questions sur les tests cognitifs
            </p>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div style={{ flex: 1, padding: '24px', overflow: 'auto', backgroundColor: 'var(--grey-50)' }}>
        <div className="text-center" style={{ paddingTop: '40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
          <h3 className="headline-medium mb-2">Chat avec Claude AI</h3>
          <p className="body-medium" style={{ color: 'var(--grey-600)' }}>
            Intégration de l'API Claude pour répondre à vos questions
          </p>
          <p className="body-small mt-3" style={{ color: 'var(--grey-500)' }}>
            🚧 En cours de développement
          </p>
        </div>
      </div>

      {/* Input area */}
      <div style={{ padding: '16px 24px', borderTop: '1px solid var(--grey-200)', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            placeholder="Écrivez votre message..."
            disabled
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '24px',
              border: '1px solid var(--grey-300)',
              fontSize: '14px',
            }}
          />
          <button
            className="btn btn-primary"
            disabled
            style={{
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              padding: 0,
              opacity: 0.5,
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
