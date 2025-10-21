import React from 'react';

export const ObservationsSection: React.FC = () => {
  return (
    <section className="observations-section">
      <h2>📝 Observaciones y Retroalimentación</h2>

      <div className="observations-grid">
        <div className="observation-card observation-success">
          <h3>✅ Logros Destacados</h3>
          <ul>
            <li>Módulos principales completados según cronograma inicial</li>
            <li>Excelente colaboración y comunicación del equipo</li>
            <li>Infraestructura de DevOps implementada exitosamente</li>
            <li>Cliente satisfecho con avances y demostraciones</li>
            <li>Zero errores críticos en producción</li>
          </ul>
        </div>

        <div className="observation-card observation-warning">
          <h3>⚠️ Áreas de Atención</h3>
          <ul>
            <li>Integración con WhatsApp API requiere aprobación de Meta (2-3 días de retraso potencial)</li>
            <li>Aumentar cobertura de tests unitarios del 68% al 80% objetivo</li>
            <li>Resolver 2 bugs de prioridad alta antes del próximo sprint</li>
            <li>Documentación de API en progreso, completar esta semana</li>
          </ul>
        </div>

        <div className="observation-card observation-info">
          <h3>🎯 Próximos Pasos (Semanas 11-14)</h3>
          <div className="timeline">
            <div className="timeline-item">
              <strong>Semana 11:</strong>
              <ul>
                <li>Completar módulo de gestión de reservas</li>
                <li>Finalizar integración con WhatsApp Business API</li>
                <li>Aumentar cobertura de testing al 75%</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Semana 12:</strong>
              <ul>
                <li>Implementar módulo de reportes y analytics</li>
                <li>Testing de integración completo</li>
                <li>Preparar documentación de usuario</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Semana 13:</strong>
              <ul>
                <li>Testing de aceptación con usuarios finales</li>
                <li>Sesiones de capacitación con estilistas</li>
                <li>Ajustes finales basados en feedback</li>
              </ul>
            </div>
            <div className="timeline-item">
              <strong>Semana 14:</strong>
              <ul>
                <li>Deployment a producción</li>
                <li>Soporte post-lanzamiento</li>
                <li>Entrega final y cierre de proyecto</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="observation-card observation-feedback">
          <h3>💬 Retroalimentación Reciente</h3>
          <div className="feedback-item">
            <div className="feedback-header">
              <strong>Cliente - 15/10/2025</strong>
              <span className="rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>"Muy satisfecho con el progreso. La interfaz es intuitiva y las estilistas están emocionadas por usar el sistema. Sugerencia: agregar campo de notas en los registros de servicios."</p>
          </div>
          <div className="feedback-item">
            <div className="feedback-header">
              <strong>Equipo Técnico - 18/10/2025</strong>
              <span className="rating">🟢 Positivo</span>
            </div>
            <p>"El uso de Laravel 12 ha acelerado el desarrollo. La arquitectura modular facilita el mantenimiento. Recomendación: implementar caché para mejorar rendimiento de reportes."</p>
          </div>
          <div className="feedback-item">
            <div className="feedback-header">
              <strong>Usuarios Beta - 20/10/2025</strong>
              <span className="rating">⭐⭐⭐⭐</span>
            </div>
            <p>"La aplicación es muy fácil de usar. Me encanta poder ver el historial de servicios. Sería útil tener una app móvil dedicada en el futuro."</p>
          </div>
        </div>
      </div>
    </section>
  );
};
