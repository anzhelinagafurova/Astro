import React, { Component } from "react";
import Header from '../header/header';
import "../test16PersResultPage/test16PersResultPage.scss"

export default class Test16PersResultPage extends Component {

  state = {
    upd: 0
  }

  type = this.props.type.join("");
  typeLink = "";

  defineTypeNameAndLink = () => {
    this.typeLink = `https://www.16personalities.com/ru/lichnost-${this.type}`
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
            <img src={"/img/16pers/" + this.type + ".png"} alt="type" className="img" />
            <a href={this.typeLink} className="read-more"><p>Читать описание</p></a>
          </div>
        </section>
      </>
    )
  }
}