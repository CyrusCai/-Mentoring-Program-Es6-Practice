'use strict';
import Header from './Header.js';
import Footer from './Footer.js';
import ContentHolder from './ContentHolder.js';

var Container = React.createClass({
  render: function(){
    return (
      <div>
       <Header />
       <ContentHolder />
       <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <Container />,
  document.getElementById('content')
);
