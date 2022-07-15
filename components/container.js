import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
      <hr></hr>
    </div>
  );
};

export default Container;
