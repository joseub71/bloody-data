import React, { Component } from 'react';

// Assets
import logo_bloody_copy from "../../assets/logo_bloody_copy.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"

// .CSS
import './Footer.css'

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount(){

    }
    scrollToView = (view) => {
        var elmnt = document.getElementById(view);
        elmnt.scrollIntoView();
      }
    render() {
        return (
            <div className="footer" id="footer">
                <div className="up-container-footer">
                    <div className="container-bloody-log-footer">
                        <img src={logo_bloody_copy} alt="logo bloody data" onClick={  ()=> this.scrollToView("home") } />
                    </div>
                    <div className="container-general-text-footer">
                        <div>
                            <span className="title-footer" > INFORMACIÓN </span>
                            <div className="color-text-gray-footer margin-top-text-footer">
                                <div>La información y material gráfico son propiedad de Amnistía Internacional</div>
                            </div>
                        </div>
                        <div className="color-text-gray-footer">
                            <div> Amnistía internacional seccion de Puerto Rico </div>
                            <div> Calle Humacao #994 </div>
                            <div> 1A Rio Piedras, PR 00925 </div>
                        </div>
                        <div className="color-text-gray-footer">
                            <div> <a href="tel:787-763-8318">787-763-8318</a> </div>
                            <div> <a href="mailto:info@amnsitiapr.org">info@amnsitiapr.org</a> </div>
                        </div>
                    </div>
                    <div className="social-media-btn-footer" >
                        <div className="container-btn-footer" onClick={  this.props.handlerModalEvent } >
                            <span> Firma la petici&oacute;n </span>
                        </div>
                        <div className="footer-social-media">
                            <a href="https://www.instagram.com/amnistiapr/" target="_blank" rel="noreferrer" >  <img src={instagram} alt="instagram" /> </a>
                            <a href="https://www.facebook.com/amnistiapr" target="_blank" rel="noreferrer" >  <img src={facebook} alt="facebook" /> </a>
                        </div>
                    </div>
                </div>
                <div className="containerlow-text-footer">
                    <span className="low-text-footer"> © 2020 Amnistía Internacional Puerto Rico </span>
                </div>
            </div>
        )
    }
}

export default Footer;