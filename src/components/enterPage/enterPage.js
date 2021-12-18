import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './enterPage.scss';
import AstroService from "../../services/AstroService";

class EnterPage extends Component {
  service = new AstroService();

  state = {
    phone: '',
    password: ''
  }

  render() {
    return (
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
      </section>
    )
  }
  sendForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // const { setProlifePhoto, setUserName, setWelcomeMessage, setId } = this.props;
    let userInfo = {
      phone: form.phoneNumber.value,
      password: form.password.value
    };
    console.log(userInfo)
    this.service.sendDataPost(userInfo, '')
      .then((result) => console.log(result.json()))
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
  }
}

// export default connect(mapStateToProps, mapDispatchProps)(EnterPage);
export default EnterPage;

