import CurrencyConverter from './CurrencyConverter.js';

var ContentHolder = React.createClass({
  render: function(){
    return (
      <section>
        <div className="container input-group ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-heading">Simple Currency Converter</h1>
              <p className="lead section-lead">This is a very simple currency converter
              based on react js.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <CurrencyConverter />
            </div>
          </div>
        </div>
       </section>
    )
  }
})

module.exports = ContentHolder;
