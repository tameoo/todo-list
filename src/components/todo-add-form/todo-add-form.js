import React, { Component }from 'react';
import './todo-add-form.css';

export default class AddTodo extends Component{
    
    state = {
        text: ' '
    }

    onLabelChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text.length > 1){
            this.props.onAdd(this.state.text);
            this.setState({
                text: ' '
            });
        }
        e.target.reset();
    }

    render (){
     
        return (
            <form className="todo-add-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Type here your todo" className="form-control" onChange={this.onLabelChange} />
                <button className=" btn btn-secondary">Add</button>
            </form>
        );
    }
    
};

