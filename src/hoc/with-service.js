import React from "react";

const WithService = () => (Wrapper) => {
  return (props) => {
    return (service) => {
      <Wrapper {...props} service={service} />;
    };
  };
};

export default WithService;
