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
        this.props.onAdd(this.state.text);
        e.target.reset();
    }

    render (){
     
        return (
            <form className="todo-add-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Type here your todo" className="form-control" onChange={this.onLabelChange} />
                <button className=" btn btn-add">Add</button>
            </form>
        );
    }
    
};

