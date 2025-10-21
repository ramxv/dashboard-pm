import React from 'react';

interface Stakeholder {
  icon: string;
  name: string;
  information: string[];
  channels: { label: string; type: string }[];
  frequency: { period: string; description: string }[];
  responsible: { name: string; role: string };
}

const stakeholders: Stakeholder[] = [
  {
    icon: '👤',
    name: 'Cliente/Dueño del Salón',
    information: [
      'Avance general del proyecto',
      'Cumplimiento de plazos',
      'Riesgos y problemas',
      'Próximos entregables',
      'Cambios en alcance'
    ],
    channels: [
      { label: 'Reunión presencial/Zoom', type: 'meeting' },
      { label: 'Correo electrónico', type: 'email' }
    ],
    frequency: [
      { period: 'Quincenal', description: '(Reunión formal)' },
      { period: 'Semanal', description: '(Reporte escrito)' }
    ],
    responsible: { name: 'Brayan Rodríguez', role: 'Project Manager' }
  },
  {
    icon: '💼',
    name: 'Patrocinador/Financiador',
    information: [
      '% de avance global',
      'Uso de recursos y presupuesto',
      'Riesgos críticos',
      'ROI esperado',
      'Decisiones estratégicas'
    ],
    channels: [
      { label: 'Correo electrónico', type: 'email' },
      { label: 'Dashboard online', type: 'document' }
    ],
    frequency: [
      { period: 'Mensual', description: '(Reporte ejecutivo)' },
      { period: 'Continuo', description: '(Dashboard)' }
    ],
    responsible: { name: 'Brayan Rodríguez', role: 'Project Manager' }
  },
  {
    icon: '👥',
    name: 'Usuarios Finales (Estilistas)',
    information: [
      'Nuevas funcionalidades',
      'Capacitación disponible',
      'Manual de usuario',
      'Calendario de implementación',
      'Soporte técnico'
    ],
    channels: [
      { label: 'WhatsApp', type: 'whatsapp' },
      { label: 'Sesiones de capacitación', type: 'meeting' },
      { label: 'Manual digital', type: 'document' }
    ],
    frequency: [
      { period: 'Por entregable', description: '(Notificaciones)' },
      { period: 'Pre-lanzamiento', description: '(Capacitación)' }
    ],
    responsible: { name: 'Daniela Quirós', role: 'Analista de Sistemas' }
  },
  {
    icon: '💻',
    name: 'Equipo Técnico',
    information: [
      'Tareas asignadas',
      'Bloqueos y dependencias',
      'Cambios en arquitectura',
      'Resultados de testing',
      'Documentación técnica'
    ],
    channels: [
      { label: 'Slack/Discord', type: 'slack' },
      { label: 'Daily Standup', type: 'meeting' },
      { label: 'Trello/Jira', type: 'trello' }
    ],
    frequency: [
      { period: 'Diaria', description: '(Standup 15 min)' },
      { period: 'Continuo', description: '(Chat y board)' }
    ],
    responsible: { name: 'Brayan Rodríguez', role: 'Project Manager' }
  }
];

export const CommunicationPanel: React.FC = () => {
  return (
    <section className="communication-panel">
      <h2>📢 Plan de Comunicación con Stakeholders</h2>

      <div className="table-container">
        <table className="communication-table">
          <thead>
            <tr>
              <th>Stakeholder</th>
              <th>Información Requerida</th>
              <th>Canal</th>
              <th>Frecuencia</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            {stakeholders.map((stakeholder, index) => (
              <tr key={index}>
                <td>
                  <div className="stakeholder-info">
                    <span className="stakeholder-icon">{stakeholder.icon}</span>
                    <strong>{stakeholder.name}</strong>
                  </div>
                </td>
                <td>
                  <ul className="info-list">
                    {stakeholder.information.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  {stakeholder.channels.map((channel, i) => (
                    <span key={i} className={`channel-badge channel-${channel.type}`}>
                      {channel.label}
                    </span>
                  ))}
                </td>
                <td>
                  {stakeholder.frequency.map((freq, i) => (
                    <React.Fragment key={i}>
                      <span className="frequency-badge">{freq.period}</span>
                      <small>{freq.description}</small>
                      {i < stakeholder.frequency.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </td>
                <td>
                  <strong>{stakeholder.responsible.name}</strong>
                  <br />
                  <small>({stakeholder.responsible.role})</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
