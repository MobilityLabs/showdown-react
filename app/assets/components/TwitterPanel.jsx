var Dashboard = React.createClass({
  componentDidMount: function() {
    twttr.ready(function (twttr) {
      twttr.widgets.load();
    });
  },
  render: function(){
    return (
      <div className="twitter large-4 columns">
        <h2><i className="fa fa-twitter"></i> Trash Talk</h2>
        <a className="twitter-timeline" href="https://twitter.com/hashtag/dctech" dataWidgetId="600035238513901568">
          dctech Tweets
        </a>
      </div>
    );
  }
})