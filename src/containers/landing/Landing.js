import React, { Component } from 'react';

// Components
import Header from '../../components/header/Header';
import Tampon from '../../components/tampon/Tampon';

// Assets
import logo_bloody_copy from "../../assets/logo_bloody_copy.png"

// .CSS
import './Landing.css'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showFullHeader: true,
      tampon: 0
    };
  }
  
  componentDidMount(){

    window.onscroll = (e)=> {
      if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
        this.setState({showFullHeader: false})
      }else{
        this.setState({showFullHeader: true})
      }
      
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        this.setState({tampon: 1})
      }
      if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
        this.setState({tampon: 2})
      }
      if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        this.setState({tampon: 3})
      }
      if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        this.setState({tampon: 4})
      }

    }

  }
  render() {
    
    return (
        <div className="container-landing-page" >
            <Header showFullHeader={this.state.showFullHeader} {...this.props} />
            
            <div id="home" className="container-home-landing-page">
              <img src={logo_bloody_copy} alt=""/>
              <span> Que las mujeres sangren es asqueroso </span>
            </div>

            <Tampon tampon={this.state.tampon} />
            
        </div>
    )
  }
}

export default Landing;
