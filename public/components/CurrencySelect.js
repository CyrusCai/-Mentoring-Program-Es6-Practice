let currency = ['USD','HKD','CNY','JPY'];
var CurrencySelect = React.createClass({
  handleSelct : function(e){
    this.props.setCurrency(e.target.value);
  },
  render: function(){
    let options = currency.map(
      item=>(<option key={item} value={item}>{item}</option>)
    )
    return (
     <select onChange={this.handleSelct}>
        {options}
     </select>
    )
  }
})

module.exports = CurrencySelect;
