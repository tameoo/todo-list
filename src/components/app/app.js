import React, {Component} from 'react';
import Header from '../app-header/'
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import AddTodo from '../todo-add-form/';

import './app.css';

export default class App extends Component{
    
    state = {
        todoData: [
            {label: "Drink Coffee More", id: 1 },
            {label: "Be lazy", id: 2 },
            {label: "Hard Work More", id: 3 }
        ]
    }
   
   deleteItem = (id) => {
       this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            
            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };

       });
   }

    render(){
        return (
            <div className="app">
                    <div className="app-inner">
                    <Header />
                    <SearchPanel />
                    <TodoList todo={this.state.todoData} onDeleted={this.deleteItem}/>  
                    <AddTodo />
                </div>
            </div>
        );
    }
}

