import React , {Component}from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component{

    state = {
        done: false,
        important: false
    };

    onClickItem = () => {
        this.setState(({done}) => {
            return {
                done: !done
                };
            }
        );
    };

    onMarkItem = () => {
        this.setState(({important}) => {
            return {
                important: !important
                };
            }
        );
    }
    
    render(){

        const { label } = this.props;
        
        let classNames = "todo-span";

        if(this.state.done){
            classNames += " done";
        }

        if(this.state.important){
            classNames += " important";
        }
        
        return (
            <div className="todo-list-item">
                <span className={classNames} onClick={this.onClickItem}>{ label }</span> 
                <div className="todo-icon">
                        <i className="fas fa-star" onClick={this.onMarkItem}></i>
                        <i className="fas fa-trash-alt" onClick={this.props.onDeleted}></i>
                        <i className="fas fa-heart"></i>
                </div>
            </div>
        );
    }

}

