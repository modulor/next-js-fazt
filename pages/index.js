import Head from "next/head";
import fetch from "isomorphic-fetch";
import Container from "../components/Container";
import Users from "../components/users";

const Index = (props) => {
  return (
    <Container>
      <Head>
        <title>Next JS - Home</title>
      </Head>
      <h1>Index</h1>
      <Users users={props.users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return { users: data };
};

export default Index;
