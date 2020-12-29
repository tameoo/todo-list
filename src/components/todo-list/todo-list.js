import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

const TodoList = ({ todo, onDeleted }) => {

    
    const el = todo.map((element) => {
        const {id, ...todosProps} = element;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                { ...todosProps }
                onDeleted={() => onDeleted(id)}
            /></li>
        );
    });
    

    return (
        <ul className="list-group todo-list">
            {el}
        </ul>
    );
};

export default TodoList;