import React, { Component } from 'react';
import axios_core from 'axios';

// Components
import Menu from '../../components/menu/Menu';
import Tampon from '../../components/tampon/Tampon';
import Toalla from '../../components/toalla/Toalla';
import Copa from '../../components/copa/Copa';
import Tissu from '../../components/tissu/Tissu';
import Footer from '../../components/footer/Footer';
import SignaturePetition from '../../components/signature_petition/SignaturePetition';
import SelectCountry from '../../components/select_country/SelectCountry';

// Assets
import logo_bloody_copy from "../../assets/logo_bloody_copy.png";

// .CSS
import './Landing.css'


function callCurrentCountry(required) {
  const axios = axios_core.create({
    baseURL: 'http://172.105.238.71/psp/'
  });

  return axios.get('geoinfo.php',
    )
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
      return error.response;
    });
}

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalCountry: false,
      country: 'PR'
    };
  }
  
  componentDidMount(){
    // const home = document.querySelector('#home')
    // const options = {
    //   rootMargin: '0px 0px 0px 0px',
    //   threshold: .5,
    // }
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.props.location.hash === '') {
    //     home.scrollIntoView({block: "start", behavior: "smooth"});
    //   }
    // }
    // const observer = new IntersectionObserver(callback, options)
    // observer.observe(home)
    callCurrentCountry().then( response => {
      if (response && response.data.country) {
        if (response.data.country !== 'VE' && response.data.country !== 'PR') {
          this.setState({modalCountry: true })
        }else{
          this.setState({country: response.data.country })
        }
      }
    })
  }

  handlerModal = (e) => {
    if (e.target.id === "containerModal" && e.currentTarget.id === "containerModal") {
      this.setState({ modal: !this.state.modal })
    }
  }
  
  handlerModalCountry = (e) => {
    if (e.target.id === "containerModal" && e.currentTarget.id === "containerModal") {
      this.setState({ modalCountry: !this.state.modalCountry })
    }
  }

  changeCountry = (country) => {
    this.setState({ modalCountry: false, country: country })
  }

  render() {
    
    return (

        <div className="container-landing-page" >
            <Menu {...this.props} handlerModalEvent={(e)=>{ this.setState({ modal: !this.state.modal }) }}/>
            
            <div className="container-circle-header">
                    <div className="circle-header first-circle"></div>
                    <div className="circle-header second-circle"></div>
                    <div className="circle-header third-circle"></div>
                    <div className="circle-header four-circle"></div>
            </div>
            
            <div id="home" className="container-home-landing-page">
              <img src={logo_bloody_copy} alt="logo bloody data"/>
              <span> Que las mujeres sangren es asqueroso </span>
            </div>

            <SignaturePetition {...this.props} modal={this.state.modal} handlerModalEvent={(e)=>{ this.handlerModal(e) }} handlerModalSign={(e)=>{ this.setState({ modal: !this.state.modal })} } country={this.state.country}/>

            <SelectCountry {...this.props} modal={this.state.modalCountry} changeCountry={this.changeCountry} handlerModalEvent={(e)=>{ this.handlerModalCountry(e) }}/>

            <Tampon  {...this.props} handlerModalEvent={(e)=>{ this.setState({ modal: !this.state.modal }) }}  country={this.state.country} />
            
            <Toalla  {...this.props} handlerModalEvent={(e)=>{ this.setState({ modal: !this.state.modal }) }}  country={this.state.country} />

            <Copa  {...this.props} handlerModalEvent={(e)=>{ this.setState({ modal: !this.state.modal }) }}  country={this.state.country} />

            <Tissu  {...this.props} handlerModalEvent={(e)=>{ this.setState({ modal: !this.state.modal }) }}  country={this.state.country} />

            <Footer  {...this.props} handlerModalEvent={(e)=>{ this.setState({ modal: !this.state.modal }) }}  country={this.state.country} />
            
        </div>
    )
  }
}

export default Landing;
