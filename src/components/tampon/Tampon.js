import React, { Component } from 'react';

// .CSS
import './Tampon.css'

import arrow_left from "../../assets/arrow_left.png"
import arrow_rigth from "../../assets/arrow_rigth.png"
import arrow_header from "../../assets/arrow_header.png"

class Tampon extends Component {

    constructor(props) {
        super(props);
        this.tamponRef = React.createRef();

        this.state = {
            tampon: 1,
            tampData: {
                PR:{
                    0: {
                        percentage: '0',
                        description: '',
                        dark: ''
                    },
                    1: {
                        percentage: '21',
                        description: 'de las mujeres que sangró por feminicidios en Puerto Rico fue',
                        dark: 'asesinada en la vía pública'
                    },
                    2: {
                        percentage: '25',
                        description: 'de las mujeres que sangró por feminicidios en Puerto Rico fue',
                        dark: 'asesinada en su hogar'
                    },
                    3: {
                        percentage: '32',
                        description: 'de las mujeres que sangró por feminicidios en Puerto Rico fue',
                        dark: 'asesinada con armas de fuego'
                    },
                    4: {
                        percentage: '38',
                        description: 'de los casos de mujeres que sangraron a raíz de un feminicidio',
                        dark: 'aún no se ha esclarecido'
                    }
                },
                VE:{
                    0: {
                        percentage: '0',
                        description: '',
                        dark: ''
                    },
                    1: {
                        percentage: '21',
                        description: 'de las mujeres que sangraron en Venezuela fueron',
                        dark: 'asesinadas en la vía pública'
                    },
                    2: {
                        percentage: '25',
                        description: 'de las mujeres que sangraron en Venezuela fueron',
                        dark: 'asesinadas en su hogar'
                    },
                    3: {
                        percentage: '32',
                        description: 'de las mujeres que sangraron en Venezuela fueron',
                        dark: 'asesinadas con armas de fuego'
                    },
                    4: {
                        percentage: '38',
                        description: 'de las mujeres que sangraron por feminicidios en Venezuela',
                        dark: 'no han tenido resolución de sus casos'
                    }
                }
            }
        };
    }

    componentDidMount(){
        // this.tamponRef.current.addEventListener("wheel", (event) => { this.eventScrollTampon(event)})

        const tampon = document.querySelector('#tampon')
        const options = {
          rootMargin: '0px 0px 0px 0px',
          threshold: .4,
        }
        const callback = (entries, observer) => {
          if (entries[0].isIntersecting && this.props.location.hash === '') {
            // if (!window.ismobile()) {
            //     tampon.scrollIntoView({block: "start", behavior: "smooth"});
            // }            
            
            document.getElementById("firstCircle").style.width = "8px"
            document.getElementById("firstCircle").style.height = "8px"
            document.getElementById("firstCircle").style.opacity = "0.9"
    
            document.getElementById("secondCircle").style.width = "10px"
            document.getElementById("secondCircle").style.height = "10px"
            document.getElementById("secondCircle").style.opacity = "1"
    
            document.getElementById("thirdCircle").style.width = "8px"
            document.getElementById("thirdCircle").style.height = "8px"
            document.getElementById("thirdCircle").style.opacity = "0.9"
    
            document.getElementById("fourCircle").style.width = "6px" 
            document.getElementById("fourCircle").style.height = "6px" 
            document.getElementById("fourCircle").style.opacity = "0.8"
    
            document.getElementById("fifthCircle").style.width = "5px"
            document.getElementById("fifthCircle").style.height = "5px"
            document.getElementById("fifthCircle").style.opacity = "0.7"

          }
        //   else if(window.location.hash === "#tampon"){
        //     window.location.hash = ''
        //   }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(tampon)

    }

    // eventScrollTampon = (e) => {
    //     e.preventDefault();
    //     const currenTampon = this.state.tampon;
    //     if(currenTampon > 0 && currenTampon < 4) e.preventDefault();
    //     if (e.deltaY.toFixed() >=  16) {
    //         if (currenTampon <= 3) {
    //             this.setState({tampon: currenTampon+1})
    //         }
    //     }else if (e.deltaY <= -16) {
    //         if (currenTampon > 0 && currenTampon <= 4) {
    //             this.setState({tampon: currenTampon-1})
    //         }
    //     }
    // }
  
    eventTampon = (rigth) => {
        const currenTampon = this.state.tampon;
        
        if (rigth) {
            if (currenTampon <= 3) {
                this.setState({tampon: currenTampon+1})
            }
        }else {
            if (currenTampon > 1 && currenTampon <= 4) {
                this.setState({tampon: currenTampon-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="tampon">
                
                <div className="container-blod-animation-zone" ref={this.tamponRef}>

                    <div className="container-btn-descri show-desktop show-element-style">
                        
                        <span className="text-first"> Feminicidios </span>
                        <p> Forma extrema de violencia contra  las mujeres <b> motivadas en el sexismo o la misoginia </b> </p>
                        
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firmar ahora </span>
                                <div className="header-button-sign" ></div>
                                <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                            </div>
                        </div>
                    </div>

                    <div className="central-blod-landing-page-tampon" style={{ backgroundSize: '67px 350px'}} >
                        <div className={`${ 'image-tampon-blod'+this.state.tampon } image-tampon-blod-tampon `} ></div>
                    </div>
                    
                    <div className={`${ this.state.tampon >= 1 && 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress'+this.state.tampon } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="cont-per-text"> <span className="text-percentage-land"> {this.state.tampData[this.props.country][this.state.tampon].percentage} </span> <span className="text-percentage"> % </span> </div>
                            <div className="text-description-land">{this.state.tampData[this.props.country][this.state.tampon].description} <b> {this.state.tampData[this.props.country][this.state.tampon].dark} </b> </div>
                            <div className="container-arrows-buttoms">
                                <img src={arrow_left} alt="Flecha izquierda" onClick={ ()=> this.eventTampon() } />
                                <img src={arrow_rigth} alt="Flecha flecha derecha" onClick={ ()=> this.eventTampon(true) } />
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                    <div className="container-btn-descri show-desktop-mobile hide-element-style">
                        
                        <span className="text-first"> Feminicidios </span>
                        <p> Forma extrema de violencia contra  las mujeres <b> motivadas en el sexismo o la misoginia </b> </p>
                        
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firmar ahora </span>
                                <div className="header-button-sign" ></div>
                                <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                            </div>
                        </div>
                    </div>
                {/*  */}
            </div>
        )
    }
}

export default Tampon;