var UsersPanel = React.createClass({
  visibleUsers: function(){
    var component = this;
    return _.filter(component.props.users, function(user){
      if(component.props.companyFilters.length > 0){
        return _.includes(component.props.companyFilters, user.company_id);
      } else {
        return true;
      }
    });
  },
  render: function(){
    var users = this.visibleUsers().slice(0,10),
        additionalUsers = Math.max(this.props.users.length - users.length - 10, 0);
    
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
          +{additionalUsers} hidden competitors
        </div>
      </div>
    );
  }
})