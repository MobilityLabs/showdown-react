var UsersPanel = React.createClass({
  visibleUsers: function(){
    var component = this;
    return _.reject(component.props.users, function(user){
      return _.includes(component.props.companyFilters, user.company_id);
    });
  },
  render: function(){
    var component = this,
        users = component.visibleUsers().slice(0,10),
        additionalUsers = Math.max(component.visibleUsers().length - 10, 0);
    
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