import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends Component {
    renderArrow() {
        return <header className="header"><Link to={this.props.linkTo}><i className="fa fa-arrow-left header-item" aria-hidden="true"></i></Link></header>
    }
    renderBars() {
        return <header className="header">
                    <Link to={this.props.linkTo}><i className="fa fa-bars header-item" aria-hidden="true"></i></Link>
                    {this.props.search ? <i className="fa fa-search header-item flexEnd" aria-hidden="true" onClick={this.props.search}></i> : <></>}
                </header>        
    }
    renderDialogHeader() {
        return <header className="header headerDialog">
                    <Link to={this.props.linkTo}>
                        <i className="fa fa-arrow-left header-item" aria-hidden="true"></i>
                    </Link>
                    <img alt="avatar" className="header-image" src={this.props.image}/>
                    <p className="header-name">{this.props.name}</p>
                </header>
    }
    render(){
        switch (this.props.linkType){
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