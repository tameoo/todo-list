import React, {Component} from 'react';
import Header from '../app-header/'
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import AddTodo from '../todo-add-form/';

import './app.css';

export default class App extends Component{
    
    maxId = 10;

    state = {
        todoData: [
            {label: "Drink Coffee More", imortant: false, liked: false, id: 1 },
            {label: "Be lazy", imortant: false, liked: false, id: 2 },
            {label: "Hard Work More", imortant: false, liked: false, id: 3 }
        ]
    };
   
   deleteItem = (id) => {
       this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

            return {
                todoData: newArray
            };

       });
    };

    addItem = (text) => {

        const newItem = {
            label: text,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {
            
            const addArray = [...todoData, newItem];
           
            return{
                todoData: addArray
            };
        });
    };

    onToggleProperty(arr,id, property){
            const index = arr.findIndex((el) => el.id === id);

            const oldItem = arr[index];
            const newItem = { ...oldItem, [property]: !oldItem[property]}  

            return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.onToggleProperty(todoData,id, "done")
            }
        });
    }
    
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.onToggleProperty(todoData, id, "important")
            }
        });
    }
    
    onToggleLiked = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.onToggleProperty(todoData, id, "liked")
            }
        });
    }

    // filterData(arr, filter){

    //     switch(filter) {
    //         case "all":
    //             return arr
    //         case "liked":
    //             return arr.filter(el => el.liked);
    //         default:
    //             return arr
    //     }
        
    // }
    
    allItem = () => {
        // this.setState({
        //     todoData: this.filterData(this.todoData,"all")
        // });
    }
    
    likedItem = () => {
        // this.setState({
        //     todoData: this.filterData(this.todoData,"liked")
        // });

    }

    render(){
        const { todoData } = this.state;

        const done = todoData.filter(el => el.done).length;
        const todo = todoData.length - done;
        const liked = todoData.filter(el => el.liked).length;
        
        return (

            <div className="app">
                    <div className="app-inner">
                    <Header toDo={todo} Done={done} Liked={liked} />
                    <SearchPanel onClickAll={this.allItem} onClickLiked={this.likedItem}/>
                    <TodoList todo={todoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked}/>  
                    <AddTodo onAdd={this.addItem} />
                </div>
            </div>
        );
    }
}

