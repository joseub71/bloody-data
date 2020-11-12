import React, { Component } from 'react';

// Components
import Header from '../../components/header/Header';
import logo_bloody_copy from "../../assets/logo_bloody_copy.png"

// .CSS
import './Landing.css'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    
    return (
        <div className="container-landing-page" >
            <Header {...this.props} />
            <img src={logo_bloody_copy} alt=""/>
        </div>
    )
  }
}

export default Landing;
