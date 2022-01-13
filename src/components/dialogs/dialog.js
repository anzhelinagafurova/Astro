import React, { useDebugValue, useState } from 'react';
import { useLocation } from 'react-router';
import AstroService from './dialogsData';
import Header from '../header/header';
import './dialogsPage.scss';

const Dialog = () => {
    const location  = useLocation();
    const astro = new AstroService();
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [mesInd, setIndex] = useState(0);
    const [mesHistory, setMesHistory] = useState([{
        isIncome: true,
        message: "Прив, как дела?",
        date: "14:33"
    }]);

    const renderMessageHistory = function () {
        if (mesHistory.length > 0) {
            return mesHistory.map((mes, key) => {
                return (
                    <div className={mes.isIncome ? "mes incoming" : "mes outgoing"} key={key}>
                        {mes.message}
                    </div>
                    )
                }
            )
        }
        else {
            renderMessage();
        }
    }

    const randomMessages = [
        'У меня все отлично, день прекрасный',
        'Мне нравится твоя фотография :)',
        'Какой твой любимый фильм?',
        'Правда? А мне вообще не понравился...'
    ]

    const generateRandomMessage = function () {
        if (mesInd > randomMessages.length-2) {
            setIndex(0)
        }
        else {
            setIndex(mesInd + 1)
        }
        const newMessage = {
            isIncome: true,
            message: randomMessages[mesInd],
            date: new Date()
        }
        setTimeout(() => setMesHistory([...mesHistory, newMessage]), 100) 
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
        else {
            generateRandomMessage()
        }

    }
    const renderMessage = function () {
        return (
            <section className="choice-container">
                Вы понравились этому пользователю. <br/>
                Начните общение!
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