var DatePanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  start_date: function(){return this.props.start_date},
  end_date: function(){return this.props.end_date},
  render: function(){
    return (
      <div className="row">
        <span>{this.start_date()}</span>
        <span>{this.end_date()}</span>
      </div>
    );
  }
})