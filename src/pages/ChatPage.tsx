import React from 'react';

const ChatPage: React.FC = () => {

  return (
    <div className="fade-in" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Messages area - vide au départ */}
      <div style={{ flex: 1, padding: '24px', overflow: 'auto', backgroundColor: 'var(--grey-50)' }}>
        {/* Message initial au centre */}
        <div className="text-center" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--grey-400)', fontSize: '13px' }}>
            Discutez en toute liberté
          </div>
        </div>
      </div>

      {/* Input area */}
      <div style={{ padding: '16px 24px', borderTop: '1px solid var(--grey-200)', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            placeholder="Discutez..."
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
