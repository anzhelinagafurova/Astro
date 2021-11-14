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
    searchDialog() {

    }
    componentDidMount() {
        this.service.getMockedData()
        .then((result) => this.setState({
            dialogData: result.data
        }))
    }
    renderDialogs(){
        return (
            this.state.dialogData.map((dialogItem, key) => {
                return <Link to="#!" className="dialog-item" key={key}>
                    <img src={dialogItem.image} className="dialog-image"/>
                    <div className="dialog-text-info">
                        <p className="dialog-name">{dialogItem.name}</p>
                        <p className="dialog-message">{dialogItem.lastMessage}</p>
                    </div>
                </Link>
            })
        )
    }
    render(){
        return (
            <>
                <Header linkTo="/registrationPage" linkType="bars" search={this.searchDialog}/>
                <section className="dialogs-container">
                    {this.state.dialogData.length > 0 ? this.renderDialogs() : <p className='normal-label margin_top'>Здесь ничего нет...</p>}
                </section>
            </>
        )
    }
}