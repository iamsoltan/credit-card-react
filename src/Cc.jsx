import React, { Component } from 'react';
import './Cc.css';
import puce from './img/puce.png'
import mc from './img/mc.png'
class Cc extends Component {
  state = {
    number : "**** **** **** ****",
    name : "Soltan",
    expiry : ""
  }
  space = true;

  render() {
    return (
      <div className="innerBody">
      <div className="container">
        <div className="card">
          <h2 className="number">{this.state.number}</h2>
    <h2 className="name">{this.state.name}</h2>
          <h2 className="expiry-desc">Valid Thru</h2>
          <h2 className="expiry">••/••</h2>

          <img src={puce} className="puce" alt="puce"/>
          <img src={mc} className="masterCard" alt="masterCard"/>
        </div>
        <div className="pupitre" >
          <input className="inputNumber" placeholder="card number" type="text" onKeyPress={e=>this.numbersOnly(e)} onChange={e=>this.formatNumber(e)}/>
          <input className="inputName" placeholder="card Holder" type="text" onKeyPress={e=>this.stringsOnly(e)} onInput={e=>this.formatName(e)}/>
          <input className="inputExpiry" placeholder="MM/YY" type="text" onKeyPress={e=>this.monthYearOnly(e)} onChange={e=>this.formatMonthYear(e)}/>
        </div>
      </div>
      </div>
    );
  }


numbersOnly = (e) =>{
    let unicode=e.charCode? e.charCode : e.keyCode;
    
    if (unicode!==8){ //allowing backspace
        if (unicode<48||unicode>57 || (e.target.value).length > 15) {//if not a number and if less than allowed char length
        return e.preventDefault();
        }
    }
    
}

formatNumber = (e) => {
  let y = e.target.value.split("");
  for (let k = y.length; k < 16; k++) {
    y.splice(k,0,"*");
    
  }
  for (let i = 4; i < y.length; i+=4) {
    y.splice(i,0," ");
    i++;
    
  }
  
  y = y.join("");
  console.log("y : ",y,"   length : ",y.length);
  this.setState({number : y});
}


stringsOnly = (e) => {
  let unicode=e.charCode? e.charCode : e.keyCode;
    let patt = /^[a-zA-Z ]*$/;
  if (unicode!==8){ //allowing backspace
      if (( patt.test(String.fromCharCode(unicode)) === false) || ((this.space === true)&&(unicode===32)) || (e.target.value).length > 16 ) {//if not a letter and if less than allowed char length
        return e.preventDefault();
      }
  }
  this.space = unicode === 32 ? true : false;
}
formatName = (e) =>{
  let n = e.target.value.toUpperCase();
  this.setState({name : n});
}


}

export default Cc;
