import React, { Component } from 'react';

// .CSS
import './Header.css'

// Assets
import logo_anmistia from "../../assets/logo_anmistia.png"
import logo_bloody from "../../assets/logo_bloody.png"

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    
    return (
        <div className="container-header-landing-page">

            <div className="container-images-header" >
                <img src={logo_bloody} alt="logo_bloody" className="logo-bloody-header"/>
                <img src={logo_anmistia} alt="logo_anmistia" className="logo-anmistia-header"/>
                <div className="container-circle-header">
                    <div className="circle-header first-circle"></div>
                    <div className="circle-header second-circle"></div>
                    <div className="circle-header third-circle"></div>
                    <div className="circle-header four-circle"></div>
                </div>
            </div>

            <div className="container-menu-header">
                <div> home  </div>
                <div> bloody data  </div>
                <div> testimonios  </div>
                <div> firma la peticion  </div>
                <div className="container-container-button-sign">
                    <div className="container-button-sign">
                        <span className="text-header-button-sign"> firmar ahora </span>
                        <div className="header-button-sign" ></div>
                        <span className="header-button-arrow"> > </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}

export default Landing;
