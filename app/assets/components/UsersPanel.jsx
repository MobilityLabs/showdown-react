var UsersPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function(){
    var users = this.props.users.slice(0,10),
        additionalUsers = Math.max(this.props.users.length - 10, 0);
    
    return (
      <div className="users medium-4 columns">
        <h2>Individual Standing</h2>
        <div className="panel-box row">
          <div className="large-12 columns">
            {users.map(function(user){
              return <UserCard key={user.lastname} user={user} />
            })}
          </div>
        </div>
        <div>
          {'+' + additionalUsers + ' others' }
        </div>
      </div>
    );
  }
})