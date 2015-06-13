var TwitterPanel = React.createClass({
  componentDidMount: function() {
    var component = this;
    var js, link;
    link = component.getDOMNode();
    if (!component.initialized) {
      component.initialized = true;
      js = document.createElement("script");
      js.id = "twitter-wjs";
      js.src = "//platform.twitter.com/widgets.js";
      return link.parentNode.appendChild(js);
    }
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