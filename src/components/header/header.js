import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends Component {
    render(){
        return <Link to={this.props.linkTo} className="header"><i className="fa fa-arrow-left arrow-left" aria-hidden="true"></i></Link>
    }
}