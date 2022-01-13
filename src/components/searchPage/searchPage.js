import React, { Component } from "react";
import Header from "../header/header";
import '../searchPage/searchPage.scss';
import './searchPage.scss';
import { connect } from "react-redux";
import AstroService from "../../services/AstroService";

class SearchPage extends Component {
  service = new AstroService();

  state = {
    current_user: -1,
    data: [],
    id: 0,
    name: "Максим",
    age: 23,
    city: "Подольск",
    percent: 100,
    img: "https://sun9-85.userapi.com/impg/gAkcXZ6LL9gaklbciCOHznPCHXJlGKlWGTZAog/k7HVHSNF11Q.jpg?size=834x1080&quality=96&sign=769962aad009f47c79d6fff98f73b211&type=album",
    socio: 60,
    pers: 80,
    number: 30,
    zz: 70,
    tpers: "Администратор",
    tsocio: "Дон Кихот",
    tnumber: "7",
    tzz: 1
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

  defineZZ(zz) {
    const arrZZ = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
    return arrZZ[zz];
  }

  componentDidMount() {
    const { setDataSearch } = this.props;
    this.setState({
      data: this.service.people,
    })


    // fetch('/pairs/list_for_swipe', { headers: { token: localStorage.token } })
    //   .then((result) => result.json())
    //   .then((result) => {
    //     setDataSearch(result);
    //     this.setState({
    //       data: result,
    //       id: result[0].id,
    //       name: result[0].name,
    //       age: result[0].age,
    //       city: result[0].city,
    //       percent: result[0].percent,
    //       img: result[0].img ? result[0].img : "https://www.film.ru/sites/default/files/persones/_imported/0001052.jpg",
    //       socio: result[0].socio,
    //       pers: result[0].pers,
    //       number: result[0].nr,
    //       zz: result[0].zs,
    //       tpers: result[0].sixteen_pers_type,
    //       tsocio: result[0].socionic_type,
    //       tnumber: result[0].number,
    //       tzz: result[0].zodiac_sign
    //     })
    //     localStorage.setItem('dataSearch', result)
    //   })
  }

  updateUser = (like) => {
    const current_user = this.state.current_user + 1;
    const {id = null, name, age, city, percent, img, socio, pers, 
      number, zz, tpers, tsocio, tnumber, tzz } = this.state.data[current_user];
    this.setState({
      current_user,
      id,
      name,
      age,
      city,
      percent,
      img,
      socio,
      pers,
      number,
      zz,
      tpers,
      tsocio,
      tnumber,
      tzz
    })
    // if (like) {
    //   fetch(`/pairs/like/${this.state.id}?liked=true`, { method: 'PUT', headers: { token: localStorage.token } })
    // } else {
    //   fetch(`/pairs/like/${this.state.id}?liked=false`, { method: 'PUT', headers: { token: localStorage.token } })
    // }
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
            <img className="dislike" alt="dislike" src="/img/hearts/heart2.png" onClick={() => this.updateUser(false)}></img>
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
                {this.defineZZ(this.state.tzz)}
              </div>
            </div>
            <img className="like" src="/img/hearts/heart1.png" alt="like" onClick={() => this.updateUser(true)}></img>
          </div>
        </div>
      </section >
    )
  }
}
const mapStateToProps = ({ dataSearch }) => {
  return {
    dataSearch
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    setDataSearch: (value) => {
      dispatch({ type: "SET_DATA_SEARCH", payload: value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(SearchPage);