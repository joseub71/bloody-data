import React, { Component } from 'react';

// .CSS
import './Tampon.css'

// Test
// Assets
    // import tampon_empt from "../../assets/tampon/001.png"
    // import tampon_completed from "../../assets/tampon_completed.png"
// Test
class Tampon extends Component {

    constructor(props) {
        super(props);
        this.tamponRef = React.createRef();

        this.state = {
            tampon: 0,
            tampData: {
                0: {
                    percentage: '0',
                    description: '',
                    dark: ''
                },
                1: {
                    percentage: '21%',
                    description: 'de las mujeres que sangraron en Puerto Rico fueron',
                    dark: 'asesinadas en la vía pública'
                },
                2: {
                    percentage: '25%',
                    description: 'de las mujeres que sangraron en Puerto Rico fueron',
                    dark: 'asesinadas en su hogar'
                },
                3: {
                    percentage: '32%',
                    description: 'de las mujeres que sangraron en Puerto Rico fueron',
                    dark: 'asesinadas con armas de fuego'
                },
                4: {
                    percentage: '38%',
                    description: 'de las mujeres que sangraron por feminicidios en Puerto Rico',
                    dark: 'no han tenido resolución de sus casos'
                }
            }
        };
    }

    componentDidMount(){
        this.tamponRef.current.addEventListener("wheel", (event) => { this.eventScrollTampon(event)})

        // const tampon = document.querySelector('#tampon')
        // const options = {
        //   rootMargin: '0px 0px 0px 0px',
        //   threshold: .5,
        // }
        // const callback = (entries, observer) => {
        //   if (entries[0].isIntersecting && this.props.location.hash === '') {
        //     tampon.scrollIntoView({block: "start", behavior: "smooth"});
        //     this.setState({tampon: 1})
        //   }else{
        //     this.props.history.push({ pathname: '/'})
        //   }
        // }
        // const observer = new IntersectionObserver(callback, options)
        // observer.observe(tampon)

    }

    eventScrollTampon = (e) => {
        e.preventDefault();
        const currenTampon = this.state.tampon;
        if(currenTampon > 0 && currenTampon < 4) e.preventDefault();
        if (e.deltaY.toFixed() >=  16) {
            if (currenTampon <= 3) {
                this.setState({tampon: currenTampon+1})
            }
        }else if (e.deltaY <= -16) {
            if (currenTampon > 0 && currenTampon <= 4) {
                this.setState({tampon: currenTampon-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="tampon">
                
                <div className="container-blod-animation-zone" ref={this.tamponRef}>
                    <div className="central-blod-landing-page-tampon" >
                        <div className={`${ 'image-tampon-blod'+this.state.tampon } image-tampon-blod-tampon `} ></div>

                        <div className={`${ 'image-tampon-blod-relieve'+this.state.tampon } image-tampon-blod-tampon-relieve `} ></div>
                    </div>
                    
                    <div className={`${ this.state.tampon >= 1 && 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress'+this.state.tampon } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="text-percentage-land">{this.state.tampData[this.state.tampon].percentage}</div>
                            <div className="text-description-land">{this.state.tampData[this.state.tampon].description} <b> {this.state.tampData[this.state.tampon].dark} </b> </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Tampon;