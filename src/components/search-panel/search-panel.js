import React , { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    render(){
        const { onClickAll , onClickLiked } = this.props
        return(
            <div className="search-panel">
                <input type="text" className="form-control" placeholder="Search"/> 
                <button className="btn btn-all" onClick={onClickAll}>All</button>
                <button className="btn btn-liked" onClick={onClickLiked}>Liked</button>
            </div>
        );
    }
};

