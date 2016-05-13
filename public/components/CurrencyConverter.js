import Converter from '../scripts/converter.js';
import Checker from '../scripts/checker.js';
let converter = '';
let checker = '';
var CurrencyCoverter = React.createClass({
  getInitialState : function(){
    return {
      input: '' ,
      output: ''
    }
  },
  componentDidMount : function(){
    converter = new Converter();
    checker = new Checker();
  },
  handleInputChange : function(e){
    let value = e.target.value;
    this.setState({input: value});
    if(checker.checkValue(value)){
      converter.convert(value);
    }else{
      console.log('wrong number');
    }
  },
  render : function(){
    return (
      <div class="container">
        <div class="inputPanel">
          <span>Input</span>
          <input
            type = "text"
            placeholder = "Input"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
        </div>
        <div class="outputPanel">
          <span>Output</span>
          <input type="text" id="output" />
        </div>
        <div>
          <button>Reset</button>
        </div>
      </div>
    )
  },
});

ReactDOM.render(
  <CurrencyCoverter />,
  document.getElementById('content')
);