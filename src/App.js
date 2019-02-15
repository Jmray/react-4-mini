import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/Route3';
import NotFound from './components/NotFound';


class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
          <nav>
            <Link to="/1">To Route 1</Link>
            <Link to="/2">To Route 2</Link>
            <Link to="/3">To Route 3</Link>
          </nav>
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route path="/1" component={Route1} />
              <Route path="/2" component={Route2} />
              <Route path="/3" component={Route3} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found"/>
               
            </Switch>
          </header>
        </div>
      </HashRouter>
    );
  }

}

export default App;
