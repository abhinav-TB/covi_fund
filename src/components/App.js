import React, { Component } from 'react';
import './App.css';
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('ad8c37c0-13cf-4d29-939e-221cf2ca9ead', 'maticMumbai');
const web3 = new Web3(portis.provider);

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <h1>Oxygen</h1>
        </nav>
      </div>
    );
  }
}

export default App;
