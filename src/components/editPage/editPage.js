import React, { Component } from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { readPhoto } from '../helpers';
import './editPage.scss';

export default class EditPage extends Component {

    socialTypes = ['Не выбрано', 'ИЛЭ (Дон Кихот)', 'СЭИ (Дюма)', 'ЭСЭ (Гюго)', 'ЛИИ (Робеспьер)', 'ИЭИ (Есенин)', 'СЛЭ (Жуков)', 'ЭИЭ (Гамлет)', 'ЛСИ (Максим Горький)',
        'ИЛИ (Бальзак)', 'СЭЭ (Наполеон)', 'ЭСИ (Драйзер)', 'ЛИЭ (Джек Лондон)', 'ЛСЭ (Шритлиц)', 'ЭИИ (Достоевский)', 'ИЭЭ (Гексли)', 'СЛИ (Габен)'];

    sixteenPersTypes = ['Не выбрано', 'Стратег (INTJ-A / INTJ-T)', 'Ученый (INTP-A / INTP-T)', "Командир (ENTJ-A / ENTJ-T)", "Полемист (ENTP-A / ENTP-T)",
        "Активист (INFJ-A / INFJ-T)", "Посредник (INFP-A / INFP-T)", "Тренер (ENFJ-A / ENFJ-T)", "Борец (ENFP-A / ENFP-T)",
        "Администратор (ISTJ-A / ISTJ-T)", "Защитник (ISFJ-A / ISFJ-T)", "Менеджер (ESTJ-A / ESTJ-T)", "Консул (ESFJ-A / ESFJ-T)",
        "Виртуоз (ISTP-A / ISTP-T)", "Артист (ISFP-A / ISFP-T)", "Делец (ESTP-A / ESTP-T)", "Развлекатель (ESFP-A / ESFP-T)"]

    state = {
        name: "",
        city: "",
        birthDate: "",
        photo: null,
        sign: '',
        signId: null,
        number: ''
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

    calculateNumber = (num) => {
        let arr = num.toString().replace(/-/g, "").split('');
        const result = arr.reduce((sum, current) => sum + Number(current), 0);
        if (result / 10 >= 1) {
            this.calculateNumber(result)
        }
        else {
            this.setState({
                number: result
            })
        }
    }
    calcucateSign = (date) => {
        date = new Date(null, Number(date.substring(5, 7)) - 1, Number(date.substring(8)))
        debugger;
        if (date <= new Date('1900-01-19') || date >= new Date('1900-12-22')) {
            return ['Козерог', 0]
        }
        if (new Date('1900-20-01') <= date && date <= new Date('1900-18-02')) {
            return ['Водолей', 1]
        }
        if (new Date('1900-02-19') <= date && date <= new Date('1900-03-20')) {
            return ['Рыбы', 2]
        }
        if (new Date('1900-03-21') <= date && date <= new Date('1900-04-19')) {
            return ['Овен', 3]
        }
        if (new Date('1900-04-20') <= date && date <= new Date('1900-05-20')) {
            return ['Телец', 4]
        }
        if (new Date('1900-05-21') <= date && date <= new Date('1900-06-20')) {
            return ['Близнецы', 5]
        }
        if (new Date('1900-06-21') <= date && date <= new Date('1900-07-22')) {
            return ['Рак', 6]
        }
        if (new Date('1900-07-23') <= date && date <= new Date('1900-08-22')) {
            return ['Лев', 7]
        }
        if (new Date('1900-08-23') <= date && date <= new Date('1900-09-22')) {
            return ['Дева', 8]
        }
        if (new Date('1900-09-23') <= date && date <= new Date('1900-10-22')) {
            return ['Весы', 9]
        }
        if (new Date('1900-10-23') <= date && date <= new Date('1900-11-22')) {
            return ['Скорпион', 10]
        }
        if (new Date('1900-11-23') <= date && date <= new Date('1900-12-21')) {
            return ['Стрелец', 11]
        }
    }
    setParams = (e) => {
        const value = e.target.value;
        this.calculateNumber(value);
        let infArr = this.calcucateSign(value);
        if (infArr) {
            this.setState({
                sign: infArr[0],
                signId: infArr[1]
            })
        }

    }

    render() {
        return (
            <>
                <Header linkTo="/searchPage" linkType="arrow" />
                <label htmlFor="picture" id="upload-background">
                    {this.state.photo ? <img src={this.state.photo} alt="Profile icon" className="profile-photo"></img> :
                        <div className="upload-background"><i className="fa fa-plus" aria-hidden="true"></i></div>}
                    <input type="file" id="picture" className="hidden" accept="image/*" onChange={this.setPhoto} />
                </label>
                <section className='edit-container'>
                    <form className='name-form' onSubmit={this.validateForm}>

                        {this.state.photo ? <p></p> : <p className='normal-label'>Загрузите фотографию</p>}

                        <input className='form-name' type="text" name="username" placeholder='Имя' maxLength="25" required />

                        <input className='form-city' type="text" name="message" placeholder='Город' maxLength="30" />

                        <input className='form-date' type="date" onChange={this.setParams}></input>
                        <p className='date-label'>Дата рождения</p>

                        <p className='info-label'>О себе</p>
                        <textarea className='info-field' placeholder="Напишите несколько строк о вас!" />

                        <div className="flex-field">
                            <p className="flex-label">Знак зодиака:</p>
                            <input type="text" className="form-date" value={this.state.sign} readOnly />
                        </div>

                        <div className="flex-field">
                            <p className="flex-label">Число судьбы:</p>
                            <input type="text" className="form-date" value={this.state.number} readOnly />
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
                            <HashLink to="/testSocioPage#top" className='to-test-button pink-color'>Пройти тест</HashLink>
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
                            <HashLink to="/test16PersPage#top" className='to-test-button peach-color'>Пройти тест</HashLink>
                        </div>

                        <Link to="#!" type="submit" className='login-button no-fixed'><i className="fas fa-play"></i></Link>
                    </form>
                </section>
            </>
        )
    }
}
