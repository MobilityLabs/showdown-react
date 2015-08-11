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
          companies: [],
          users: [],
          companyFilters: []
      };
  },
  getUsers: function(companies) {
    var component = this;
    var users = [];
    companies.forEach(function(company){
      company.users.forEach(function(user){
        user.company_name = company.name;
        user.company_id = company.id;
        user.company_logo = company.branding_logo_url
        users.push(user);
      });
    });
    function compare(a,b) {
      if (a.steps > b.steps)
        return -1;
      if (a.steps < b.steps)
        return 1;
      return 0;
    }

    users.sort(compare);
    return users;
  },
  updateCompanyFilters: function(companyId, action){
    var companyFilters = action === 'remove' ? _.without(this.state.companyFilters, companyId) : this.state.companyFilters.concat(companyId);
    this.setState({
      companyFilters: companyFilters
    });
  },
  componentDidMount: function() {
    var component = this;
    ShowdownAPI.fetchData().then(function(data) {
      component.setState({
        start_date  : data.start_date,
        end_date    : data.end_date,
        companies   : data.companies,
        users       : component.getUsers(data.companies)
      });
    });
  },
  componentDidUpdate: function(){
  },
  render: function(){
    return (
      <div className="large-12 columns">
        <DatePanel start_date={this.state.start_date} end_date={this.state.end_date} />
        <div className="row">
          <CompaniesPanel companies={this.state.companies} companyFilters={this.state.companyFilters} updateCompanyFilters={this.updateCompanyFilters}/>
          <UsersPanel users={this.state.users} companyFilters={this.state.companyFilters}/>
          <TwitterPanel />
        </div>
      </div>
    );
  }
})