import React from 'react';

export const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="project-header">
      <div className="header-content">
        <h1>📊 L'image Dashboard</h1>
        <p className="project-subtitle">Sistema de Gestión para Salones de Belleza</p>
      </div>
      <div className="header-info">
        <div className="info-item">
          <span className="label">Equipo:</span>
          <span className="value">Ram Singh, Ana De Hoyos, Nobel De Gracia, Daniela Quirós, Brayan Rodríguez</span>
        </div>
        <div className="info-item">
          <span className="label">Fecha:</span>
          <span className="value">{currentDate}</span>
        </div>
        <div className="info-item">
          <span className="label">Estado General:</span>
          <span className="status-badge status-good">EN PROGRESO - 70%</span>
        </div>
        <div className="info-item">
          <span className="label">Semana:</span>
          <span className="value">10 de 14</span>
        </div>
      </div>
    </header>
  );
};
