import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import SideBar from "./sidebar";

export default class Header extends Component {
    renderArrow() {
        return <header className="header"><Link to={this.props.linkTo}><i className="fa fa-arrow-left header-item" aria-hidden="true"></i></Link></header>
    }
    renderBars() {
        return <header className="header">
            <SideBar letter="M" age="21" name="Masha" city="Yekaterinburg" />
        </header>
    }
    renderDialogHeader() {
        return <header className="header headerDialog">
            <Link to={this.props.linkTo}>
                <i className="fa fa-arrow-left header-item" aria-hidden="true"></i>
            </Link>
            <img alt="avatar" className="header-image" src={this.props.image} />
            <p className="header-name">{this.props.name}</p>
        </header>
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