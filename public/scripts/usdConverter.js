import Converter from './converter.js';
// import React, { Component } from 'react';


class UsdConverter extends Converter{
  constructor(value){
    super(value);
    console.log('Converter value',value);
  }
  checkValue(value){

  }
  convert(value){
    console.log('hahahaaaaa');
  }
}

module.exports = Converter;
