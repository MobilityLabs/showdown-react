var DatePanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getInitialState: function(){
    return {
      start_date: this.props.start_date,
      end_date: this.props.end_date
    }
  },
  componentDidUpdate: function(){
    this.setState({
      start_date: this.props.start_date,
      end_date: this.props.end_date
    });
  },
  startDateString: function(){
    var startDate,
        component = this;
    if (component.state.start_date){
      startDate =  moment.unix(component.state.start_date);
      return startDate.format('MMMM Do YYYY');
    }
  },
  endDateString: function(){
    var endDate,
        component = this;
    if (component.state.end_date){
      endDate =  moment.unix(component.state.end_date);
      return endDate.format('MMMM Do YYYY');
    }
  },
  render: function(){
    return (
      <div className="row">
        <span>{this.startDateString()}</span>
        <span>{this.endDateString()}</span>
      </div>
    );
  }
})