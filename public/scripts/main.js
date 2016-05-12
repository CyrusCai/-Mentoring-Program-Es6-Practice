var Component = React.createClass({
  componentDidMount: function() {
    this.loadDataFromServer();
  },
  loadDataFromServer: function(){
    $.ajax({
      url: this.props.url,
      success:function(data){
        console.log('data',data);
      },
      error:function(data){
        console.log('data',data);
      }
    });
  },
  render : function(){
    return (
      <div class="container">
        <TripForm />
      </div>
    );
  }
});

var TripForm = React.createClass({
  getInitialState:function(){
    return {
      startPoint: '',
      destination: '',
      startDate: '',
      endDate: ''
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log('form has submit');
    console.log(this.state.startPoint,this.state.destination);
  },
  setStartPoint: function(value){
    this.state.startPoint = value;
  },
  setDestination: function(value){
    this.state.destination = value;
  },
  setStartDate: function(value){
    this.state.startDate = value;
  },
  setEndDate: function(value){
    this.state.endDate = value;
  },
  render : function(){
    return (
      <div className="formContainer container-fluid">
        <form className="newTrip" onSubmit={this.handleSubmit}>
          <InputBox content="Start　Point:　" setValue={this.setStartPoint}/>
          <InputBox content="Destination:　" setValue={this.setDestination}/>
          <InputBox content="Start Date:　" setValue={this.setStartDate}/>
          <InputBox content="End Date: " setValue={this.setEndDate}/>
          <button type="submit" className="row col-md-offset-2">Submit</button>
        </form>
      </div>
    );
  }
});

var InputBox = React.createClass({
  handleChange: function(e){
    this.props.setValue(e.target.value);
  },
  render : function(){
    return (
      <div className="row col-md-offset-2">
        <label className="">
          {this.props.content}
          <input className="text" onChange={this.handleChange}></input>
        </label>
      </div>
    );
  }
});

ReactDOM.render(
  <Component url="http://localhost:3000/trip/haha"/>,
  document.getElementById('content')
);