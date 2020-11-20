import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios_core from 'axios';

//CSS
import './App.css';

// Component
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

import SignaturePetition from './components/signature_petition/SignaturePetition';
import SelectCountry from './components/select_country/SelectCountry';

// Pages
import Landing from './containers/landing/Landing.js';
// import Testimonials from './containers/testimonials/Testimonials.js';


function callCurrentCountry() {
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

const Main = (props) => {
  return(
    <div>
        <Menu {...props}
          modal={props.modal}
          modalCountry={props.modalCountry}
          country={props.country}
          handlerModalEvent={props.handlerModalEvent}
        />  
          <main>
            {props.children}
          </main>
          <SignaturePetition {...props} modal={props.modal} handlerModalEvent={(e)=>{ props.handlerModal(e) }} handlerModalSign={(e)=>{ props.handlerModalSign(e)} } country={props.country}/>

          <SelectCountry {...props} modal={props.modalCountry} changeCountry={props.changeCountry} handlerModalEvent={(e)=>{ props.handlerModalCountry(e) }}/>
        <Footer  {...props} />  
    </div>
    )
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalCountry: false,
      country: 'PR'
    };
  }

  componentDidMount(){
    callCurrentCountry().then( response => {
      if (response && response.data.country) {
        response.data.country = 'other'
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

  handlerModalEvent = ()=>{ 
    this.setState({
      modal: !this.state.modal
    })
  }

  handlerModalSign = ( )=>{
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <div className="container-web-app">
        <Router>
          <Main 
          handlerModalSign={this.handlerModalSign}
          modal={this.state.modal} 
          modalCountry={ this.state.modalCountry } 
          country={this.state.country} 
          handlerModal = {(e)=> this.handlerModal(e)}
          handlerModalCountry = {(e)=> this.handlerModalCountry(e)}
          changeCountry={this.changeCountry}
          handlerModalEvent={this.handlerModalEvent}
          >
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={(props) => <Landing {...props}
                    handlerModalEvent={this.handlerModalEvent}
                    country={this.state.country} 
                    />}
                  />
                  
                  {/* <Route
                    exact
                    path='/testimonios'
                    render={(props) => <Testimonials {...props} 
                    country={this.state.country} 
                    />}
                  /> */}

                  <Route
                    path='*'
                    render={(props) => <Landing {...props}
                    handlerModalEvent={this.handlerModalEvent}
                    country={this.state.country} 
                    />}
                  />
                </Switch>
            </Main>
        </Router>
      </div>
    )
  }
}

export default App;
