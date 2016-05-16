'use strict';
import Header from './Header.js';
import Footer from './Footer.js';
import CurrencyConverter from './CurrencyConverter.js';

var Container = React.createClass({
  render: function(){
    return (
      <div>
       <Header />
       <div>
        <section>
          <div className="container input-group ">
              <div className="row ">
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
       </div>
       <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <Container />,
  document.getElementById('content')
);
