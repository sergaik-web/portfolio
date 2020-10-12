import React, {useEffect, useState} from "react";
import "./scroll.scss";
import { connect } from "react-redux";
import { scrollPage } from "../../Actions/actions";
import bgAnimation from "../../scripts";

const Scroll = (props) => {
  let { scrollValue } = props;
  const [scrollClassName, setScrollClassName] = useState('scroll');

  useEffect(()=>{
    if (scrollValue === 8000) {
      setScrollClassName('scroll active endPage')
    } else {
      scrollValue > 0 ? setScrollClassName('scroll active') : setScrollClassName('scroll')
    }
  }, [scrollValue]);

  useEffect(() => {
    document.title = `вы промотали страницу на ${scrollValue} пикселей`;
  });

  console.log(scrollClassName);

  const clickToScroll = () => {
    props.scrollPage(0);
    bgAnimation(0);
  };

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
