import Head from "next/head";
import fetch from "isomorphic-fetch";
import Container from "../components/container";

const Index = (props) => {
  console.log("props::::::", props);

  return (
    <Container>
      <Head>
        <title>Next JS - Home</title>
      </Head>
      <h1>Index</h1>
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return { users: data };
};

export default Index;
