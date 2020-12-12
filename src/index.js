import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Task from './components/task/';
import Footer from './components/footer/';
import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import TasksFilter from './components/task-filter';

import './index.css';




export default class App extends Component {

  maxId = 1;

  state = {
    todoItem: [
      {label:'Completed task',timeOut:'created 17 seconds ago', important: false, id:'one'},
      {label:'Editing task',timeOut:'created 5 minutes ago', important: true, id:'two'},
      {label:'Active task',timeOut:'created 5 minutes ago', important: false, id:'three'}
    ]
  };

  deleteItem = (id) => {
    
    this.setState(({todoItem}) => {

      const idx = todoItem.findIndex(el => el.id === id);
      console.log(idx);
        
        const newArray = [...todoItem.slice(0, idx), ...todoItem.slice(idx + 1)];
        return {
          todoItem: newArray
        }
    })
  }

  addItem = (text) => {
    console.log(text)

    const newItem = {
      label: text,
      timeOut: text,
      important: false,
      id: this.maxId++
    }
    this.setState(({todoItem}) => {

      const newArr = [
        ...todoItem,
        newItem
      ];
      return {
        todoItem:newArr
      };
    });

  }

  

  render() {
    return (
      <div className='todoapp'>
        <NewTaskForm addItem={this.addItem}></NewTaskForm>
        <TaskList todos={this.state.todoItem} oneDeleted={this.deleteItem}></TaskList>
        <Footer></Footer>
      </div>
      );
  }
  
};

ReactDOM.render(<App></App>, document.getElementById('root'));

// Task - одна задача
// TaskList - список задач
// NewTaskForm - форма для добавления
// Footer - футер с информацией и кнопками
// TasksFilter - фильтры в футере