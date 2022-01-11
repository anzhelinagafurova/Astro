import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import './enterPage.scss';
import AstroService from "../../services/AstroService";

class EnterPage extends Component {
  service = new AstroService();
  error_codes = ['Пользователь не существует!', 'Неправильный пароль!', 'Номер телефона короче 10 цифр!', 'Произошла ошибка'];

  state = {
    phone: '',
    password: '',
    redirect: false,
    error: false,
    error_code: null
  }

  render() {
    const err = this.state.error_code;
    return this.state.redirect ? <Navigate to="/searchPage" /> : (
      <section className='login-container'>
        <Link to={'/registrationPage'} className='h2-r-text'><h2 className='h2-r-text'>регистрация</h2></Link>
        <h1 className='h1-text'>вход</h1>
        <form className='login-form' onSubmit={this.sendForm}>
          <div className='tel-wrapper'>
            <p className="number-7">+7</p>
            <input type="tel" name="phoneNumber" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
          </div>
          <input type="password" name="password" placeholder='Пароль' required></input>
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
      return 2;
    }
    this.service.sendDataPost(userInfo, '/auth/login')
      .then((result) => result.json())
      .then((result) => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token)
          this.props.setUserInfo(result)
          this.setState({
            redirect: true,
            error: false
          })
        } else {
          if (result.detail === "Wrong password!") {
            this.setState({
              error: true,
              error_code: '1'
            })
          } else if (result.detail === "User doesn't exist!") {
            this.setState({
              error: true,
              error_code: '0'
            })
          }
        }
      })
      .catch(() => {
        this.setState({
          redirect: false,
          error: true
        })
      })
  }
}
const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (message) => {
      dispatch({ type: "SET_INFO", payload: message })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterPage);

