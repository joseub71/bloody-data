import React, { Component } from 'react';

// .CSS
import './Tissu.css'

import arrow_left from "../../assets/arrow_left.png"
import arrow_rigth from "../../assets/arrow_rigth.png"
import arrow_header from "../../assets/arrow_header.png"

class Tissu extends Component {

    constructor(props) {
        super(props);
        this.tissuRef = React.createRef();

        this.state = {
            tissu: 1,
            tissuData: {
                PR:{
                    0: {
                        percentage: '0',
                        description: '',
                        dark: ''
                    },
                    1: {
                        percentage: '17',
                        description: 'de las personas menstruantes es asesinada en Puerto Rico',
                        dark: 'por crímenes de odio'
                    },
                    2: {
                        percentage: '50',
                        description: 'de las mujeres trans que sangró por transfeminicidios en Puerto Rico',
                        dark: 'conocía a su agresor.'
                    },
                    3: {
                        percentage: '83',
                        description: 'de las mujeres trans que sangró por transfeminicidios en Puerto Rico fue',
                        dark: 'asesinada con un arma de fuego.'
                    },
                    4: {
                        percentage: '100',
                        description: 'de las mujeres trans que sangró por transfeminicidios en Puerto Rico fue',
                        dark: 'asesinada en la vía pública.'
                    }
                },
                VE:{
                    0: {
                        percentage: '0',
                        description: '',
                        dark: ''
                    },
                    1: {
                        percentage: '50',
                        description: 'de las mujeres trans que sangraron por transfeminicidios en Venezuela',
                        dark: 'conocían a su agresor.'
                    },
                    2: {
                        percentage: '83',
                        description: 'las mujeres trans que sangraron por transfeminicidios en Venezuela fueron',
                        dark: 'asesinadas con un arma de fuego.'
                    },
                    3: {
                        percentage: '100',
                        description: 'de las mujeres trans que sangraron por transfeminicidios en Venezuela fueron',
                        dark: 'asesinadas en la vía pública.'
                    }
                }
            }
        };
    }

    componentDidMount(){
        // this.tissuRef.current.addEventListener("wheel", (event) => { this.eventScrollTissu(event)})

        const tissu = document.querySelector('#tissu')
        const options = {
          // root: document.querySelector('body'),
          rootMargin: '0px 0px 0px 0px',
          threshold: .4,
        }
        const callback = (entries, observer)  =>{
          if (entries[0].isIntersecting && this.props.location.hash === '') {
            // if (!window.ismobile()) {
            //     tissu.scrollIntoView({block: "start", behavior: "smooth"});
            // }  
            
            document.getElementById("firstCircle").style.width = "4px"
            document.getElementById("firstCircle").style.height = "4px"
            document.getElementById("firstCircle").style.opacity = "0.888"
    
            document.getElementById("secondCircle").style.width = "5px"
            document.getElementById("secondCircle").style.height = "5px"
            document.getElementById("secondCircle").style.opacity = "0.7"
    
            document.getElementById("thirdCircle").style.width = "6px"
            document.getElementById("thirdCircle").style.height = "6px"
            document.getElementById("thirdCircle").style.opacity = "0.8"
    
            document.getElementById("fourCircle").style.width = "8px"
            document.getElementById("fourCircle").style.height = "8px"
            document.getElementById("fourCircle").style.opacity = "0.9"
    
            document.getElementById("fifthCircle").style.width = "10px"
            document.getElementById("fifthCircle").style.height = "10px"
            document.getElementById("fifthCircle").style.opacity = "1"

          }
        //   else if(window.location.hash === "#tissu"){
        //     window.location.hash = ''
        //   }
        }
        
        const observer = new IntersectionObserver(callback, options)
        observer.observe(tissu)

    }

    // eventScrollTissu = (e) => {
    //     e.preventDefault();
    //     const currenTissu = this.state.tissu;
    //     if(currenTissu > 0 && currenTissu < 3) e.preventDefault();
    //     if (e.deltaY.toFixed() >=  16) {
    //         if (currenTissu <= 2) {
    //             this.setState({tissu: currenTissu+1})
    //         }
    //     }else if (e.deltaY <= -16) {

    //         if (currenTissu > 0 && currenTissu <= 3) {
    //             this.setState({tissu: currenTissu-1})
    //         }
    //     }
    // }

    eventTampon = (rigth) => {
        const currenTissu = this.state.tissu;
        if (rigth) {
            if (currenTissu <= 3) {
                this.setState({tissu: currenTissu+1})
            }
        }else {
            if (currenTissu > 1 && currenTissu <= 4) {
                this.setState({tissu: currenTissu-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="tissu">
                
                <div className="container-blod-animation-zone" ref={this.tissuRef}>

                    <div className="container-btn-descri show-desktop show-element-style">
                        
                        <span className="text-first"> Asesinatos a personas trans </span>
                        <p> Asesinato de una persona  transgénero <b> por su identidad  o expresion de g&eacute;nero </b> </p>
                        
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firma ahora </span>
                                <div className="header-button-sign" ></div>
                                <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                            </div>
                        </div>
                    </div>

                    <div className="central-blod-landing-page-tissu" >
                        <div className={`${ 'image-tissu-blod'+this.state.tissu } image-tissu-blod`} ></div>
                    </div>
                    
                    <div className={`${ 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress-tissu'+this.state.tissu } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="cont-per-text"> <span className="text-percentage-land"> {this.state.tissuData[this.props.country][this.state.tissu].percentage} </span> <span className="text-percentage"> % </span> </div>
                            <div className="text-description-land">{this.state.tissuData[this.props.country][this.state.tissu].description} <b> {this.state.tissuData[this.props.country][this.state.tissu].dark} </b> </div>
                            <div className="container-arrows-buttoms">
                                <img src={arrow_left} alt="Flecha izquierda" onClick={ ()=> this.eventTampon() } />
                                <img src={arrow_rigth} alt="Flecha flecha derecha" onClick={ ()=> this.eventTampon(true) } />
                            </div>
                        </div>
                    </div>
                </div>
{/*  */}
                    <div className="container-btn-descri show-desktop-mobile hide-element-style">
                        
                        <span className="text-first"> Asesinatos a personas trans </span>
                        <p> Asesinato de una persona  transgénero <b> por su identidad  o expresion de g&eacute;nero </b> </p>
                        
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firma ahora </span>
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

export default Tissu;