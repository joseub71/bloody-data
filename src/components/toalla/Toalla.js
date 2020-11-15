import React, { Component } from 'react';

// .CSS
import './Toalla.css'

class Toalla extends Component {

    constructor(props) {
        super(props);
        this.toallaRef = React.createRef();

        this.state = {
            toalla: 0,
            toallaData: {
                0: {
                    percentage: '0',
                    description: '',
                    dark: ''
                },
                1: {
                    percentage: '4%',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico mantenían una',
                    dark: 'relación familiar con el agresor.'
                },
                2: {
                    percentage: '13%',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico fueron',
                    dark: 'asesinadas por venganza o por sicarios.'
                },
                3: {
                    percentage: '28%',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico mantenían una',
                    dark: 'relación íntima con el agresor.'
                }
            }
        };
    }

    componentDidMount(){
        this.toallaRef.current.addEventListener("wheel", (event) => { this.eventScrollToalla(event)})

        const toalla = document.querySelector('#toalla')
        const options = {
          // root: document.querySelector('body'),
          rootMargin: '0px 0px 0px 0px',
          threshold: .5,
        }
        const callback = (entries, observer)  =>{
          if (entries[0].isIntersecting && this.props.location.hash === '') {
            toalla.scrollIntoView({block: "start", behavior: "smooth"});
            this.setState({toalla: 1})
          }
        }
        
        const observer = new IntersectionObserver(callback, options)
        observer.observe(toalla)

    }

    eventScrollToalla = (e) => {

        const currenToalla = this.state.toalla;
        if(currenToalla > 0 && currenToalla < 4) e.preventDefault();
        if (e.deltaY.toFixed() >=  16) {
            if (currenToalla <= 2) {
                this.setState({toalla: currenToalla+1})
            }
        }else if (e.deltaY <= -16) {

            if (currenToalla > 0 && currenToalla <= 3) {
                this.setState({toalla: currenToalla-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="toalla">
                
                <div className="container-blod-animation-zone" ref={this.toallaRef}>
                    <div className="central-blod-landing-page-toalla" style={{ backgroundSize: '54%'}} >
                        <div className={`${ 'image-toalla-blod'+this.state.toalla } image-toalla-blod`} ></div>
                    </div>
                    
                    <div className={`${ this.state.toalla >= 1 && 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress-toalla'+this.state.toalla } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="text-percentage-land">{this.state.toallaData[this.state.toalla].percentage}</div>
                            <div className="text-description-land">{this.state.toallaData[this.state.toalla].description} <b> {this.state.toallaData[this.state.toalla].dark} </b> </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Toalla;