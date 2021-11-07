import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../enterPage/enterPage.scss';
import './registrationPage.scss';

export default class EnterPage extends Component {

  state = {

  }

  render() {
    return (
      <section className='login-container'>
        <Link to={'/'} className='h2-text'><h2 className='h2-text'>вход</h2></Link>
        <h1 className='h1-text'>регистрация</h1>
        <form action="/login" method="post" className='login-form'>
          <div className='tel-wrapper'>
            <p className="number-7">+7</p>
            <input type="tel" name="phone-number" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
          </div>
          <input type="password" name="password" placeholder='Придумайте пароль' required></input>
          <input type="password" name="password" placeholder='Повторите пароль' required></input>
          <Link to={'/editPage'} type="submit" className='login-button'><i className="fas fa-play"></i></Link>
        </form>
      </section>
    )
  }
}

