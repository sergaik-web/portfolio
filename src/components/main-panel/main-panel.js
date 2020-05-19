import React from "react";
import { connect } from "react-redux";
import "./main-panel.scss";
import { printText } from "../../actions/actions";
import PrintText from "./scripts/pushText";

class MainPanel extends React.Component {
  componentDidMount() {
    setTimeout(() => PrintText(this.props.printText), 2000);
  }

  render() {
    return (
      <>
        <header className={"header"}>
          <br />
          <h2>
            {this.props.text}
            <span id={"cursor"}>|</span>
          </h2>
        </header>

        <section className={"section"}>
          <ul>
            <li>
              Разрабатываю и интегрирую проекты различной сложности для малого и
              среднего бизнеса.
            </li>
            <li>Создание интернет-магазина на CMS OpenCart.</li>
            <li>Разработка сайта-визитки (landing page).</li>
            <li>Разработка дополнительных модулей на JS для вашего сайта.</li>
            <li>
              Работа с различными API (гуглКарты, яндекс Карты, перводчики и
              т.д.)
            </li>
            <li>
              Разработка качественных и быстродействующих SPA на фремворке React
            </li>
            <li>Все работы создаются в соответствии с парадигмой ООП</li>
            <li>
              Работа в команте с другими программистами (Более подробно на
              странице "Навыки")
            </li>
          </ul>
        </section>

        <footer className={"footer"}>
          <p>Footer</p>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = { printText };

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
