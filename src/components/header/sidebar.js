import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import './header.scss';

const props = (props) => (
  <Menu className="menu">
    <div className="block-1">
      {props.photo ? <img src={props.photo} alt="Profile icon" className="profile-photo"></img> :
        <div className="upload-background">{props.letter}</div>}
      <div className="info">
        <p className="big">{props.name}, {props.age}</p>
        <p className="small">{props.city}</p>
      </div>
    </div>
    <hr />
    <div className="link">
      <Link to="/dialogsPage">Сообщения</Link>
    </div>
    <hr />
    <div className="link">
      <Link to="/editPage">Профиль</Link>
    </div>
    <hr />
    <div className="search-div">
      <Link to="/searchPage" className="search"><p>Поиск судьбы</p></Link>
    </div>
    <div className="exit">
      <Link to="/">Выход</Link>
    </div>
  </Menu>
);

export default props;