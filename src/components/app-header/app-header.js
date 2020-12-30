import React, { Component } from 'react';
import './app-header.css';

export default class Header extends Component{
    render(){
        const { toDo, Done, Liked } = this.props;

        return (
            <div className="app-header">
                <h1>My TodoList</h1> 
                <div className="app-status">
                    <span className="app-item">{ toDo }</span>todo more item, done <span className="app-done">{ Done}</span>,liked is <span className="app-liked">{ Liked }</span>
                </div>
            </div>
        );
    }
};
