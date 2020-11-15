import React, { Component } from 'react';

// .CSS
import './Menu.css'

// Assets
import logo_anmistia from "../../assets/logo_anmistia.png"
import logo_bloody_copy from "../../assets/logo_bloody_copy.png"
import arrow_header from "../../assets/arrow_header.png"

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    
    return (
        <div className="container-header-landing-page">

            <div className="container-images-header" >
                <img src={logo_bloody_copy} alt="Logo de boddy" className="logo_bloody"/>
                <img src={logo_anmistia} alt="Logo Anmistia-internacional" className="logo_anmistia"/>
            </div>

            {/* Usar para version mobile */}
            {/* <div className="menu_bar">
			    <a href="#" className="bt-menu"><span className="icon-list2"></span>Menú</a>
            </div> */}
            {/* $(document).ready(main);
            
            var contador = 1;
            
            function main () {
                $('.menu_bar').click(function(){
                    if (contador == 1) {
                        $('nav').animate({
                            left: '0'
                        });
                        contador = 0;
                    } else {
                        contador = 1;
                        $('nav').animate({
                            left: '-100%'
                        });
                    }
                });
            
                // Mostramos y ocultamos submenus
                $('.submenu').click(function(){
                    $(this).children('.children').slideToggle();
                });
            } */}
            {/* Usar para version mobile */}
 
            <nav>
                <ul>
                    <li><a href="#home"> home </a></li>
                    <li 
                    className="submenu">
                        <span> bloody data </span>
                        <ul 
                        className="children">
                            <li><a href="#tampon"> femicidios </a></li>
                            <li><a href="#toalla"> Relacion con agresor </a></li>
                            <li><a href="#copa"> Violencia de genero </a></li>
                            <li><a href="#servilleta"> Transfemicidios </a></li>
                        </ul>
                    </li>
                    <li><span> testimonios </span></li>
                    <li><span> firma la peticion </span></li>

                    <li className="container-container-button-sign">
                        <div className="container-container-button-sign">
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firmar ahora </span>
                                <div className="header-button-sign" ></div>
                                <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                            </div>
                        </div>
                    </li>

                </ul>
            </nav>
            
        </div>
    )
  }
}

export default Header;