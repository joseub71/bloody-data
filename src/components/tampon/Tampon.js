import React, { Component } from 'react';

// .CSS
import './Tampon.css'

class Tampon extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
        <div className="container-blod-landing-page" id="tampon">
            
            <div className="central-blod-landing-page" style={{ backgroundSize: '67px 350px'}}>
                <div className={`${ 'image-tampon-blod'+this.props.tampon } image-tampon-blod`} ></div>
            </div>
            
            <div className={`${ this.props.tampon >= 1 && 'percentage-progress-animation' } percentage-progress`} >
            
            <div className={`${ 'top-div-percentage-progress'+this.props.tampon } top-div-percentage-progress`} ></div>
                <div>
                    <div className="text-percentage-land">{this.state.tampData[this.props.tampon].percentage}</div>
                    <div className="text-description-land">{this.state.tampData[this.props.tampon].description} <b> {this.state.tampData[this.props.tampon].dark} </b> </div>
                </div>
            </div>
            
        </div>
    )
  }
}

export default Tampon;