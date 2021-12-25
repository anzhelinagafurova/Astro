import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import '../enterPage/enterPage.scss';
import './registrationPage.scss';
import AstroService from "../../services/AstroService";
import { connect } from 'react-redux';

class RegistrationPage extends Component {
  service = new AstroService();

  state = {
    phone: '',
    password: '',
    redirect: false,
    error: false
  }

  render() {
    
    return this.state.redirect ? <Navigate to="/editPage"/> : (
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
        {this.state.error ? <span className="error-msg">Данный пользователь уже зарегистрирован в системе!</span>: null}
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

    this.service.sendDataPost(userInfo, '/auth/signup')
    .then((result) => result.json())
    .then((result) => {
      setToken(result.access_token);
      this.setState({
        redirect: true, 
        error: false
      })
    })
    .catch(() => {
      this.setState({
        error: true
      })
    })
  }
}
  const mapStateToProps = ({ myUserName, myWelcomeMessage, myProfilePhoto }) => {
    return {
      myUserName, myWelcomeMessage, myProfilePhoto
    }
  }

const mapDispatchProps = (dispatch) => {
  return {
    setPhone: (e) => {
      const newPhone = e.target.value;
      dispatch({ type: "SET_MY_PASSWORD", payload: newPhone })
    },
    setPassword: (e) => {
      const newPassword = e.target.value;
      dispatch({ type: "SET_MY_PHONE", payload: newPassword })
    },
    setId: (id) => {
      dispatch({ type: "SET_MY_ID", payload: id })
    },
    setProlifePhoto: (photo) => {
      dispatch({ type: "SET_MY_PROFILE_PHOTO", payload: photo })
    },
    setUserName: (name) => {
      dispatch({ type: "SET_MY_USER_NAME", payload: name })
    },
    setWelcomeMessage: (message) => {
      dispatch({ type: "SET_MY_WELCOME_MESSAGE", payload: message })
    },
    setToken: (value) => {
      dispatch({ type: "SET_TOKEN", payload: value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(RegistrationPage);
