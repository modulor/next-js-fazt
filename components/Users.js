const Users = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;
