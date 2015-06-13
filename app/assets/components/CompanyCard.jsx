var CompanyCard = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function(){
    var company = this.props.company;
    return (
      <div className="company-card row">
        <div className="inner">
          <div className="intro">
            <a className="url" href={company.url}>
              <img className="logo" src={company.branding_logo_url} />
            </a>
            <h3>{company.name}</h3>
            <div className="steps">{company.steps}</div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
})