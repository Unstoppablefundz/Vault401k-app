import React from 'react';

export default function App() {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const name = user ? `${user.first_name}${user.last_name ? ' ' + user.last_name : ''}` : 'Friend';

  return (
    <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ margin: '0 0 8px', color: '#333', fontSize: '18px' }}>
        Hi, {name}!
      </h2>
      <h1 style={{ margin: '0 0 32px', color: '#1a1a1a', fontSize: '28px', fontWeight: 'bold' }}>
        Vault 401(k)
      </h1>

      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0 0 20px', color: '#555', fontSize: '16px' }}>
          Your secure, simple 401(k) companion.
        </p>
        <button style={{
          background: '#1a1a1a',
          color: 'white',
          border: 'none',
          padding: '14px 28px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '12px',
          cursor: 'pointer',
          width: '100%'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
      }
