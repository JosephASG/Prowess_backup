import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaTiktok,FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="container-footer">
      <div className='footer'> 
          <div className="ctn-img-logo">
                  <img src="./assets/images/others/prowess-logo.png" alt="" />
              </div>
              <div className="columF">
                  <div className="paginas">
                      <Link to="/">
                          <span>Inicio</span>
                      </Link>
                      <Link to="/">
                          <span>Equipo</span>
                      </Link>
                      <Link to="/">
                          <span>Nosotros</span>
                      </Link>
                      <Link to="/">
                          <span>Productos</span>
                      </Link>
                      <Link to="/">
                          <span>Terminos y condiciones</span>
                      </Link>
                  </div>
              </div>
              <div className="ctn-social-media">
                  <div className="title-social">
                      <span>Síguenos en nuestras redes sociales</span>
                  </div>
                  <div className="redes-footer">
                      <Link to="/"><i className="fab fa-facebook-f icon-redes-footer"><FaFacebookF /></i></Link>
                      <Link to="/"><i className="fab fa-tiktok icon-redes-footer"><FaTiktok /></i></Link>
                      <Link to="/"><i className="fab fa-instagram icon-redes-footer"><FaInstagram /></i></Link>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Socials