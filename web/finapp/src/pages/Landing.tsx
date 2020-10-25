import React from 'react';
import '../styles/Landing.css';
import landingGraph from '../images/landing-graph.png'
import siteLogo from '../images/sitelogo.png'

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-content-wraper">
        <img src={landingGraph} alt="Gráfico Logo" />

        <div className="landing-text-container">
          <div className="landing-logo">
            <img src={siteLogo} alt="Logo do Site" />
            <h1>FinApp</h1>
          </div>

          <h1>Controle sua Carteira de Investimentos</h1>
          <p>Com o Fin App você pode controlar sua carteira e obter cotações e estatísticas dos seus ativos</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
