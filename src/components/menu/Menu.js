import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
// .CSS
import './Menu.css'

// Assets
import logo_anmistia from "../../assets/logo_anmistia.png"
import logo_bloody from "../../assets/logo_bloody.png"
import arrow_header from "../../assets/arrow_header.png"

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  scrollToView = (view) => {
    var elmnt = document.getElementById(view);
    elmnt.scrollIntoView();
  }
  
   render() {
    
    return (
        <div className="container-header-landing-page">

            <div className="container-images-header" >
                <img src={logo_bloody} alt="Logo de boddy" className="logo_bloody" onClick={  ()=> this.scrollToView("home") } />
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
                    <li> 
                        {/* <NavLink
                            exact
                            to='/#home'
                        > */}
                        <span onClick={  ()=> this.scrollToView("home") }> Home </span>
                        {/* </NavLink> */}
                        </li>
                    {this.props.country === 'PR' &&
                    <li 
                    className="submenu">
                        {/* <NavLink
                            exact
                            to='/#home'
                        > */}
                            <span onClick={  ()=> this.scrollToView("home") } > bloody data </span>
                        {/* </NavLink> */}
                        <ul 
                        className="children">
                            <li> 
                                    <span onClick={  ()=> this.scrollToView("tampon") }> FEMINICIDIOS </span>
                            </li>
                            <li> 
                                    <span onClick={  ()=> this.scrollToView("toalla") }> RELACIÓN con agresor </span>
                            </li>
                            <li> 
                                    <span onClick={  ()=> this.scrollToView("copa") }> Violencia de GÉNERO  </span>
                            </li>
                            <li> 
                                    <span onClick={  ()=> this.scrollToView("tissu") }> Asesinatos a personas trans </span>
                            </li>
                        </ul>
                    </li>
                    }
                    <li><span onClick={  this.props.handlerModalEvent } > firma la petici&oacute;n </span></li>

                    <li className="container-container-button-sign">
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firma ahora </span>
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
