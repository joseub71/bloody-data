import React, { Component } from 'react';

// .CSS
import './Copa.css'

import arrow_left from "../../assets/arrow_left.png"
import arrow_rigth from "../../assets/arrow_rigth.png"
import arrow_header from "../../assets/arrow_header.png"

class Copa extends Component {

    constructor(props) {
        super(props);
        this.copaRef = React.createRef();

        this.state = {
            copa: 1,
            copaData: {
                PR:{
                    0: {
                        percentage: '0',
                        description: '',
                        dark: ''
                    },
                    1: {
                        percentage: '23',
                        description: 'de las mujeres sangra por',
                        dark: 'intentos de feminicidios en Puerto Rico.'
                    },
                    2: {
                        percentage: '83',
                        description: 'de las mujeres de Puerto Rico sangra por',
                        dark: 'violencia doméstica dentro del contexto de la cuarentena.'
                    }
                },
                VE:{
                    0: {
                        percentage: '0',
                        description: '',
                        dark: ''
                    },
                    1: {
                        percentage: '23',
                        description: 'de las mujeres sangra por',
                        dark: 'intentos de feminicidios en Venezuela.'
                    },
                    2: {
                        percentage: '83',
                        description: 'de las mujeres de Venezuela sangra por',
                        dark: 'violencia doméstica dentro del contexto de la cuarentena.'
                    }
                }
            }
        };
    }

    componentDidMount(){
        // this.copaRef.current.addEventListener("wheel", (event) => { this.eventScrollCopa(event)})

        const copa = document.querySelector('#copa')
        const options = {
          // root: document.querySelector('body'),
          rootMargin: '0px 0px 0px 0px',
          threshold: .2,
        }
        const callback = (entries, observer)  =>{
          if (entries[0].isIntersecting && this.props.location.hash === '') {
            copa.scrollIntoView({block: "start", behavior: "smooth"});
            
            document.getElementById("firstCircle").style.width = "5px"
            document.getElementById("firstCircle").style.height = "5px"
            document.getElementById("firstCircle").style.opacity = "0.7"
    
            document.getElementById("secondCircle").style.width = "8px"
            document.getElementById("secondCircle").style.height = "8px"
            document.getElementById("secondCircle").style.opacity = "0.9"
    
            document.getElementById("thirdCircle").style.width = "8px"
            document.getElementById("thirdCircle").style.height = "8px"
            document.getElementById("thirdCircle").style.opacity = "0.9"
    
            document.getElementById("fourCircle").style.width = "10px"
            document.getElementById("fourCircle").style.height = "10px"
            document.getElementById("fourCircle").style.opacity = "1"
    
            document.getElementById("fifthCircle").style.width = "6px"
            document.getElementById("fifthCircle").style.height = "6px"
            document.getElementById("fifthCircle").style.opacity = "0.8"
            
          }
        }
        
        const observer = new IntersectionObserver(callback, options)
        observer.observe(copa)

    }

    // eventScrollCopa = (e) => {
    //     e.preventDefault();
    //     const currenCopa = this.state.copa;
    //     if(currenCopa > 0 && currenCopa < 2) e.preventDefault();
    //     if (e.deltaY.toFixed() >=  16) {
    //         if (currenCopa <= 1) {
    //             this.setState({copa: currenCopa+1})
    //         }
    //     }else if (e.deltaY <= -16) {

    //         if (currenCopa > 0 && currenCopa <= 2) {
    //             this.setState({copa: currenCopa-1})
    //         }
    //     }
    // }

    eventTampon = (rigth) => {
        const currenCopa = this.state.copa;
        if (rigth) {
            if (currenCopa <= 1) {
                this.setState({copa: currenCopa+1})
            }
        }else {
            if (currenCopa > 1 && currenCopa <= 2) {
                this.setState({copa: currenCopa-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="copa">
                
                <div className="container-blod-animation-zone" ref={this.copaRef}>

                    <div className="container-btn-descri">
                        
                        <span className="text-first"> Violencia de género </span>
                        <p> Violencia que constituye un atentado  contra la integridad, la la dignidad y la libertad de las mujeres <b> independientemente del ambito en el que se produzca </b> </p>
                        
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firmar ahora </span>
                                <div className="header-button-sign" ></div>
                                <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                            </div>
                        </div>
                    </div>

                    <div className="central-blod-landing-page-copa" style={{ backgroundSize: 'cover'}} >
                        <div className={`${ 'image-copa-blod'+this.state.copa } image-copa-blod`} >
                        </div>
                    </div>
                    
                    <div className={`${ 'percentage-progress-animation' } percentage-progress padding-top-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress-copa'+this.state.copa } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="cont-per-text"> <span className="text-percentage-land"> {this.state.copaData[this.props.country][this.state.copa].percentage} </span> <span className="text-percentage"> % </span> </div>
                            <div className="text-description-land">{this.state.copaData[this.props.country][this.state.copa].description} <b> {this.state.copaData[this.props.country][this.state.copa].dark} </b> </div>
                            <div className="container-arrows-buttoms">
                                <img src={arrow_left} alt="Flecha izquierda" onClick={ ()=> this.eventTampon() } />
                                <img src={arrow_rigth} alt="Flecha flecha derecha" onClick={ ()=> this.eventTampon(true) } />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Copa;