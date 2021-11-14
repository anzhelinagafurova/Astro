import React, { Component } from "react";
import Header from '../header/header';
import '../test16PersPage/test16PersPage.scss';

export default class Test16PersPage extends Component {
  answers = []

  renderOneSection = (number, text, no, yes) => {
    return (
      <section className="question-block">
        <div className="text">
          {text}
        </div>
        <div className="answer-container">
          <button className={this.answers[number] ? 'no-checked' : 'no'} onClick={() => {
            this.answers[number] = no;
            console.log(this.answers)
          }}>
            Нет</button>
          <button className='yes' onClick={() => {
            this.answers[number] = yes
            console.log(this.answers)
          }}>
            Да</button>
        </div>
      </section>
    )
  }

  sayResult = () => {
    if (this.answers.length === 5) {
      console.log('отправлено')
    }
    else {
      alert('Вы ответили не на все вопросы')
    }
  }

  render() {
    return (
      <>
        <Header linkTo="/editPage" linkType="arrow" />
        <div className="test-16pers-page">
          {this.renderOneSection(0, "text0", "N0", "Y")}
          {this.renderOneSection(1, "text1", "N1", "Y")}
          {this.renderOneSection(2, "text2", "N2", "Y")}
          {this.renderOneSection(3, "text3", "N3", "Y")}
          {this.renderOneSection(4, "text4", "N4", "Y")}
          <button onClick={this.sayResult}>
            Узнать результат
          </button>
        </div>
      </>)
  }
}