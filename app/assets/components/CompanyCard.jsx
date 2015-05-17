var CompanyCard = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function(){
    var company = this.props.company;
    return (
      <div className="company-card large-6 small-12 columns">
        <div className="inner">
          <div className="intro">
            <img className="logo" src={company.branding_logo_url} />
            <a className="url" href={company.url}>
              <h2>{company.name}</h2>
            </a>
            <div className="steps">Steps: {company.steps}</div>
            <a className="tweet-button" href="https://twitter.com/intent/tweet">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <UsersPanel users={company.users} />
        </div>
      </div>
    );
  }
})