import React, { Component } from 'react';

class Checker extends Component{
  constructor(props, context){
    super(props, context);
    this.checkValue = this.checkValue.bind(this);
  }
  checkValue(value = 0){
    let num = this.toNumber(value);
    if(this.isSafeInteger(num) &&
      this.isPositive(num)
      ){
      return true;
    }else{
      return false;
    }
  }
  toNumber(value){
    return Number(value);
  }
  // isFinite(value){
  //   return Number.isFinite(value);
  // }
  isSafeInteger(value){
    return Number.isSafeInteger(value);
  }
  isPositive(value){
    return value > 0;
  }
}

module.exports = Checker;