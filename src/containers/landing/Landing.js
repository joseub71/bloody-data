import React, { Component } from 'react';

// Components
import Menu from '../../components/menu/Menu';
import Tampon from '../../components/tampon/Tampon';
import Toalla from '../../components/toalla/Toalla';

// Assets
import logo_bloody_copy from "../../assets/logo_bloody_copy.png"

// .CSS
import './Landing.css'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    
    return (
      // element.scrollIntoView({block: "end", behavior: "smooth"});
      // behavior Optional
      // Establece la transición de la animación.
      // Puede ser auto o smooth. Por defecto es auto.
      // block Optional
      // Establece el alineamiento vertical.
      // Puede ser start, center, end, o nearest. Por defecto es start.
      // inline Optional
      // Establece el alineamiento horizontal
      // Puede ser start, center, end, o nearest. Por defecto es nearest.

        <div className="container-landing-page" >
            <Menu {...this.props} />
            
            <div className="container-circle-header">
                    <div className="circle-header first-circle"></div>
                    <div className="circle-header second-circle"></div>
                    <div className="circle-header third-circle"></div>
                    <div className="circle-header four-circle"></div>
            </div>
            
            <div id="home" className="container-home-landing-page">
              <img src={logo_bloody_copy} alt=""/>
              <span> Que las mujeres sangren es asqueroso </span>
            </div>

            <Tampon  {...this.props} />
            
            <Toalla  {...this.props} />
            
        </div>
    )
  }
}

export default Landing;
