import CurrencySelect from './CurrencySelect.js';

var InputGroup = React.createClass({
  getInitialState: function(){
    return {
      input: this.props.value,
    }
  },
  handleInputChange: function(e){
    this.setState({
      input: e.target.value,
    });
    if(this.props.setValue){
      this.props.setValue(e.target.value);
    }
  },
  componentWillReceiveProps : function(nextProps){
    this.setState({
      input : nextProps.value
    });

  },
  setSelectCurrency : function(value){
    this.props.setCurrency(value);
  },
  render: function(){
    return (
      <div className="row input-group col-md-6">
        <label className="tab">{this.props.title}</label>
        <CurrencySelect setCurrency = {this.setSelectCurrency}/>
        <input
          type = "text"
          placeholder = {this.props.currency}
          value = {this.state.input}
          onChange = {this.handleInputChange}
          className = "form-control col-md-1"
        />
      </div>
    )
  }
})

module.exports = InputGroup;
