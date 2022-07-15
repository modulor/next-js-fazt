const Users = (props) => {
  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <li key={user.id} className="list-group-item list-group-item-action">
          <div className="row">
            <div className="col-2">
              <img src={user.avatar} className="img-fluid rounded-circle" />
            </div>
            <div className="col-9">
              <h4>
                {user.first_name} {user.last_name}
              </h4>
              <p className="mb-0">{user.email}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
