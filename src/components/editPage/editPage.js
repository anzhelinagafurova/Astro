import React, { Component } from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import { readPhoto } from '../helpers';
import './editPage.scss';

export default class EditPage extends Component {

    socialTypes = ['ИЛЭ (Дон Кихот)', 'СЭИ (Дюма)', 'ЭСЭ (Гюго)', 'ЛИИ (Робеспьер)', 'ИЭИ (Есенин)', 'СЛЭ (Жуков)', 'ЭИЭ (Гамлет)', 'ЛСИ (Максим Горький)',
    'ИЛИ (Бальзак)', 'СЭЭ (Наполеон)', 'ЭСИ (Драйзер)', 'ЛИЭ (Джек Лондон)', 'ЛСЭ (Шритлиц)', 'ЭИИ (Достоевский)', 'ИЭЭ (Гексли)', 'СЛИ (Габен)'];

    sixteenPersTypes = ['Стратег (INTJ-A / INTJ-T)', 'Ученый (INTP-A / INTP-T)', "Командир (ENTJ-A / ENTJ-T)", "Полемист (ENTP-A / ENTP-T)",
    "Активист (INFJ-A / INFJ-T)", "Посредник (INFP-A / INFP-T)", "Тренер (ENFJ-A / ENFJ-T)", "Борец (ENFP-A / ENFP-T)",
    "Администратор (ISTJ-A / ISTJ-T)", "Защитник (ISFJ-A / ISFJ-T)", "Менеджер (ESTJ-A / ESTJ-T)", "Консул (ESFJ-A / ESFJ-T)",
    "Виртуоз (ISTP-A / ISTP-T)", "Артист (ISFP-A / ISFP-T)", "Делец (ESTP-A / ESTP-T)", "Развлекатель (ESFP-A / ESFP-T)"]

    state = {
        name: "",
        city: "",
        birthDate: "",
        photo: null
    }

    setPhoto = async (e) => {
        const photo = await readPhoto(e);
        this.setState({
            photo: await photo
        })
    }

    validateForm = (e) => {
        e.preventDefault();
    }

    render(){
        return (
        <>
            <Header linkTo="/registrationPage" linkType="arrow"/>
            <label htmlFor="picture" id="upload-background">
                    {this.state.photo ? <img src={this.state.photo} alt="Profile icon" className="profile-photo"></img> : 
                    <div className="upload-background"><i className="fa fa-plus" aria-hidden="true"></i></div>}             
                    <input type="file" id="picture" className="hidden" accept="image/*" onChange={this.setPhoto}/>
                </label>
            <section className='edit-container'>
                <form className='name-form' onSubmit={this.validateForm}>
            
                {this.state.photo ? <p></p>:<p className='normal-label'>Загрузите фотографию</p>}

                <input className='form-name' type="text" name="username" placeholder='Имя' maxLength="25" required />

                <input className='form-city' type="text" name="message" placeholder='Город' maxLength="30" />

                <input className='form-date' type="date"></input>
                <p className='date-label'>Дата рождения</p>

                <p className='info-label'>О себе</p>
                <textarea className='info-field' placeholder="Напишите несколько строк о вас!"/>
                
                <div className="flex-field">
                    <p className="flex-label">Знак зодиака:</p>
                    <input type="text" className="form-date" value="Стрелец" readOnly/>
                </div>

                <div className="flex-field">
                    <p className="flex-label">Число судьбы:</p>
                    <input type="text" className="form-date" value="2" readOnly/>
                </div>

                <div className="flex-field">
                    <p className="flex-label">Соционический тип:</p>
                    <select className="form-date" placeholder="Выберите из списка">
                        {this.socialTypes.map((socType, key) => {
                            return <option key={key}>{socType}</option>
                        })}
                    </select>
                </div>

                <div className="button-field">
                    <p className='button-label'>Не знаете свой тип?</p>
                    <Link to="#!" className='to-test-button pink-color'>Пройти тест</Link>
                </div>

                <div className="flex-field">
                    <p className="flex-label">16 Personalities:</p>
                    <select className="form-date" placeholder="Выберите из списка">
                        {this.sixteenPersTypes.map((perType, key) => {
                            return <option key={key}>{perType}</option>
                        })}
                    </select>
                </div>

                <div className="button-field">
                    <p className='button-label'>Не знаете свой тип?</p>
                    <Link to="#!" className='to-test-button peach-color'>Пройти тест</Link>
                </div>

                <Link to="#!" type="submit" className='login-button no-fixed'><i className="fas fa-play"></i></Link>
                </form>
            </section>
        </>
        )
    }
}
