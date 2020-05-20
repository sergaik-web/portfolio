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
              РАЗРАБОТКА И ИНТЕГРАЦИЯ ПРОЕКТОВ РАЗЛИЧНОЙ СЛОЖНОСТИ ДЛЯ МАЛОГО И
              СРЕДНЕГО БИЗНЕСА.
            </li>
            <li>СОВРЕМЕННАЯ ТЕХНИКА ВЕРСТКИ ВЕБ-САЙТА</li>
            <li>РАЗРАБОТКА САЙТА-ВИЗИТКИ (LANDING PAGE).</li>
            <li>РАЗРАБОТКА ДОПОЛНИТЕЛЬНЫХ МОДУЛЕЙ НА JS ДЛЯ ВАШЕГО САЙТА.</li>
            <li>
              РАБОТА С РАЗЛИЧНЫМИ API (ГУГЛКАРТЫ, ЯНДЕКС КАРТЫ, ПЕРВОДЧИКИ И
              Т.Д.)
            </li>
            <li>
              РАЗРАБОТКА КАЧЕСТВЕННЫХ И БЫСТРОДЕЙСТВУЮЩИХ SPA НА ФРЕЙМВОРКЕ
              "REACT"
            </li>
            <li>ВСЕ РАБОТЫ СОЗДАЮТСЯ В СООТВЕТСТВИИ С ПАРАДИГМОЙ ООП</li>
            <li>
              РАБОТА В КОМАНДЕ С ДРУГИМИ ПРОГРАММИСТАМИ (БОЛЕЕ ПОДРОБНО НА
              СТРАНИЦЕ "НАВЫКИ")
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
