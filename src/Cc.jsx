import React, { Component } from 'react';
import './Cc.css';
import puce from './img/puce.png'
import mc from './img/mc.png'
class Cc extends Component {
  state = {
    number : "**** **** **** ****",
    name : "*****",
    expiry : "**/**"
  }
  space = true;//detect existed space in name input
  isBackSpace = false;//preventing formatting when backspace in expiry date input

  render() {
    return (
      <div className="innerBody">
      <div className="container">
        <div className="card">
          <h2 className="number">{this.state.number}</h2>
    <h2 className="name">{this.state.name}</h2>
          <h2 className="expiry-desc">Valid Thru</h2>
          <h2 className="expiry">{this.state.expiry}</h2>

          <img src={puce} className="puce" alt="puce"/>
          <img src={mc} className="masterCard" alt="masterCard"/>
        </div>
        <div className="pupitre" >
          <input className="inputNumber" placeholder="card number" type="text" onKeyPress={e=>this.numbersOnly(e)} onChange={e=>this.formatNumber(e)}/>
          <input className="inputName" placeholder="card Holder" type="text" onKeyPress={e=>this.stringsOnly(e)} onInput={e=>this.formatName(e)}/>
          <input className="inputExpiry" placeholder="MM/YY" type="text" onKeyDown={e=>this.detectBackSpace(e)} onKeyPress={e=>this.monthYearOnly(e)} onChange={e=>this.formatMonthYear(e)}/>
        </div>
      </div>
      </div>
    );
  }

/* credit card number */
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
  this.setState({number : y});
}

/* credit card name */
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


/*expiry date */
monthYearOnly = (e) =>{
  let mUnicode=e.charCode? e.charCode : e.keyCode;
  if (mUnicode!==8){ //allowing backspace
      if (mUnicode<48||mUnicode>57 ||(e.target.value).length > 4) {//if not a number and if less than allowed char length
      return e.preventDefault();
      }else if (( e.target.value.length === 2 ) && (mUnicode !== 50)) {//preventing year more than 20th
        return e.preventDefault();
      }else if (( e.target.value.length === 4 ) && (![49,50,51,52,53].includes(mUnicode))) {//preventing year not betwwen 21 - 25
        return e.preventDefault();
      }
  }
}
detectBackSpace = e => {
  let mUnicode=e.charCode? e.charCode : e.keyCode;
  this.isBackSpace = (mUnicode === 8)? true : false;
}

formatMonthYear = (e) =>{
  let m = e.target.value.split("");
  if (["2","3","4","5","6","7","8","9"].includes(m[0])) {m.splice(0,0,"0")}
  if ((m.length === 3) && (this.isBackSpace === false)){
    m.splice(2,0,"/");
  }
  m = m.join("");
  e.target.value = m;
  this.setState({expiry : m});
}





}

export default Cc;
