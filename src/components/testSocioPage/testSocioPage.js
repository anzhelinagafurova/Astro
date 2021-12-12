import React, { Component } from "react";
import Header from '../header/header';
import '../testSocioPage/testSocioPage.scss';
import TestSocioResultPage from "../testSocioResultPage/testSocioResultPage";

export default class TestSocioPage extends Component {
  state = {
    answers: [],
    page: this.props.page
  }
  answers = []

  renderOneSection = (number, text, no, yes) => {
    const answers = this.answers;

    return (
      <section className="question-block">
        <div className="text">
          {text}
        </div>
        <div className="answer-container">
          <button className={answers[number] === no ? 'no-checked' : 'no'} onClick={() => {
            answers[number] = no;
            this.setState({ answers: answers })
          }}>
            Нет</button>
          <button className={answers[number] === yes ? 'yes-checked' : 'yes'} onClick={() => {
            answers[number] = yes
            this.setState({ answers: answers })
          }}>
            Да</button>
        </div>
      </section>
    )
  }

  sayResult = () => {
    if (this.answers.length === 4) {
      this.setState({ page: "Result page" })

    }
    else {
      alert('Вы ответили не на все вопросы')
    }
  }


  render() {
    return (
      <>
        {this.state.page === "Result page" ? <TestSocioResultPage type={this.state.answers} /> :
          <>
            <Header linkTo="/editPage" linkType="arrow" />
            <div className="test-socio-page">
              {this.renderOneSection(0, "1. Вы больше ориентирвоаны на окружающий мир предметов и людей, чем на собственные мысли и переживания.", "I", "E")}
              {this.renderOneSection(1, "2. Вам более свойственно находиться в моменте и выполнять активные и уверенные действия, нежели пребывать в размышлениях и анализе.", "N", "S")}
              {this.renderOneSection(2, "3. Вы чаще полагаетесь при принятии решений на собственные чувства, эмоции, понятия о морали, чем на холодный анализ, непредвзятость и объективный подход.", "T", "F")}
              {this.renderOneSection(3, "4. Вы предпочитаете действовать по намеченному плану, независимо от ситуации. Необходимость менять планы на ходу вас напрягает.", "P", "J")}
              <button onClick={this.sayResult} className="button-result">
                Узнать результат
              </button>
            </div>
          </>
        }
      </>
    )
  }
}