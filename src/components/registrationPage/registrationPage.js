import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import '../enterPage/enterPage.scss';
import './registrationPage.scss';
import AstroService from "../../services/AstroService";

export default class RegistrationPage extends Component {
  service = new AstroService();
  error_codes = ['Данный пользователь уже зарегистрирован в системе!', 'Введенные пароли не совпадают!', 'Номер телефона короче 10 цифр!', 'Произошла ошибка'];

  state = {
    phone: '',
    password: '',
    password2: '',
    redirect: false,
    error: false,
    error_code: null
  }

  render() {
    const err = this.state.error_code;
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
        {this.state.error ? <span className="error-msg">{err ? this.error_codes[Number(err)] : this.error_codes[3]}</span> : null}
      </section>
    )
  }
  sendForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let userInfo = {
      phone: form.phoneNumber.value,
      password: form.password.value
    };

    if (userInfo.phone.length !== 10) {
      this.setState({
        error: true,
        error_code: '2'
      })
      return;
    }
    else if (form.password.value !== form.password2.value) {
      this.setState({
        error: true,
        error_code: '1'
      })
      return;
    }
    else this.setState({
      error: false
    })
    this.service.sendDataPost(userInfo, '/auth/signup')
      .then((result) => result.json())
      .then((result) => {
        if (result.detail === "User with this phone already exists!") {
          this.setState({
            error: true,
            error_code: '0'
          })}

        else {
          localStorage.setItem('token', result.access_token)
          this.setState({
            redirect: true
          })
        }
      })

      .catch(() => {
        this.setState({
          error: true
        })
      })
  }
}


