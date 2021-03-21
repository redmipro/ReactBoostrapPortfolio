import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>EXPERIENCIA LABORAL</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h5>Oct 2020 - Dic 2020</h5>
            <h3>PROGRAMADOR SOFTWARE</h3>
            <h4>REDBUS URBANO S.A</h4>
            <p>Desarrollo de Aplicaciones Android con Firebase y SQLServer.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h5>Oct 2019 - Jul 2020</h5>
            <h3>IMPLEMENTADOR WEB</h3>
            <h4>TATA CONSULTANCY SERVICES</h4>
            <p>Proyecto Unión Banco Scotiabank y BBVA. Capacitación de la plataforma WEB a clientes corporativos, empresariales y pymes de forma presencial - remota. Levantamiento de incidencias y seguimiento CallCenter. Activación de dispositivos BePass y Administración de permisos de usuario en la plataforma interna del banco.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
          <h5>Feb 2018 - Abr 2018</h5>
            <h3>VERIFICACIÓN MÓVIL</h3>
            <h4>ADT SECURITY SERVICES S.A</h4>
            <p>Realizar informe del estado del Hardware y sistema de las alarmas, motivos por los cuales se activa de forma involuntaria, verificar visualmente las instalaciones empresariales y particulares.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h5>Abr 2013 - Oct 2014</h5>
            <h3>TÉCNICO SOPORTE INFORMÁTICO</h3>
            <h4>ADN SERVICES</h4>
            <p>Soporte técnico a equipos computacionales de CENCOSUD-SMU. Actualizar SO máquinas POS y Realizar migracion de datos.</p>
          </div>
        </div>
        {/* - */}
        
      
      </div>
    </div>
  )
}

export default Experience;

