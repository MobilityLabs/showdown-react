var UsersPanel = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function(){
    var users = this.props.users;
    return (
      <div className="users-panel">
        {users.map(function(user){
          return <UserCard key={user.lastname} user={user} />
        })}
      </div>
    );
  }
})