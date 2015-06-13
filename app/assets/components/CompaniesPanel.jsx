var CompaniesPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  companies: function(){return this.props.companies},
  render: function(){
    return (
      <div className="large-4 medium-6 small-12 columns">
        <h2>Team Standings</h2>
        {this.props.companies.map(function(company){
          return <CompanyCard key={company.id} company={company} />
        })}
      </div>
    );
  }
})