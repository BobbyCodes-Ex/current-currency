import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Exchange from './Exchange';
import Chart from './Chart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const base_URL = 'https://altexchangerateapi.herokuapp.com/latest?'
const test_URL = 'http://api.exchangeratesapi.io/v1/latest'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Exchange />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
          </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
