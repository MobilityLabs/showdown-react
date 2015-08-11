var UserCard = React.createClass({
  render: function(){
    var user = this.props.user;
    return (
      <div className="user card row">
        <img className="photo" src={user.photo_url} />
        <div className="name">{user.firstname} {user.lastname} {user.company_id}</div>
        <div className="steps">{user.steps}</div>
      </div>
    );
  }
})