var TwitterPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function(){
    return (
      <div className="twitter large-4 columns">
        <h2><i className="fa fa-twitter"></i> Trash Talk</h2>
        <a className="twitter-timeline" href="https://twitter.com/hashtag/dctech" data-widget-id="600035238513901568">dctech Tweets</a>
      </div>
    );
  }
})


















