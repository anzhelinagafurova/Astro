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
    if (this.type === "ENTP") { this.typeName = 'Дон Кихот (ИЛЭ)'; this.typeLink = "https://socioniks.net/article/?id=40" };
    if (this.type === "ISFP") { this.typeName = 'Дюма (СЭИ)'; this.typeLink = "https://socioniks.net/article/?id=43" };
    if (this.type === "ESFJ") { this.typeName = 'Гюго (ЭСЭ)'; this.typeLink = "https://socioniks.net/article/?id=46" };
    if (this.type === "INTJ") { this.typeName = 'Робеспьер (ЛИИ)'; this.typeLink = "https://socioniks.net/article/?id=49" };

    if (this.type === "ENFJ") { this.typeName = 'Гамлет (ЭИЭ)'; this.typeLink = "https://socioniks.net/article/?id=52" };
    if (this.type === "ISTJ") { this.typeName = 'Максим Горький (ЛСИ)'; this.typeLink = "https://socioniks.net/article/?id=55" };
    if (this.type === "ESTP") { this.typeName = 'Жуков (СЛЭ)'; this.typeLink = "https://socioniks.net/article/?id=58" };
    if (this.type === "INFP") { this.typeName = 'Есенин (ИЭИ)'; this.typeLink = "https://socioniks.net/article/?id=61" };

    if (this.type === "ESFP") { this.typeName = 'Наполеон (СЭЭ)'; this.typeLink = "https://socioniks.net/article/?id=64" };
    if (this.type === "INTP") { this.typeName = 'Бальзак (ИЛИ)'; this.typeLink = "https://socioniks.net/article/?id=67" };
    if (this.type === "ENTJ") { this.typeName = 'Джек Лондон (ЛИЭ)'; this.typeLink = "https://socioniks.net/article/?id=70" };
    if (this.type === "ISFJ") { this.typeName = 'Драйзер (ЭСИ)'; this.typeLink = "https://socioniks.net/article/?id=73" };

    if (this.type === "ESTJ") { this.typeName = 'Штирлиц (ЛСЭ)'; this.typeLink = "https://socioniks.net/article/?id=76" };
    if (this.type === "INFJ") { this.typeName = 'Достоевский (ЭИИ)'; this.typeLink = "https://socioniks.net/article/?id=79" };
    if (this.type === "ENFP") { this.typeName = 'Гексли (ИЭЭ)'; this.typeLink = "https://socioniks.net/article/?id=82" };
    if (this.type === "ISTP") { this.typeName = 'Габен (СЛИ)'; this.typeLink = "https://socioniks.net/article/?id=85" };
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