import React from "react";
import "./scroll.scss";
import { connect } from "react-redux";

const Scroll = (props) => {
  let { scrollValue } = props;
  let scrollClassName;
  scrollValue > 0
    ? (scrollClassName = "scroll active")
    : (scrollClassName = "scroll");
  console.log(scrollClassName);
  return (
    <div className={scrollClassName}>
      <i className="fas fa-angle-double-down"></i>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    scrollValue: state.scroll,
  };
};

export default connect(mapStateToProps)(Scroll);
