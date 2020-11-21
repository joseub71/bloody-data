import React, { Component } from 'react';
import axios_core from 'axios';

// Assets
import arrow_header from "../../assets/arrow_header.png"

// .CSS
import './SignaturePetition.css'

// Services

function SignaturePetitionServices(data) {
    const axios = axios_core.create({
      baseURL: 'http://172.105.238.71/psp/'
    });
    return axios.post('signature.php', data)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
        return error.response;
      });
  }

// Services

export const validateEmail = (mail) => {
    let validate = false
    if ((/[^@]+@[^@]+\.[a-zA-Z]{2,6}/).test(mail)) {
      validate = true
    }
    return validate
  }

class SignaturePetition extends Component {

  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        secondName: '',
        email: '',
        buttomSelected: false,
        firstNameValid: false,
        secondNameValid: false,
        emailValid: false,
        disabledButtom: false,
        firstNameValidShowVal: true,
        secondNameShowVal: true,
        emailShowVal: true
    };
  }
  
  componentDidMount(){
  }

  change = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({ [name]: value })
    
    if (name === "firstName" || name === "secondName") {
        if (value.trim() !== '') {
            this.setState({ [name+'Valid']: true })
        }else{
            this.setState({ [name+'Valid']: false })
        }
    }
    
    if (name === "email") {
        if (value.trim() !== '' && validateEmail(value)) {
            this.setState({ [name+'Valid']: true })
        }else{
            this.setState({ [name+'Valid']: false })
        }
    }

  }

  onEnterButtom = (e) =>{
    if (e.keyCode === 13){
        this.sendForm()
    }
  }
  
  sendForm = () => {
      this.setState({ 
          buttomSelected: true, 
          firstNameValidShowVal: true,
          secondNameShowVal: true,
          emailShowVal: true
        })
      
    if (!this.state.disabledButtom) {     
        const emailValid = this.state.emailValid
        const firstNameValid = this.state.firstNameValid
        const secondNameValid = this.state.secondNameValid
        let error = false
    
        if (!emailValid) {
            error = true
        }
        if (!firstNameValid) {
            error = true
        }
        if (!secondNameValid) {
            error = true
        }
    
        if (!error) {
            this.setState({disabledButtom: true})
            SignaturePetitionServices({
                country: this.props.country,
                firstName: this.state.firstName,
                secondName: this.state.secondName,
                email: this.state.email
            }).then( response => {
                // debugger
                this.setState({disabledButtom: false})
                if (response) {     
                    if (response.status === 200 || response.status === 201) {
                        // succes
                        alert('Se guardo tu peticion')
                    }else{
                        alert('DEBUG01: BloodyData - Conexion a la db pendiente')
                    }
                }
                this.props.handlerModalSign()
            })
        }else{
            // buttomSelected
        }
    }
  }

  render() {
    
    return (
        <div className={`${ this.props.modal && 'active-modal' } container-modal-signature `} onClick={ (e) => this.props.handlerModalEvent(e) } id="containerModal" >
            <div className="container-body-modal-signature" >
                
                <div>
                    <div className="container-yellow-modal-form">
                         <div className="text-yellow-modal-form" > <i className="font-strong"> Firma </i> </div>
                         <br/>
                         <div className="text-yellow-modal-form" > <i className="font-strong"> ahora </i> </div>
                         <br/>
                         <div className="text-yellow-modal-form" > <i className="font-strong"> la peticion </i> </div>
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
                                <label htmlFor="firstName"> Nombre </label>
                                <input type="text"
                                       style={{ background: !this.state.firstNameValid && this.state.buttomSelected && this.state.firstNameValidShowVal ? 'yellow' : 'transparent' }}
                                       id="firstName"
                                       name="firstName"
                                       value={ !this.state.firstNameValid && this.state.buttomSelected && this.state.firstNameValidShowVal ? 'Por favor completa este campo' : this.state.firstName }
                                       onChange={ e => this.change(e) }
                                       tabIndex="1"
                                       onClick={ () => { this.setState({ firstNameValidShowVal: false})}}
                                       /> 
                                <span className={`${ this.state.firstNameValid && 'check-input-active' } check-input `} > &#10003; </span>
                                {  !this.state.firstNameValid && <span className="check-required-input" > * </span>}
                            </div>
                            <div className="container-input-modal"> 
                                <label htmlFor="secondName"> Apellido </label>
                                <input type="text"
                                       style={{ background: !this.state.secondNameValid && this.state.buttomSelected && this.state.secondNameShowVal ? 'yellow' : 'transparent' }}
                                       id="secondName"
                                       name="secondName"
                                       value={ !this.state.secondNameValid && this.state.buttomSelected && this.state.secondNameShowVal ? 'Por favor completa este campo' : this.state.secondName }
                                       onChange={ e => this.change(e) } 
                                       tabIndex="2"
                                       onClick={ () => { this.setState({ secondNameShowVal: false})}}
                                       /> 
                                <span className={`${ this.state.secondNameValid && 'check-input-active' } check-input `} > &#10003; </span>
                                {  !this.state.secondNameValid && <span className="check-required-input" > * </span>}
                            </div>
                            <div className="container-input-modal"> 
                                <label htmlFor="email"> Mail </label>
                                <input type="email"
                                       style={{ background: !this.state.emailValid && this.state.buttomSelected && this.state.emailShowVal ? 'yellow' : 'transparent' }}
                                       id="email"
                                       name="email"
                                       value={ !this.state.emailValid && this.state.buttomSelected && this.state.emailShowVal ? 'Por favor escribe un email valido' : this.state.email }
                                       onChange={ e => this.change(e) }
                                       tabIndex="3"
                                       onClick={ () => { this.setState({ emailShowVal: false})}}
                                       className="required-input-border"
                                       /> 
                                <span className={`${ this.state.emailValid && 'check-input-active' } check-input `} > &#10003; </span>
                                {  !this.state.emailValid && <span className="check-required-input" > * </span>}
                            </div>
                        </div>

                        <div className="container-text-required">
                            <div>
                                <span className="asterisk-required-form"> * </span> <span className="text-bottom-required-field"> Campo requerido </span>
                            </div>
                            <div>
                                <div className="container-container-button-sign" tabIndex="4" onClick={this.sendForm} onKeyDown={this.onEnterButtom}>
                                    <div className="container-button-sign">
                                        <span className="text-header-button-sign"> firmar ahora </span>
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

export default SignaturePetition;
