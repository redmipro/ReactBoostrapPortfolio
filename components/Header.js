import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>FrontEnd Developer & Music Producer</h1>
        <Typed
          className="typed-text"
          strings={["Diseño Web", "Desarrollo Web","Android Studio" ,"Producción Musical"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">Contacto</Link>
      </div>
    </div>
  )
}

export default Header;
