import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Acerca</h1>
          <p>
            ¡Hola! Yo soy Andrés. Soy desarrollador web Full-Stack. Las tecnologías que utilizo son MERN (MongoDB, Express, ReactJS y NodeJS), Además utilizo Angular y Vue Frameworks. Creo sitios web receptivos que se muestran en todos los dispositivos, computadoras de escritorio y teléfonos inteligentes. Por supuesto, antes de comenzar a desarrollar cualquier aplicación web, página de destino, sitio web comercial o comercio electrónico, necesito tener un diseño de proyecto listo para usar (boceto). Y estoy listo para hacer esto por usted, antes de comenzar a desarrollar su sitio web, discutiremos todos los detalles de su nicho con usted, realizaré una encuesta a sus competidores y haré una lista de sus ventajas y debilidades. Todo esto es necesario para darles a sus clientes algo que sus competidores no brindan, o para presentarlo también, ¡pero mejor! Una vez que el sitio web está terminado y listo para implementar y vender un producto o servicio. Es fundamental que tus clientes potenciales te conozcan. ¡Crearé una campaña publicitaria para ti en Google Adwords y Facebook!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
