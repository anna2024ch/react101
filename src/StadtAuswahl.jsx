import React from 'react';

function StadtAuswahl({ onStadtAuswahl }) {
  const staedte = ['Berlin', 'Hamburg', 'München', 'Köln'];

  return (
    <div>
      <h3>Wähle eine Stadt:</h3>
      {staedte.map(stadt => (
        <button
          key={stadt}
          onClick={() => onStadtAuswahl(stadt)}
          style={{ margin: '0.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          {stadt}
        </button>
      ))}
    </div>
  );
}

export default StadtAuswahl;