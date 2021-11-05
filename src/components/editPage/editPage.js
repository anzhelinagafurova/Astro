import React, { Component } from 'react';
import Header from '../header/header';
import './editPage.scss';

export default class DialogItem extends Component {
    state = {
        name: "",
        city: "",
        birthDate: "",
    }
    setData = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        
        // let userInfo = {
        //   name: form.username.value,
        //   welcome_msg: form.message.value || "Привет всем друзьям!",
        //   image_link: form.pictureUrl.value || profilePicSvg
        // }
    }
    setPhoto = () => {

    }
    render(){
        return (
        <>
            <Header/>
            <section className='edit-container'>
                <form className='name-form' onSubmit={this.setData}>
                <label htmlFor="picture" id="upload-background" className="upload-background">

                    {/* <img src={photo} alt="Profile icon" className="profile-photo"></img> :  */}
                    <div className="avatar-empty-icon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                    <input type="file" id="picture" accept="image/*" onChange={this.setPhoto} className="upload-pic"/>
                </label>

                <input type="text" name="pictureUrl" hidden /> 
                
                <p className='photo-label'>Загрузите фотографию</p>

                <input type="text" name="username" placeholder='Имя' maxLength="25" required />

                <input type="text" name="message" placeholder='Город' maxLength="200" />

                <button type="submit" className='edit-button'>Отправить</button>

                </form>
            </section>
        </>
        )
    }
}
