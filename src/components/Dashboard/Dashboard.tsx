import React from 'react';
import { Header } from './Header';
import { KPISection } from './KPISection';
import { CommunicationPanel } from './CommunicationPanel';
import { ObservationsSection } from './ObservationsSection';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <KPISection />
      <CommunicationPanel />
      <ObservationsSection />

      <footer className="dashboard-footer">
        <p>Dashboard generado para el proyecto <strong>L'image Dashboard</strong></p>
        <p>Equipo: Ram Singh, Ana De Hoyos, Nobel De Gracia, Daniela Quirós, Brayan Rodríguez</p>
        <p className="tech-stack">Tecnología: Laravel 12 | MySQL | Tailwind CSS | Alpine.js</p>
        <p className="update-info">
          Última actualización: {new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </footer>
    </div>
  );
};
