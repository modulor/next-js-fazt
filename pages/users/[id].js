import Container from "../../components/Container";

const UserProfile = ({ user }) => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <img src={user.avatar} className="img-fluid rounded-circle" />
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>{user.email}</p>
        </div>
      </div>
    </Container>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const JSONResponse = await response.json();

  return { user: JSONResponse.data };
};

export default UserProfile;
