import React, { Component } from 'react';

class Converter extends Component{
  constructor(props, context){
    super(props, context);
  }
  convert(value = 0,rate = 0){
    return value*rate;
  }
}

module.exports = Converter;
