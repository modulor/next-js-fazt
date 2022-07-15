import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Next JS!</title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
