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
{/* transform: skewY(-8deg);
    transform: skewY(1deg); */}
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
