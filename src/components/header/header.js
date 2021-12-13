import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import SideBar from "./sidebar";


export default class Header extends Component {
    state = {
        settingsShown: false,
        searchShown: false,
    }
    renderArrow() {
        return <header className="header"><Link to={this.props.linkTo}><i className="fa fa-arrow-left header-item" aria-hidden="true"></i></Link></header>
    }
    renderBars() {
        return <header className="header">
            <SideBar letter="M" age="21" name="Masha" city="Yekaterinburg" />
            <div className="search-group">
                <input className="search-input" type="text" placeholder="Поиск по собеседникам" hidden={!this.state.searchShown} onChange={this.search}/>
                <i className="fas fa-search" onClick={this.handleSearch}></i>
            </div>
        </header>
    }
    renderDialogHeader() {
        return <header className="header headerDialog">
            <Link to={this.props.linkTo}>
                <i className="fa fa-arrow-left header-item" aria-hidden="true"></i>
            </Link>
            <div className="dial-info">
                <img alt="avatar" className="header-image" src={this.props.image} />
                <p className="header-name">{this.props.name}</p>
            </div>
            <i className="fas fa-ellipsis-v" onClick={this.handleSettings}></i>
            <section className="settings-bar" hidden={!this.state.settingsShown}>
                <p>Удалить диалог</p>
                <p>Заблокировать</p>
                <p>Вложения</p>
            </section>
        </header>
    }
    handleSettings = () => {
        this.setState({
            settingsShown: !this.state.settingsShown
        })
    }
    handleSearch = () => {
        this.setState({
            searchShown: !this.state.searchShown
        })
    }
    search = (event) => {
        this.props.search(event.target.value);
    }
    render() {
        switch (this.props.linkType) {
            case "arrow": {
                return this.renderArrow();
            }
            case "bars": {
                return this.renderBars();
            }
            case "dialog": {
                return this.renderDialogHeader();
            }
            default: {
                return
            }
        }
    }
}