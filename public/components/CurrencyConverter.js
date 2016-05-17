import Converter from '../scripts/converter.js';
import Checker from '../scripts/checker.js';
import InputGroup from './InputGroup.js';

let converter = '';
let checker = '';
const url_old = 'http://api.fixer.io/latest?base=CNY&symbols=HKD';
const url = 'http://api.fixer.io/latest?'
var CurrencyCoverter = React.createClass({
  getInitialState : function(){
    return {
      input: '' ,
      output: '',
      rate: '',
      fromCurrency : 'USD',
      toCurrency : 'USD'
    }
  },
  componentDidMount : function(){
    converter = new Converter();
    checker = new Checker();
  },
  handleInputChange : function(value){
    this.setState({input: value});
    if(checker.checkValue(value)){
      let moneyAfterConvert = converter.convert(value,this.state.rate);
      this.setState({ output: moneyAfterConvert});
    }else{
      console.log('wrong number');
    }
  },
  getRateFromAPI(){
    console.log('url',url+"base="+this.state.fromCurrency+"&symbols="+this.state.toCurrency);
    $.ajax({
      url: url+"base="+this.state.fromCurrency+"&symbols="+this.state.toCurrency,
      dataType: 'json',
      cache: false,
      success:function(data){
        this.setState({rate:Number(data.rates.HKD)});
      }.bind(this),
      error:function(data){
        console.log('error get data',data);
      }.bind(this)
    });
  },
  setFromCurrency(value){
    let successCallback = function(){
      console.log('to currency set', this.state.toCurrency);
      this.getRateFromAPI();
    }
    this.setState({fromCurrency: value},successCallback);
    this.getRateFromAPI();
  },
  setToCurrency(value){
    let successCallback = function(){
      this.getRateFromAPI();
    }
    this.setState({toCurrency : value},successCallback);
  },
  handleButtonClick(){
    this.setState({
      input:'',
      output:''
    });
  },
  render : function(){
    return (
      <div className="container">
        <InputGroup
          title='From'
          value={this.state.input}
          currency = {this.state.fromCurrency}
          setValue={this.handleInputChange}
          setCurrency = {this.setFromCurrency}
        />
        <InputGroup
          title='To'
          currency = {this.state.toCurrency}
          value={this.state.output}
          setCurrency = {this.setToCurrency}
          />
        <div className="input-group col-md-6 col-md-offset-2">
          <button
            className="btn btn-primary btn-lg"
            onClick = {this.handleButtonClick}
          >
          Reset
          </button>
        </div>
      </div>
    )
  },
});

module.exports = CurrencyCoverter;