import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import Error from './components/Error/Error.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/error" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
