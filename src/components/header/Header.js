import React, { Component } from 'react';

// .CSS
import './Header.css'

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

  render() {
    
    return (
        <div className="container-header-landing-page">

            <div className="container-images-header" >
                <img src={logo_bloody} alt="Logo de boddy" className="logo_bloody"/>
                <img src={logo_anmistia} alt="Logo Anmistia-internacional" className="logo_anmistia"/>
                {
                    this.props.showFullHeader &&
                <div className="container-circle-header">
                    <div className="circle-header first-circle"></div>
                    <div className="circle-header second-circle"></div>
                    <div className="circle-header third-circle"></div>
                    <div className="circle-header four-circle"></div>
                </div>
                }
            </div>

            <div className="container-menu-header">
                <div className="container-menu-item" > 
                    <div className="menu-item">home</div> 
                </div>
                <div className="container-menu-item sub-songs-menu-item" >
                     <div className="menu-item"> bloody data</div>
                     <div className="menu-item"> femicidios</div>
                     <div className="menu-item"> Relacion con agresor</div>
                     <div className="menu-item"> Violencia de genero</div>
                     <div className="menu-item"> Transfemicidios</div>
                </div>
                <div className="container-menu-item" >
                     <div className="menu-item"> testimonios   </div>
                </div>
                <div className="container-menu-item" >
                     <div className="menu-item"> firma la peticion   </div>
                </div>
                <div className="container-container-button-sign">
                    <div className="container-button-sign">
                        <span className="text-header-button-sign"> firmar ahora </span>
                        <div className="header-button-sign" ></div>
                        <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}

export default Header;
