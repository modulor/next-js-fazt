import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Next JS</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sketchy/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col">
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
