import Converter from '../scripts/converter.js';
import Checker from '../scripts/checker.js';

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
  handleInputChange : function(e){
    let value = e.target.value;
    this.setState({input: value});
    if(checker.checkValue(value)){
      let moneyAfterConvert = converter.convert(value,this.state.rate);
      this.setState({ output: moneyAfterConvert});
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
        <div className="row input-group col-md-6">
          <label className="tab">From</label>
          <span className="input-group-addon">￥</span>
          <input
            type = "text"
            placeholder = "CNY"
            value={this.state.input}
            onChange={this.handleInputChange}
            className ="form-control col-md-1"
          />
        </div>
        <div className="row input-group  col-md-6">
          <label className="tab">To</label>
          <span className="input-group-addon">$</span>
          <input
            type = "text"
            placeholder = "HKD"
            value={this.state.output}
            className ="form-control  col-md-1"
          />
        </div>
        <div className="input-group col-md-6 col-md-offset-2">
          <button
          className="btn btn-primary btn-lg"
          onClick = {this.handleButtonClick}
          >Reset</button>
        </div>
      </div>
    )
  },
});

module.exports = CurrencyCoverter;