import React from "react";
import img from "../img/logo.svg";
import "./style.css";

export default function Logo() {
  return (
    <a href={"#href"} className={"logo"}>
      <img id={"imgLogo"} src={img} alt={"logo"} width={50} height={50} />
      <h2>ССС</h2>
    </a>
  );
}
