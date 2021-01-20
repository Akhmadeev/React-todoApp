import React, { Component } from "react";
import "./app.css";
import Footer from "../footer";
import TaskList from "../task-list/task-list";
import NewTaskForm from "../new-task-form/new-task-form";

export default class App extends Component {

  maxId = 1;

  state = {
    todoItem: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ], 
    filter: 'all',
  };

  deleteItem = (id) => {
    this.setState(({todoItem}) => {
      const idx = todoItem.findIndex(el => el.id === id);
      const newArray = [...todoItem.slice(0, idx), ...todoItem.slice(idx + 1)];
        return {
          todoItem: newArray
        };
    });
  };

  deleteAllTasks = () => {
    this.setState(({todoItem}) => {
     const idx = todoItem.filter(el => !el.done);
     return {
       todoItem: idx
     };
    });
  };

  addItem = (text) => {
 
    const newItem = this.createTodoItem(text);
    this.setState(({todoItem}) => {
      const newArr = [
        ...todoItem,
        newItem
      ];
      return {
        todoItem: newArr
      };
    });
  };

  editNameItem = (id) => {

    this.setState(({ todoItem }) => {
      const idx = todoItem.findIndex(el => el.id === id)

      const oldItem = todoItem[idx];
      const newItem = { ...oldItem, label: todoItem.label }

      const newArr = [...todoItem.slice(0, idx), newItem, ...todoItem.slice(idx + 1)]

      return {
        todoItem: newArr
      }
    })

  }

  editItem = (id) => {
    this.setState(({todoItem}) => ({
      todoItem: this.toggleProperty(todoItem, id, 'important')
    }));
  }

  onToggleImportant = (id) => {
    this.setState(({todoItem}) => ({
        todoItem: this.toggleProperty(todoItem, id, 'important')
      }));
  };

  onToggleDone = (id) => {
    this.setState(({todoItem}) => ({
        todoItem: this.toggleProperty(todoItem, id, 'done')
      }));
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  filter(items, filter) {
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

  createTodoItem(label) {
    this.maxId += 1
    return {
      label,
      timeOut: new Date(),
      id: this.maxId,
      done: false,
      important: false,
    }
  };

  render() {
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
};