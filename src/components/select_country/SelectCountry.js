import React, { Component } from 'react';

// Assets
import arrow_header from "../../assets/arrow_header.png"
// import arrow_select from "../../assets/arrow_select.jpeg"

// .CSS
import '../signature_petition/SignaturePetition.css'
import './SelectCountry.css'

class SelectCountry extends Component {

  constructor(props) {
    super(props);

    this.state = {
        country: null,
    };
  }
  
  componentDidMount(){
  }

  change = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value })
  }

  onEnterButtom = (e) =>{
    if (e.keyCode === 13){
        this.sendForm()
    }
  }
  
  sendForm = () => {
    if (this.state.country) {
        this.props.changeCountry(this.state.country)
    }else{
        alert('Por favor selecciona un pais')
    }  
  }

  render() {
    
    return (
        <div id="selectCountryModal">
            <div className={`${ this.props.modal && 'active-modal' } container-modal-signature modal-select-country`} onClick={ (e) => this.props.handlerModalEvent(e) } id="containerModal" >
                <div className="container-body-modal-signature" >
                <span className="close-modal-general" onClick={ () => this.props.changeCountry(this.state.country ? this.state.country : 'PR') } > X </span>
                    <div>
                        <div className="container-yellow-modal-form font-strong">
                            <div className="text-yellow-modal-form" >  Selecciona  </div>
                            <br/>
                            <div className="text-yellow-modal-form" >  tu país y  </div>
                            <br/>
                            <div className="text-yellow-modal-form" >  firma ahora </div>
                        </div>
                        <div className="container-text-bottom-left" > para la Declaración Latinoamericana de <br/> Emergencia por violencia de género. </div>
                    </div>
                    <div className="container-group-forma">
                        <p>
                            En todo el mundo la menstruación sigue siendo un tabú. Y, para muchas personas, hablar de la sangre del período es un tema repulsivo.
                            Sin embargo, hay mucha más sangre de la que no estamos hablando: la de las muertes por feminicidio; la de las mujeres caídas en luchas;
                            de las torturadas, violadas y lastimadas domésticamente. Y toda esa sangre sí da asco.
                        </p>
                        <div>

                            <div className="container-inputs-modal">
                                <div className="container-input-modal"> 
                                    <label htmlFor="country"> país: </label>
                                    <select id="country" name="country" className="select-country" onChange={this.change} ref={(inputFocus) => this.isearchdriver = inputFocus}>
                                        <option value="" ></option>
                                        <option value="PR" > Puerto Rico </option>
                                        <option value="VE" > Venezuela </option>
                                    </select>
                                    
                                    {/* <span className="check-required-input" > 
                                        <img style={{filter: 'brightness(2)'}} src={arrow_select} alt="arrow down select" onClick={() => {this.isearchdriver.focus()}} /> 
                                    </span> */}
                                </div>
                            </div>

                            <div className="container-text-required">
                                <div>
                                    <div className="container-container-button-sign" tabIndex="4" onClick={this.sendForm} onKeyDown={this.onEnterButtom}>
                                        <div className="container-button-sign">
                                            <span className="text-header-button-sign"> ENTRAR </span>
                                            <div className="header-button-sign" ></div>
                                            <img className="header-button-arrow" src={arrow_header} alt="Flecha a la derecha"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
  }
}

export default SelectCountry;
