var CompanyCard = React.createClass({
  getInitialState: function(){
    return {selected: false}
  },
  updateFilter: function(){
    this.setState({selected: !this.state.selected});
  },
  render: function(){
    var company = this.props.company;
    var cx = React.addons.classSet;
    var classes = cx({
      'company': true,
      'card': true,
      'row': true,
      'selected': this.state.selected
    });
    return (
      <div className={classes} onClick={this.updateFilter}>
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