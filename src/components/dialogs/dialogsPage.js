import React, { Component } from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import './dialogsPage.scss';

import AstroService from './dialogsData';

export default class DialogsPage extends Component {
    service = new AstroService();
    state = {
        dialogData: []
    };
    searchDialog = (value) => {
        this.getDialogs()
        .then((result) => result.data)
        .then((data) => data.filter(dialogItem => dialogItem.name.toLowerCase().includes(value.toLowerCase())))
        .then((result) => this.setState({
            dialogData: result
        }))
    }

    componentDidMount = () => {
        this.getDialogs()
        .then((result) => this.setState({
            dialogData: result.data
        }))
    }

    getDialogs() {
        return this.service.getMockedData()
    }
    renderDialogs(){
        return (
            this.state.dialogData.map((dialogItem, key) => {
                return <Link to={{pathname:"/dialog", hash: dialogItem.id}}
                    className="dialog-item" key={key}>
                    <img src={dialogItem.image} alt="avatar" className="dialog-image"/>
                    <div className="dialog-text-info">
                        <p className="dialog-name">{dialogItem.name}</p>
                        <p className="dialog-message">{dialogItem.lastMessage}</p>
                    </div>
                    <span className="dialog-time">{dialogItem.time}</span>
                </Link>
            })
        )
    }
    render(){
        return (
            <>
                <Header linkTo="/menu" linkType="bars" search={this.searchDialog}/>
                <section className="dialogs-container">
                    {this.state.dialogData.length > 0 ? this.renderDialogs() : <p className='normal-label margin_top'>Здесь ничего нет...</p>}
                </section>
            </>
        )
    }
}