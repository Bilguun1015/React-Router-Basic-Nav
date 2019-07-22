import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact/" component={Contact} />
      </Switch>
    </div>
  </div>
);

export default App;
