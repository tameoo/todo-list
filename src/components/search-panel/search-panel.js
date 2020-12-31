import React , { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    onSearch = (e) => {
        this.props.onSearchItem(e.target.value);
    }

    render(){
        const { onClickAll , onClickLiked ,onClickActive, onClickDone} = this.props
        return(
            <div className="search-panel">
                <input type="text" className="form-control" placeholder="Search" onChange={this.onSearch}/> 
                <button className="btn btn-info" onClick={onClickAll}>All</button>
                <button className="btn btn-info" onClick={onClickActive}>Active</button>
                <button className="btn btn-info" onClick={onClickDone}>Done</button>
                <button className="btn btn-info" onClick={onClickLiked}>Liked</button>
            </div>
        );
    }
};

