import CurrencySelect from './CurrencySelect.js';

var InputGroup = React.createClass({
  getInitialState: function(){
    return {
      input: '',
    }
  },
  handleInputChange: function(e){
    this.setState({
      input: e.target.value,
    });
    this.props.setValue(e.target.value);
  },
  render: function(){
    return (
      <div className="row input-group col-md-6">
        <label className="tab">{this.props.title}</label>
        <CurrencySelect />
        <input
          type = "text"
          placeholder = "CNY"
          value = {this.state.input}
          onChange = {this.handleInputChange}
          className = "form-control col-md-1"
        />
      </div>
    )
  }
})

module.exports = InputGroup;
