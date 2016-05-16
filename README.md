# -Mentoring-Program-Es6-Practice

## Table of contents

* [Quick start](#quick-start)
* [Basic Introduction](#basic-introduction)
* [ES6 Feathers](#es6-feathers)


## Quick Start

Following the steps to run the project:

* Clone the repo: `git@github.com:CyrusCai/-Mentoring-Program-Es6-Practice.git`.
* Install all dependencies: `npm install`.
* Install [Webpack](http://webpack.github.io//): `npm install webpack -g`.
* Install Webpack Dev Server : `npm install webpack-dev-server -g`.
* Build all modules locally: `webpack --progress --colors --watch`.
* Start webpack dev server: `webpack-dev-server --progress --colors --port 8090`.
* Open your browser and go to the URL `http://localhost:8090/webpack-dev-server/`. 

## Basic Introduction
- This is a very very basic currency convertor based on react.
- All the components are created by react, which is contained in './public/components/*'
- We extract all helper classes into './public/scripts', including checker.js and converter.js. The former one is used to check whether 
the input is valid or not, and the latter is to provide the function of convert from CNY to HDK. 
- The exchange rate is got from [fixer](http://api.fixer.io) when the site is loaded and refreshed.

## ES6 Feathers
Most of new feathers of ES6 are used in these js files:
- ./components/CurrencyConverter.js
- ./scripts/checker.js
- ./scripts/converter.js

**Use of ES6 feathers**
- Class definition and inheritance ( based on react)
- Use const and let to declare variables
- Default Parameter Values
- Export and import modules
- New functions for Safety checking
- Lexical this ( based on react)

