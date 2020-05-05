import React from "react";
import MyContext from "../context";

const WithService = () => (Wrapper) => {
  return (props) => {
    return (
    <MyContext.Consumer>
      {(Service)=>{return <Wrapper {...props} service={Service} />}}
    </MyContext.Consumer>
    )
  };
};

export default WithService;
