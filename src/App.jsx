import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import WetterAnzeige from './WetterAnzeige';
import StadtAuswahl from './StadtAuswahl';

function App() {
  const [ausgewaehlteStadt, setAusgewaehlteStadt] = useState('Berlin');

  // Simuliertes Wetter-Objekt (in einer echten App würden wir eine API verwenden)
  const wetterDaten = {
    Berlin: { temperatur: 20, beschreibung: 'Sonnig' },
    Hamburg: { temperatur: 18, beschreibung: 'Leicht bewölkt' },
    München: { temperatur: 22, beschreibung: 'Klar' },
    Köln: { temperatur: 19, beschreibung: 'Regnerisch' },
  };
    return (
    <div className="App">
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 130px)', padding: '2rem' }}>
        <WetterAnzeige
          stadt={ausgewaehlteStadt}
          temperatur={wetterDaten[ausgewaehlteStadt].temperatur}
          beschreibung={wetterDaten[ausgewaehlteStadt].beschreibung}
        />
        <StadtAuswahl onStadtAuswahl={setAusgewaehlteStadt} />
      </main>
      <Footer />
    </div>
  );
}

export default App;