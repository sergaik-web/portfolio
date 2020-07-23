import React, { useEffect } from "react";
import "./scroll.scss";
import { connect } from "react-redux";
import { scrollPage } from "../../Actions/actions";
import bgAnimation from "../../scripts";

const Scroll = (props) => {
  let { scrollValue } = props;
  let scrollClassName;
  scrollValue > 0
    ? (scrollClassName = "scroll active")
    : (scrollClassName = "scroll");
  console.log(scrollClassName);

  const clickToScroll = () => {
    props.scrollPage(0);
    bgAnimation(0);
  };

  useEffect(() => {
    document.title = `вы промотали страницу на ${scrollValue} пикселей`;
  });

  return (
    <div className={scrollClassName} onClick={clickToScroll}>
      <i className="fas fa-angle-double-down"></i>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    scrollValue: state.scroll,
  };
};

const mapDispatchToProps = { scrollPage };

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);
