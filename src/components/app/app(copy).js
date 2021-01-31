import React, { useState } from "react";
import "./app.css";
import Footer from "../footer";
import TaskList from "../task-list/task-list";
import NewTaskForm from "../new-task-form/new-task-form";

function App() {

  maxId = 1;

  const [todoItem, setTodoItem] = useState([
        this.createTodoItem('Completed task'),
        this.createTodoItem('Editing task'),
        this.createTodoItem('Active task'),
      ])
const [filter, setFilter] = useState('all')
  // state = {
  //   todoItem: [
  //     this.createTodoItem('Completed task'),
  //     this.createTodoItem('Editing task'),
  //     this.createTodoItem('Active task'),
  //   ], 
  //   filter: 'all',
  // };



  deleteItem = (id) => {
      const idx = setTodoItem.findIndex(el => el.id === id);
      const newArray = [...setTodoItem.slice(0, idx), ...setTodoItem.slice(idx + 1)];
        return {
          setTodoItem: newArray
        };
  };

  deleteAllTasks = () => {
     const idx = setTodoItem.filter(el => !el.done);
     return {
      setTodoItem: idx
     };
  };

  addItem = (text, min, sec) => {
 
    const newItem = this.createTodoItem(text, min, sec);
      const newArr = [
        ...setTodoItem,
        newItem
      ];
      return {
        setTodoItem: newArr
      };
  };

  // editNameItem = (id) => {

  //   this.setState(({ todoItem }) => {
  //     const idx = todoItem.findIndex(el => el.id === id)

  //     const oldItem = todoItem[idx];
  //     const newItem = { ...oldItem, label: todoItem.label }

  //     const newArr = [...todoItem.slice(0, idx), newItem, ...todoItem.slice(idx + 1)]

  //     return {
  //       todoItem: newArr
  //     }
  //   })

  // }

  editItem = (id) => {
      setTodoItem: this.toggleProperty(setTodoItem, id, 'important')
  }

  startTime = (id) => {
    const idx = setTodoItem.findIndex(el => el.id === id);
    const oldItem = setTodoItem[idx];
    
    console.log(oldItem)
  }

  endTime = () => {
  }

  onToggleImportant = (id) => {
    setTodoItem: this.toggleProperty(setTodoItem, id, 'important')
  };

  onToggleDone = (id) => {
    setTodoItem: this.toggleProperty(setTodoItem, id, 'done')
  };

  onFilterChange = () => {
  }

  filter(items, setFilter) {
    switch(filter) {
      case 'all': 
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default: 
        return items;
    }
  }

  toggleProperty(arr, id, propName) {
  
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
};

  createTodoItem(label, min, sec) {
    this.maxId += 1
    return {
      label,
      min,
      sec,
      timeOut: new Date(),
      id: this.maxId,
      done: false,
      important: false,
    }
  };

    const {todoItem, filter} = this.state;
    const visibleItems = this.filter(todoItem, filter);
    
    const doneCount = todoItem.filter((el) => !el.done).length;
    return (
      <div className='todoapp'>
        <NewTaskForm addItem={ this.addItem } />
        <TaskList todos={ visibleItems } 
                  oneDeleted={ this.deleteItem }
                  onToggleImportant={ this.onToggleImportant }
                  onToggleDone={ this.onToggleDone }
                  editItem={this.editItem}
                  startTime={this.startTime}
                  endTime={this.endTime}
         />
        <Footer doneCount={ doneCount } 
                allDelet={ this.allDelet } 
                // newAllList={this.newAllList}
                // newActiveList={this.newActiveList}
                // newCompletedList={this.newCompletedList}

                filter={ this.filter }
                onFilterChange={ this.onFilterChange } />
      </div>
    );

};