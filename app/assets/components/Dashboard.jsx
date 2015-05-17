$(document).ready(function(){

  $dasboard_container = $('#dashboard-container')
  if($dasboard_container.length == 0) return;

  React.render(
    <Dashboard />,
    document.getElementById('dashboard-container')
  );
});

var Dashboard = React.createClass({
  getInitialState: function() {
      return {
          start_date: '',
          end_date: '',
          companies: []
      };
  },
  componentDidMount: function() {
      var component = this;
      ShowdownAPI.fetchData().then(function(data) {
        component.setState({
          start_date  : data.start_date,
          end_date    : data.end_date,
          companies   : data.companies 
        });
      });
  },
  render: function(){
    return (
      <div className="large-9 columns">
        <DatePanel start_date={this.state.start_date} end_date={this.state.end_date} />
        <CompaniesPanel companies={this.state.companies}/>
      </div>
    );
  }
})