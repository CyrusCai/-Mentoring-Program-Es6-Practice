import Converter from '../scripts/converter.js';
import Checker from '../scripts/checker.js';
import InputGroup from './InputGroup.js';

let converter = '';
let checker = '';
const url = 'http://api.fixer.io/latest?base=CNY&symbols=HKD';
var CurrencyCoverter = React.createClass({
  getInitialState : function(){
    return {
      input: '' ,
      output: '',
      rate: ''
    }
  },
  componentDidMount : function(){
    converter = new Converter();
    checker = new Checker();
    this.getRateFromAPI();
  },
  handleInputChange : function(value){
    this.setState({input: value});
    if(checker.checkValue(value)){
      let moneyAfterConvert = converter.convert(value,this.state.rate);
      this.setState({ output: moneyAfterConvert});
      console.log('output',this.state.output);
    }else{
      console.log('wrong number');
    }
  },
  getRateFromAPI(){
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success:function(data){
        this.setState({rate:Number(data.rates.HKD)});
        console.log('rate',this.state.rate);
      }.bind(this),
      error:function(data){
        console.log('error get data',data);
      }.bind(this)
    });
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
        <InputGroup title='FROM' value={this.state.input} setValue={this.handleInputChange}/>
        <InputGroup title='TO' value={this.state.output}/>
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