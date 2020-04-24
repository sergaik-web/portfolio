import React from "react";
import "./style.css";

export default function MainPanel() {
  return (
    <>
      <header className={"header"}>
        <br />
        <p>
          <h2>FRONTEND JavaScript РАЗРАБОТЧИК</h2>
        </p>
      </header>

      <section className={"section"}>
        <div>
          <h4>Привет! Меня зовут Сергей, я - </h4>
          <br />
          <p>Я занимаюсь создание высококачественных FrontEnd продуктов</p>
        </div>
      </section>

      <footer className={"footer"}>
        <p>Footer</p>
      </footer>
    </>
  );
}
