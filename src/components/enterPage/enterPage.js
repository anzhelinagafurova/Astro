import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './enterPage.scss';

export default class EnterPage extends Component {

  state = {

  }

  render() {
    return (
      <section className='login-container'>
        <Link to={'/registrationPage'} className='h2-r-text'><h2 className='h2-r-text'>регистрация</h2></Link>
        <h1 className='h1-text'>вход</h1>
        <form action="/login" method="post" className='login-form'>
          <div className='tel-wrapper'>
            <p className="number-7">+7</p>
            <input type="tel" name="phone-number" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
          </div>
          <input type="password" name="password" placeholder='Пароль' required></input>
          <Link to="/dialogsPage" type="submit" className='login-button'><i className="fas fa-play"></i></Link>
        </form>
      </section>
    )
  }
}

