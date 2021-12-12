import React, { Component } from "react";
import Header from "../header/header";
import '../searchPage/searchPage.scss';
import './searchPage.scss';

export default class SearchPage extends Component {

  state = {
    name: "Курт",
    age: 21,
    city: "Москва",
    percent: 21,
    img: "https://www.film.ru/sites/default/files/persones/_imported/0001052.jpg",
    socio: 60,
    pers: 80,
    number: 30,
    zz: 99,
    tpers: "Администратор",
    tsocio: "Максим Горький",
    tnumber: "7",
    tzz: "♈"
  }

  detectColor(number) {
    if (number >= 80) {
      return "#66C545";
    }
    else if (number >= 40) {
      return "#C6C03C";
    }
    else return "#B44A33";
  }

  render() {
    return (
      <section className="search">
        <Header linkType="bars" />
        <div className="background" style={{ backgroundImage: `url(${this.state.img})` }}>
          <div className="search-header">
            <div className="left">
              <p className="name">{this.state.name}</p>&nbsp;
              <p className="age">{this.state.age}</p>,&nbsp;
              <p className="city">{this.state.city}</p>
            </div>
            <div className="right">
              <p>Совместимость:</p>&nbsp;
              <p className="percent">{this.state.percent}%</p>
            </div>
          </div>
          <div className="search-footer">
            <img className="dislike" src="/img/hearts/heart2.png"></img>
            <div className="tags">
              <div className="block" style={{ backgroundColor: `${this.detectColor(this.state.socio)}` }}>
                {this.state.tsocio}
              </div>
              <div className="block" style={{ backgroundColor: `${this.detectColor(this.state.number)}` }}>
                {this.state.tnumber}
              </div>
              <div className="block" style={{ backgroundColor: `${this.detectColor(this.state.pers)}` }}>
                {this.state.tpers}
              </div>
              <div className="block" style={{ backgroundColor: `${this.detectColor(this.state.zz)}` }}>
                {this.state.tzz}
              </div>
            </div>
            <img className="like" src="/img/hearts/heart1.png"></img>
          </div>
        </div>
      </section >
    )
  }
}