var CompaniesPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  companies: function(){return this.props.companies},
  render: function(){
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
      </div>
    );
  }
})