import React from "react";
import Context from "../Context";

const Hoc = () => (Elem) => {
  return (props) => {
    return (
      <Context.Consumer>
        {(services) => {
          return <Elem {...props} service={services} />;
        }}
      </Context.Consumer>
    );
  };
};

export default Hoc;
