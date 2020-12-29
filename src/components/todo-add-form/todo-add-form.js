import React from 'react';
import './todo-add-form.css';

const AddTodo = () => {
    return (
        <div className="todo-add-form">
            <input placeholder="Type here your todo"/>
            <button className="btn-add">Add</button>
        </div>
    );
};

export default AddTodo;
