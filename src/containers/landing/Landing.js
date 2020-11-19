import React, { Component } from 'react';

// Components
import Tampon from '../../components/tampon/Tampon';
import Toalla from '../../components/toalla/Toalla';
import Copa from '../../components/copa/Copa';
import Tissu from '../../components/tissu/Tissu';

// Assets
import logo_bloody_copy from "../../assets/logo_bloody_copy.png";

// .CSS
import './Landing.css'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    
    return (

        <div className="container-landing-page" >
            
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

            <Tampon  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />
            
            <Toalla  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />

            <Copa  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />

            <Tissu  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />
            
        </div>
    )
  }
}

export default Landing;
