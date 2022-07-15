import Head from "next/head";
import { Fragment } from "react";
import Navigation from "./Navigation";

const Container = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Next JS</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/litera/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <div className="container mb-4">
        <div className="row">
          <div className="col">
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Container;
