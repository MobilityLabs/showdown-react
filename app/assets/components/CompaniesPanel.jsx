var CompaniesPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  companies: function(){return this.props.companies},
  render: function(){
    return (
      <div className="row">
        {this.props.companies.map(function(company){
          return <CompanyCard key={company.id} company={company} />
        })}
      </div>
    );
  }
})