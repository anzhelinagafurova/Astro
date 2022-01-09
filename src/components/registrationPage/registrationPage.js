import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import '../enterPage/enterPage.scss';
import './registrationPage.scss';
import AstroService from "../../services/AstroService";

export default class RegistrationPage extends Component {
  service = new AstroService();

  state = {
    phone: '',
    password: '',
    password2: '',
    redirect: false,
    error: false,
    error_code: -1
  }

  render() {

    return this.state.redirect ? <Navigate to="/editPage" /> : (
      <section className='login-container'>
        <Link to={'/'} className='h2-text'><h2 className='h2-text'>вход</h2></Link>
        <h1 className='h1-text'>регистрация</h1>
        <form className='login-form' onSubmit={this.sendForm}>
          <div className='tel-wrapper'>
            <p className="number-7">+7</p>
            <input type="tel" name="phoneNumber" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
          </div>
          <input type="password" name="password" placeholder='Придумайте пароль' required></input>
          <input type="password" name="password2" placeholder='Повторите пароль' required></input>
          <button type="submit" className='login-button'><i className="fas fa-play"></i></button>
        </form>
        {this.state.error && this.state.error_code === 0 ? <span className="error-msg">Данный пользователь уже зарегистрирован в системе!</span> : null}
        {this.state.error && this.state.error_code === 1 ? <span className="error-msg">Введенные пароли не совпадают!</span> : null}
        {this.state.error && this.state.error_code === 2 ? <span className="error-msg">Номер телефона короче 10 цифр!</span> : null}
      </section>
    )
  }
  sendForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { setToken } = this.props;
    let userInfo = {
      phone: form.phoneNumber.value,
      password: form.password.value
    };
    if (userInfo.phone.length !== 10) {
      this.setState({
        error: true,
        error_code: 2
      })
      return 2;
    }
    if (form.password.value !== form.password2.value) {
      this.setState({
        error: true,
        error_code: 1
      })
      return 1;
    }
    this.setState({
      error: false,
      error_code: -1
    })
    this.service.sendDataPost(userInfo, '/auth/signup')
      .then((result) => result.json())
      .then((result) => {
        setToken(result.access_token);
        this.setState({
          redirect: true,
          error: false
        })
        localStorage.setItem('token', result.access_token)
      })
      .catch(() => {
        this.setState({
          error: true,
          error_code: 0
        })
      })
  }
}


