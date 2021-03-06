var CompaniesPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  companies: function(){return this.props.companies},
  render: function(){
    var companies = this.props.companies.slice(0,10),
        additionalCompanies = Math.max(this.props.companies.length - 10, 0);
    
    return (
      <div className="companies large-4 columns">
        <h2>Team Standings</h2>
        <div className="panel-box row">
          <div className="large-12 columns">
            {this.props.companies.map(function(company){
              return <CompanyCard key={company.id} company={company} />
            })}
          </div>
        </div>
        <div>
          {'+' + additionalCompanies + ' other teams'}
        </div>
      </div>
    );
  }
})