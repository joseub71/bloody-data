import React, { Component } from 'react';

// .CSS
import './Copa.css'

class Copa extends Component {

    constructor(props) {
        super(props);
        this.copaRef = React.createRef();

        this.state = {
            copa: 0,
            copaData: {
                0: {
                    percentage: '0',
                    description: '',
                    dark: ''
                },
                1: {
                    percentage: '23%',
                    description: 'de las mujeres sangra por',
                    dark: 'intentos de feminicidios en Puerto Rico.'
                },
                2: {
                    percentage: '83%',
                    description: 'de las mujeres de Puerto Rico sangra por',
                    dark: 'violencia doméstica dentro del contexto de la cuarentena.'
                }
            }
        };
    }

    componentDidMount(){
        this.copaRef.current.addEventListener("wheel", (event) => { this.eventScrollCopa(event)})

        // const copa = document.querySelector('#copa')
        // const options = {
        //   // root: document.querySelector('body'),
        //   rootMargin: '0px 0px 0px 0px',
        //   threshold: .5,
        // }
        // const callback = (entries, observer)  =>{
        //   if (entries[0].isIntersecting && this.props.location.hash === '') {
        //     copa.scrollIntoView({block: "start", behavior: "smooth"});
        //     this.setState({copa: 1})
        //   }
        // }
        
        // const observer = new IntersectionObserver(callback, options)
        // observer.observe(copa)

    }

    eventScrollCopa = (e) => {

        const currenCopa = this.state.copa;
        if(currenCopa > 0 && currenCopa < 2) e.preventDefault();
        if (e.deltaY.toFixed() >=  16) {
            if (currenCopa <= 1) {
                this.setState({copa: currenCopa+1})
            }
        }else if (e.deltaY <= -16) {

            if (currenCopa > 0 && currenCopa <= 2) {
                this.setState({copa: currenCopa-1})
            }
        }
    }

    render() {
        return (
            <div className="container-blod-landing-page" id="copa">
                
                <div className="container-blod-animation-zone" ref={this.copaRef}>
                    <div className="central-blod-landing-page-copa" style={{ backgroundSize: '54%'}} >
                        <div className={`${ 'image-copa-blod'+this.state.copa } image-copa-blod`} ></div>
                    </div>
                    
                    <div className={`${ this.state.copa >= 1 && 'percentage-progress-animation' } percentage-progress`} >
                    
                    <div className={`${ 'top-div-percentage-progress-copa'+this.state.copa } top-div-percentage-progress`} ></div>
                        <div>
                            <div className="text-percentage-land">{this.state.copaData[this.state.copa].percentage}</div>
                            <div className="text-description-land">{this.state.copaData[this.state.copa].description} <b> {this.state.copaData[this.state.copa].dark} </b> </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Copa;