import React from 'react';

function WetterAnzeige({ stadt, temperatur, beschreibung }) {
  return (
    <div style={{ background: '#ecf0f1', padding: '2rem', borderRadius: '10px', margin: '1rem' }}>
      <h2>{stadt}</h2>
      <p style={{ fontSize: '3rem', margin: '0.5rem 0' }}>{temperatur}°C</p>
      <p>{beschreibung}</p>
    </div>
  );
}

export default WetterAnzeige;