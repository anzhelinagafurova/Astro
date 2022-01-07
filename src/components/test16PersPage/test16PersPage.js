import React, { Component } from "react";
import Header from '../header/header';
import '../test16PersPage/test16PersPage.scss';
import Test16PersResultPage from "../test16PersResultPage/test16PersResultPage";

export default class Test16PersPage extends Component {
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
      fetch(`/users/personalit_result?name_type=${this.answers.join("")}`, { method: 'PUT', headers: { token: localStorage.token } })
      this.setState({ page: "Result page" })

    }
    else {
      alert('Вы ответили не на все вопросы')
    }
  }

  render() {
    return (
      <>
        {this.state.page === "Result page" ? <Test16PersResultPage type={this.state.answers} /> :
          <>
            <Header linkTo="/editPage" linkType="arrow" />
            <div className="test-16pers-page" id="top">
              {this.renderOneSection(0, "1. Предпочитаю решать проблемы не в одиночку за закрытыми дверьми, а путём обсуждения.", "I", "E")}
              {this.renderOneSection(1, "2. Я опираюсь на внешние, уже известные данные и полученные опыт, вместо того, чтобы ориентироватсья на предчувствия или общую информацию.", "N", "S")}
              {this.renderOneSection(2, "3. Предпочитаю следовать голосу разума, вместо того, чтобы полагаться на природу человеческих чувств.", "F", "T")}
              {this.renderOneSection(3, "4. Воспринимаю информацию по одному каналу, а не по нескольким. Также лучше спланирую и продумаю все заранее, чем буду наверстывать в сжатые сроки.", "P", "J")}
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