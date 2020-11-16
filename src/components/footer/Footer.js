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

    render() {
        return (
            <div className="footer" id="footer">
                <div className="up-container-footer">
                    <div className="container-bloody-log-footer">
                        <img src={logo_bloody_copy} alt="logo bloody data"/>
                    </div>
                    <div className="container-general-text-footer">
                        <div>
                            <span className="title-footer" > INFORMACION </span>
                            <div className="color-text-gray-footer margin-top-text-footer">
                                <div>La información y material gráfico son propiedad de Amnistía Int</div>
                                <div> Amnistía internacional seccion de Puerto Rico </div>
                            </div>
                        </div>
                        <div className="color-text-gray-footer">
                            <span> Calle Humacao #994 </span>
                            <span> 1A Rio Piedras, PR 00925 </span>
                        </div>
                        <div className="color-text-gray-footer">
                            <div> 787-763-8318 </div>
                            <div> info@amnsitiapr.org </div>
                        </div>
                    </div>
                    <div className="social-media-btn-footer" >
                        <div className="container-btn-footer" >
                            <span> Firma la peticion </span>
                        </div>
                        <div className="footer-social-media">
                            <a href="https://www.instagram.com/amnistiapr/" target="_blank" > <img src={instagram} alt="instagram" /> </a>
                            <a href="https://www.facebook.com/amnistiapr" target="_blank" > <img src={facebook} alt="facebook" /> </a>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="low-text-footer"> © 2020 Amnistía Internacional Puerto Rico </span>
                </div>
            </div>
        )
    }
}

export default Footer;