import React, { useState } from 'react';
import { useLocation } from 'react-router';
import AstroService from './dialogsData';
import Header from '../header/header';
import './dialogsPage.scss';

const Dialog = () => {
    const location  = useLocation();
    const astro = new AstroService();
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [mesHistory, setMesHistory] = useState([{
        isIncome: true,
        message: "Прив, как дела?",
        date: "14:33"
    },
    {
        isIncome: false,
        message: "Отлично, а у тебя?",
        date: "14:50"
    }]);

    const renderMessageHistory = function () {
        return mesHistory.map((mes, key) => {
            return (
                <div className={mes.isIncome ? "mes incoming" : "mes outgoing"} key={key}>
                    {mes.message}
                </div>
                )
            }
        )
    }
    const addMessage = function (event) {
        event.preventDefault();
        if(event.target.message.value.replace(/\s/g, '')) {
            const newMessage = {
                isIncome: false,
                message: event.target.message.value,
                date: new Date()
            }
            event.target.message.value = null;
            setMesHistory([...mesHistory, newMessage])
        }
    }
    const renderChoiceMessage = function () {
        return (
            <section className="choice-container">
            Вы понравились этому пользователю. <br/>
            Хотите начать общение? 
            <div className="choice-block">
                <button className="mes choice-yes">Да</button>
                <button className="mes choice-no">Нет</button>
            </div>
            
            </section>
        )
    }
    astro.getMockedData()
    .then((result) => result.data.find((person) => person.id === location.hash.substring(1)))
    .then((result) => {
        setName(result.name);
        setImage(result.image);
    });

    return(
        <>
        <Header linkTo="/dialogsPage" linkType="dialog" image={image} name={name}/>
        <section className="mes-history">
            {renderMessageHistory()}
            {/* {renderChoiceMessage()} */}
        </section>
        <form className="mes-form" onSubmit={addMessage}>
            <i className="far fa-smile"></i>
            <input name="message" className="mes-input" type="text" placeholder="Message"></input>
            <button type="submit"><i className="fas fa-play"></i></button>
        </form>
        </>
    )
    
}
export default Dialog;