import React from "react";
import "./style.css";
import img1 from "../../img/display.svg";
import img2 from "../../img/treasure_chest.svg";
import img3 from "../../img/cloud.svg";
import img4 from "../../img/buck.svg";
import WithService from "../../../../hoc";

const MenuListItem = (myService) => {
  myService.service.getMenuItem().then((e) => console.log(e));

  const dataItemLeftPanel = [
    { label: "Навыки", ico: img1, popup: "Soft/Hard skills" },
    { label: "Проекты", ico: img2, popup: "Portfolio" },
    { label: "GitHub", ico: img3, popup: "My Repositorys" },
    { label: "Цены", ico: img4, popup: "Прайс оказываемых услуг" },
  ];

  return dataItemLeftPanel.map((item, index) => {
    return (
      <li key={index} className={"leftMenuItem"}>
        <a className={"imgPointer"} href={"#"}>
          <img
            className={"itemImage"}
            src={item.ico}
            width={40}
            height={40}
            alt={item.label}
          />

          <p className={"leftMenuItemLabel"}>{item.label}</p>
        </a>
      </li>
    );
  });
};

export default WithService()(MenuListItem);
