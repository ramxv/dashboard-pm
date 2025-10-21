import React from 'react';

export const KPISection: React.FC = () => {
  return (
    <section className="kpi-section">
      <h2>📈 Indicadores Clave de Desempeño</h2>

      <div className="kpi-grid">
        {/* Avance General */}
        <div className="kpi-card">
          <div className="kpi-header">
            <h3>Avance General del Proyecto</h3>
            <span className="semaforo semaforo-verde">●</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '70%' }}>70%</div>
            </div>
          </div>
          <div className="kpi-details">
            <p><strong>Módulos completados:</strong> 7/10</p>
            <ul>
              <li>✓ Gestión de registros diarios</li>
              <li>✓ Gestión de estilistas</li>
              <li>✓ Inventario de productos</li>
              <li>✓ Sistema de publicaciones</li>
              <li>✓ Gestión de clientes</li>
              <li>✓ Landing page</li>
              <li>✓ Autenticación y roles</li>
              <li>⧗ Gestión de reservas (80%)</li>
              <li>⧗ Integración WhatsApp (60%)</li>
              <li>○ Reportes y analytics</li>
            </ul>
          </div>
        </div>

        {/* Cronograma */}
        <div className="kpi-card">
          <div className="kpi-header">
            <h3>Cumplimiento de Cronograma</h3>
            <span className="semaforo semaforo-amarillo">●</span>
          </div>
          <div className="chart-container">
            <div className="bar-chart">
              <div className="bar-group">
                <div className="bar bar-completed" style={{ height: '85%' }}></div>
                <label>Cumplidas<br /><strong>17</strong></label>
              </div>
              <div className="bar-group">
                <div className="bar bar-pending" style={{ height: '35%' }}></div>
                <label>Pendientes<br /><strong>7</strong></label>
              </div>
              <div className="bar-group">
                <div className="bar bar-delayed" style={{ height: '20%' }}></div>
                <label>Retrasadas<br /><strong>4</strong></label>
              </div>
            </div>
          </div>
          <div className="kpi-details">
            <p><strong>Próximos entregables:</strong></p>
            <ul>
              <li>Módulo de reservas (5 días)</li>
              <li>Integración WhatsApp (8 días)</li>
              <li>Testing completo (10 días)</li>
            </ul>
          </div>
        </div>

        {/* Recursos y Presupuesto */}
        <div className="kpi-card">
          <div className="kpi-header">
            <h3>Recursos y Horas Invertidas</h3>
            <span className="semaforo semaforo-verde">●</span>
          </div>
          <div className="resource-stats">
            <div className="stat-item">
              <span className="stat-number">420</span>
              <span className="stat-label">Horas totales</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">84</span>
              <span className="stat-label">Horas/persona</span>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '70%', background: '#3498db' }}>70%</div>
            </div>
            <small>Presupuesto de horas utilizado</small>
          </div>
          <div className="kpi-details">
            <p><strong>Distribución por rol:</strong></p>
            <ul>
              <li>Desarrollo: 250 hrs</li>
              <li>Testing/QA: 80 hrs</li>
              <li>DevOps: 40 hrs</li>
              <li>Análisis: 30 hrs</li>
              <li>Gestión: 20 hrs</li>
            </ul>
          </div>
        </div>

        {/* Calidad */}
        <div className="kpi-card">
          <div className="kpi-header">
            <h3>Calidad y Testing</h3>
            <span className="semaforo semaforo-amarillo">●</span>
          </div>
          <div className="quality-metrics">
            <div className="metric-row">
              <span className="metric-label">Errores detectados:</span>
              <span className="metric-value metric-error">23</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Errores corregidos:</span>
              <span className="metric-value metric-success">19</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Errores pendientes:</span>
              <span className="metric-value metric-warning">4</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Cobertura de tests:</span>
              <span className="metric-value">68%</span>
            </div>
          </div>
          <div className="kpi-details">
            <p><strong>Prioridad de bugs:</strong></p>
            <ul>
              <li>🔴 Críticos: 0</li>
              <li>🟡 Altos: 2</li>
              <li>🟢 Medios: 2</li>
              <li>⚪ Bajos: 0</li>
            </ul>
          </div>
        </div>

        {/* Riesgos */}
        <div className="kpi-card">
          <div className="kpi-header">
            <h3>Gestión de Riesgos</h3>
            <span className="semaforo semaforo-amarillo">●</span>
          </div>
          <div className="risks-list">
            <div className="risk-item risk-medium">
              <strong>Medio:</strong> Integración con API de WhatsApp requiere aprobación
            </div>
            <div className="risk-item risk-low">
              <strong>Bajo:</strong> Posibles cambios en requisitos del módulo de reservas
            </div>
            <div className="risk-item risk-low">
              <strong>Bajo:</strong> Capacitación de usuarios finales pendiente
            </div>
          </div>
          <div className="kpi-details">
            <p><strong>Mitigación:</strong></p>
            <ul>
              <li>Documentación de API en progreso</li>
              <li>Reuniones semanales con cliente</li>
              <li>Plan de capacitación en desarrollo</li>
            </ul>
          </div>
        </div>

        {/* Comunicación */}
        <div className="kpi-card">
          <div className="kpi-header">
            <h3>Comunicación del Equipo</h3>
            <span className="semaforo semaforo-verde">●</span>
          </div>
          <div className="communication-stats">
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Reuniones realizadas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Reportes entregados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Tasa de asistencia</span>
            </div>
          </div>
          <div className="kpi-details">
            <p><strong>Frecuencia actual:</strong></p>
            <ul>
              <li>Daily Standups: Diario (15 min)</li>
              <li>Sprint Review: Semanal</li>
              <li>Reunión con cliente: Quincenal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
