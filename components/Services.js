import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Servicios</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Diseño Web</h3>
              <p>Me acerco a cada proyecto de forma individual y siempre me centro en el resultado.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Desarrollo Web</h3>
              <p>Su sitio web se construirá con nuevas tecnologías</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

              <h3>Android Studio</h3>
              <p>Su App será desarrollada en el sistema Android actual junto a Material o VueMobile.</p>.
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>

              <h3>Produccón Musical</h3>
              <p>Se genera un producto sonoro a través de la conceptualización creativa de la obra, su composición musical, a través de sistemas de grabación, mezcla y masterización.</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
