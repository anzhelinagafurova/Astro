import React, { Component } from "react";
import Header from '../header/header';
import "../testSocioResultPage/testSocioResultPage.scss"

export default class TestSocioResultPage extends Component {

  state = {
    upd: 0
  }

  type = this.props.type.join("");
  typeLink = "";
  typeName = "";

  defineTypeNameAndLink = () => {
    switch (this.type) {
      case "ENTP": { this.typeName = 'Дон Кихот (ИЛЭ)'; this.typeLink = "https://socioniks.net/article/?id=40" };
      case "ISFP": { this.typeName = 'Дюма (СЭИ)'; this.typeLink = "https://socioniks.net/article/?id=43" };
      case "ESFJ": { this.typeName = 'Гюго (ЭСЭ)'; this.typeLink = "https://socioniks.net/article/?id=46" };
      case "INTJ": { this.typeName = 'Робеспьер (ЛИИ)'; this.typeLink = "https://socioniks.net/article/?id=49" };

      case "ENFJ": { this.typeName = 'Гамлет (ЭИЭ)'; this.typeLink = "https://socioniks.net/article/?id=52" };
      case "ISTJ": { this.typeName = 'Максим Горький (ЛСИ)'; this.typeLink = "https://socioniks.net/article/?id=55" };
      case "ESTP": { this.typeName = 'Жуков (СЛЭ)'; this.typeLink = "https://socioniks.net/article/?id=58" };
      case "INFP": { this.typeName = 'Есенин (ИЭИ)'; this.typeLink = "https://socioniks.net/article/?id=61" };

      case "ESFP": { this.typeName = 'Наполеон (СЭЭ)'; this.typeLink = "https://socioniks.net/article/?id=64" };
      case "INTP": { this.typeName = 'Бальзак (ИЛИ)'; this.typeLink = "https://socioniks.net/article/?id=67" };
      case "ENTJ": { this.typeName = 'Джек Лондон (ЛИЭ)'; this.typeLink = "https://socioniks.net/article/?id=70" };
      case "ISFJ": { this.typeName = 'Драйзер (ЭСИ)'; this.typeLink = "https://socioniks.net/article/?id=73" };

      case "ESTJ": { this.typeName = 'Штирлиц (ЛСЭ)'; this.typeLink = "https://socioniks.net/article/?id=76" };
      case "INFJ": { this.typeName = 'Достоевский (ЭИИ)'; this.typeLink = "https://socioniks.net/article/?id=79" };
      case "ENFP": { this.typeName = 'Гексли (ИЭЭ)'; this.typeLink = "https://socioniks.net/article/?id=82" };
      case "ISTP": { this.typeName = 'Габен (СЛИ)'; this.typeLink = "https://socioniks.net/article/?id=85" };
    }
  }

  render() {
    this.defineTypeNameAndLink();
    console.log(this.type)
    return (
      <>
        <Header linkTo="/editPage" linkType="arrow" />
        <section className='test-socio-result'>
          <div className='block'>
            <div className="text">Ваш тип:</div>
            <img src={"/img/socio/" + this.type + ".png"} className="img" />
            <div className="type-name">{this.typeName}</div>
            <a href={this.typeLink} className="read-more"><p>Читать описание</p></a>
          </div>
        </section>
      </>
    )
  }
}