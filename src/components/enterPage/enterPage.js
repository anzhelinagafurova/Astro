import React, { Component } from "react";
import { Link, Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import './enterPage.scss';
import AstroService from "../../services/AstroService";

class EnterPage extends Component {
  service = new AstroService();

  state = {
    phone: '',
    password: '',
    redirect: false,
    error: false,
    error_code: -1
  }

  render() {
    return this.state.redirect ? <Navigate to="/editPage" /> : (
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
        {this.state.error && this.state.error_code === 0 ? <span className="error-msg">Пользователь не существует!</span> : null}
        {this.state.error && this.state.error_code === 1 ? <span className="error-msg">Неправильный пароль!</span> : null}
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

    this.service.sendDataPost(userInfo, '/auth/login')
      .then((result) => result.json())
      .then((result) => {
        if (result.access_token) {
          setToken(result.access_token);
          this.setState({
            redirect: true,
            error: false
          })
        } else {
          if (result.detail === "Wrong password!") {
            this.setState({
              error: true,
              error_code: 1
            })
          } else if (result.detail === "User doesn't exist!!") {
            this.setState({
              error: true,
              error_code: 0
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

    // .then((answer) => {
    //   console.log(answer)
    // if (answer.status === 200) {
    //   setUserName(answer.name)
    //   setWelcomeMessage(answer.welcome_msg)
    //   setProlifePhoto(answer.image_link)
    //   setId(answer.id)
    //   const { history } = this.props;
    //   history.push('/dialogs');
    // }
    // if (answer.status === 1) {
    //   alert("Password is incorrect!")
    // }
    // if (answer.status === 2) {
    //   const { history } = this.props;
    //   history.push('/edit');
    // }
    // })
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

export default connect(mapStateToProps, mapDispatchProps)(EnterPage);

