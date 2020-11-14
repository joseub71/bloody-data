import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CSS
import './App.css';

// Pages
import Landing from './containers/landing/Landing.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount(){
    const home = document.querySelector('#home')
    const options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: .5,
    }
    function callback(entries, observer) {
      if (entries[0].isIntersecting) {
        home.scrollIntoView({block: "start", behavior: "smooth"});
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(home)
  }

  render() {
    return (
      <div className="container-web-app">
        <Router>
            <Switch>

              <Route
                exact
                path='/'
                render={(props) => <Landing {...props} />}
              />

              <Route
                path='*'
                render={(props) => <Landing {...props} />}
              />

              {/* <Route
                exact
                path='/autologin'
                render={(props) => <AutoLoginPage {...props} lang={ file_lang } showAlerts={ (props) => this.showAlerts (props)} />}
              />

              <Route
                exact
                path='/autologin'
                render={(props) => <AutoLoginPage {...props} lang={ file_lang } showAlerts={ (props) => this.showAlerts (props)} />}
               /> */}

            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
