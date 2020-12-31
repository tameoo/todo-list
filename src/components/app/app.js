import React, {Component} from 'react';
import Header from '../app-header/'
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import AddTodo from '../todo-add-form/';

import './app.css';

export default class App extends Component{
    
    
    state = {
        todoData: [
            {label: "Drink Coffee More", imortant: false, liked: false, id: 1 },
            {label: "Be lazy", imortant: false, liked: false, id: 2 },
            {label: "Hard Work More", imortant: false, liked: false, id: 3 }
        ],
        term: '',
        filter: 'all',
        idForBorder: []
    };
    
    maxId = 10;
    likedArray = [];

    allArray = this.state.todoData;


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
        this.setState(({ todoData}) => {
            return{
                todoData: this.onToggleProperty(todoData, id, "liked")
            }
        });
    }


    filterItem(arr, property){
        switch(property){
            case 'all':
                return arr;
            case 'done':
                return arr.filter(el => el.done);
            case 'active':
                return arr.filter(el => !el.done);
            case 'liked':
                return arr.filter(el => el.liked);
            default:
                return arr;
        }
    }

    allItem = () => {
        this.setState(({filter}) => {
            return{
                filter: 'all'
            }
        });
    }
    
    likedItem = () => {
        this.setState(({filter}) => {
            return{
                filter: 'liked'
            }
        });
    }

    doneItem = () => {
        this.setState(({filter}) => {
            return{
                filter: 'done'
            }
        });
    }

    activeItem = () => {
        this.setState(({filter}) => {
            return{
                filter: 'active'
            }
        });
    }


    search(arr, term){

        if(term.length === 0){
            return arr;
        }
        
        return arr.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });        
    }

    onSearchItem = (term) => {
        this.setState({
            term: term
        });
    }

    render(){
        const { todoData, term, filter } = this.state;
        
        const visible = this.filterItem(this.search(todoData, term), filter);

        const done = todoData.filter(el => el.done).length;
        const todo = todoData.length - done;
        const liked = todoData.filter(el => el.liked).length;
        

        return (

            <div className="app">
                    <div className="app-inner">
                    <Header toDo={todo} Done={done} Liked={liked} />
                    <SearchPanel onClickAll={this.allItem} onClickLiked={this.likedItem} onClickDone={this.doneItem} onClickActive={this.activeItem} onSearchItem={this.onSearchItem}/>
                    <TodoList todo={visible} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked}/>  
                    <AddTodo onAdd={this.addItem} />
                </div>
            </div>
        );
    }
}

