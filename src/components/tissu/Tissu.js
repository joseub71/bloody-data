import React, { Component } from 'react';

// .CSS
import './Tissu.css'

class Tissu extends Component {

    constructor(props) {
        super(props);
        this.tissuRef = React.createRef();

        this.state = {
            tissu: 0,
            tissuData: {
                0: {
                    percentage: '0',
                    description: '',
                    dark: ''
                },
                1: {
                    percentage: '50%',
                    description: 'de las mujeres trans que sangraron por transfeminicidios en Puerto Rico',
                    dark: 'conocían a su agresor.'
                },
                2: {
                    percentage: '83%',
                    description: 'las mujeres trans que sangraron por transfeminicidios en Puerto Rico fueron',
                    dark: 'asesinadas con un arma de fuego.'
                },
                3: {
                    percentage: '100%',
                    description: 'de las mujeres trans que sangraron por transfeminicidios en Puerto Rico fueron',
                    dark: 'asesinadas en la vía pública.'
                }
            }
        };
    }

    componentDidMount(){
        this.tissuRef.current.addEventListener("wheel", (event) => { this.eventScrollTissu(event)})

        // const tissu = document.querySelector('#tissu')
        // const options = {
        //   // root: document.querySelector('body'),
        //   rootMargin: '0px 0px 0px 0px',
        //   threshold: .5,
        // }
        // const callback = (entries, observer)  =>{
        //   if (entries[0].isIntersecting && this.props.location.hash === '') {
        //     tissu.scrollIntoView({block: "start", behavior: "smooth"});
        //     this.setState({tissu: 1})
        //   }
        // }
        
        // const observer = new IntersectionObserver(callback, options)
        // observer.observe(tissu)

    }

    eventScrollTissu = (e) => {
        e.preventDefault();
        const currenTissu = this.state.tissu;
        if(currenTissu > 0 && currenTissu < 3) e.preventDefault();
        if (e.deltaY.toFixed() >=  16) {
            if (currenTissu <= 2) {
                this.setState({tissu: currenTissu+1})
            }
        }else if (e.deltaY <= -16) {

            if (currenTissu > 0 && currenTissu <= 3) {
                this.setState({tissu: currenTissu-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="tissu">
                
                <div className="container-blod-animation-zone" ref={this.tissuRef}>
                    <div className="central-blod-landing-page-tissu" style={{ backgroundSize: '54%'}} >
                        <div className={`${ 'image-tissu-blod'+this.state.tissu } image-tissu-blod`} ></div>
                    </div>
                    
                    <div className={`${ this.state.tissu >= 1 && 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress-tissu'+this.state.tissu } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="text-percentage-land">{this.state.tissuData[this.state.tissu].percentage}</div>
                            <div className="text-description-land">{this.state.tissuData[this.state.tissu].description} <b> {this.state.tissuData[this.state.tissu].dark} </b> </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Tissu;