import React, { Component } from 'react';

class Converter extends Component{
  constructor(props, context){
    super(props, context);
  }
  convert(value,rate){
    return value*rate;
  }
}

module.exports = Converter;
