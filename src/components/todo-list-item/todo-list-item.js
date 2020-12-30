import React , {Component}from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component{

    render(){

        const { label, important, done , onToggleDone, onToggleImportant, onToggleLiked, onDeleted  } = this.props;
        
        let classNames = "todo-span";

        if(done){
            classNames += " done";
        }

        if(important){
            classNames += " important";
        }
        
        return (
            <div className="todo-list-item">
                <span className={classNames} onClick={onToggleDone}>{ label }</span> 
                <div className="todo-icon">
                        <i className="fas fa-star" onClick={onToggleImportant}></i>
                        <i className="fas fa-trash-alt" onClick={onDeleted}></i>
                        <i className="fas fa-heart" onClick={onToggleLiked}></i>
                </div>
            </div>
        );
    }

}

