import React, { Component } from 'react';
import './Cc.css';
import puce from './img/puce.png'
import mc from './img/mc.png'
class App extends Component {
  render() {
    return (
      <div className="innerBody">
      <div className="container">
        <div className="card">
          <h2 className="number">•••• 1234 •••• ••••</h2>
          <h2 className="name">3am salah</h2>
          <h2 className="expiry-desc">Valid Thru</h2>
          <h2 className="expiry">••/••</h2>

          <img src={puce} className="puce" alt="puce"/>
          <img src={mc} className="masterCard" alt="masterCard"/>
        </div>
        <div className="pupitre" >
          <input className="inputNumber" placeholder="card number" type="text"/>
          <input className="inputName" placeholder="card Holder" type="text"/>
          <input className="inputExpiry" placeholder="MM/YY" type="text"/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
