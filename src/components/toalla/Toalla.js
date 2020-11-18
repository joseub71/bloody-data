import React, { Component } from 'react';

// .CSS
import './Toalla.css'

import arrow_left from "../../assets/arrow_left.png"
import arrow_rigth from "../../assets/arrow_rigth.png"
import arrow_header from "../../assets/arrow_header.png"

class Toalla extends Component {

    constructor(props) {
        super(props);
        this.toallaRef = React.createRef();

        this.state = {
            toalla: 1,
            toallaData: {
                0: {
                    percentage: '0',
                    description: '',
                    dark: ''
                },
                1: {
                    percentage: '4',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico mantenían una',
                    dark: 'relación familiar con el agresor.'
                },
                2: {
                    percentage: '13',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico fueron',
                    dark: 'asesinadas por venganza o por sicarios.'
                },
                3: {
                    percentage: '28',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico mantenían una',
                    dark: 'relación íntima con el agresor.'
                }
            }
        };
    }

    componentDidMount(){
        // this.toallaRef.current.addEventListener("wheel", (event) => { this.eventScrollToalla(event)})

        // const toalla = document.querySelector('#toalla')
        // const options = {
        //   // root: document.querySelector('body'),
        //   rootMargin: '0px 0px 0px 0px',
        //   threshold: .5,
        // }
        // const callback = (entries, observer)  =>{
        //   if (entries[0].isIntersecting && this.props.location.hash === '') {
        //     toalla.scrollIntoView({block: "start", behavior: "smooth"});
        //     this.setState({toalla: 1})
        //   }
        // }
        
        // const observer = new IntersectionObserver(callback, options)
        // observer.observe(toalla)

    }

    // eventScrollToalla = (e) => {
    //     e.preventDefault();
    //     const currenToalla = this.state.toalla;
    //     if(currenToalla > 0 && currenToalla < 3) e.preventDefault();
    //     if (e.deltaY.toFixed() >=  16) {
    //         if (currenToalla <= 2) {
    //             this.setState({toalla: currenToalla+1})
    //         }
    //     }else if (e.deltaY <= -16) {

    //         if (currenToalla > 0 && currenToalla <= 3) {
    //             this.setState({toalla: currenToalla-1})
    //         }
    //     }
    // }

    eventTampon = (rigth) => {
        const currenToalla = this.state.toalla;
        if (rigth) {
            if (currenToalla <= 2) {
                this.setState({toalla: currenToalla+1})
            }
        }else {
            if (currenToalla > 1 && currenToalla <= 3) {
                this.setState({toalla: currenToalla-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="toalla">
                
                <div className="container-blod-animation-zone" ref={this.toallaRef}>

                    <div className="container-btn-descri">
                        
                        <span className="text-first"> Relación con el agresor </span>
                        <p> Vínculo de la víctima <b> con  el autor del feminicidio </b> </p>
                        
                        <div className="container-container-button-sign" onClick={  this.props.handlerModalEvent }>
                            <div className="container-button-sign">
                                <span className="text-header-button-sign"> firmar ahora </span>
                                <div className="header-button-sign" ></div>
                                <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                            </div>
                        </div>
                    </div>

                    <div className="central-blod-landing-page-toalla" style={{ backgroundSize: '54%'}} >
                        <div className={`${ 'image-toalla-blod'+this.state.toalla } image-toalla-blod`} ></div>
                    </div>
                    
                    <div className={`${ this.state.toalla >= 1 && 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress-toalla'+this.state.toalla } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="cont-per-text"> <span className="text-percentage-land"> {this.state.toallaData[this.state.toalla].percentage} </span> <span className="text-percentage"> % </span> </div>
                            <div className="text-description-land">{this.state.toallaData[this.state.toalla].description} <b> {this.state.toallaData[this.state.toalla].dark} </b> </div>
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

export default Toalla;