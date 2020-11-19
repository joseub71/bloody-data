import React, { Component } from 'react';

// Assets
import arrow_header from "../../assets/arrow_header.png"

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
    }    
  }

  render() {
    
    return (
        <div className={`${ this.props.modal && 'active-modal' } container-modal-signature modal-select-country`} onClick={ (e) => this.props.handlerModalEvent(e) } id="containerModal" >
            <div className="container-body-modal-signature" >
                
                <div>
                    <div className="container-yellow-modal-form">
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
                        En todo el mundo, la menstruación sigue siendo un tabú. Y hablar de la sangre
                        del período sigue siendo un tema repulsivo. Sin embargo, hay otra sangre de la
                        que no estamos hablando: La sangre de las muertes por femicidio, la sangre de
                        las mujeres caídas en luchas, de las torturadas, violadas y lastimadas
                        domésticamente. Y esa sangre, sí da asco.
                    </p>
                    <div>

                        <div className="container-inputs-modal">
                            <div className="container-input-modal"> 
                                <label htmlFor="country"> país: </label>
                                <select id="country" name="country" onChange={this.change}>
                                    <option value="" ></option>
                                    <option value="PR" > Puerto Rico </option>
                                    <option value="VE" > Venezuela </option>
                                </select>
                                {/* <span className={`${ this.state.firstNameValid && 'check-input-active' } check-input `} > &#10003; </span>
                                {  !this.state.firstNameValid && <span className="check-required-input" > * </span>} */}
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
    )
  }
}

export default SelectCountry;
