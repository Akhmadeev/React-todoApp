import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./components/footer/footer";
import TaskList from "./components/task-list/task-list";
import NewTaskForm from "./components/new-task-form/new-task-form";

export default class App extends Component {

  maxId = 1;

  time = 13;

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
          todoItem: newArray,
          todo: newArray
        };
    });
  };

  allDelet = () => {
    this.setState(({todoItem}) => {
     const idx = todoItem.filter(el => !el.done);
     return {
       todoItem: idx,
       todo: idx
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
        todoItem: newArr,
        todo:newArr
      };
    });

  };

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

  
  // newAllList = () => {
  //   this.setState(({todoItem}) => {
  //     return {
  //       todo: todoItem
  //     };
  //   });
  // };

  // newActiveList = () => {
  //   this.setState(({todoItem}) => {
  //     const idx = todoItem.filter(el => !el.done);
  //     console.log(idx)
  //     return {
  //       todo: idx
  //     };
  //    });
  // };

  // newCompletedList = () => {
  //   this.setState(({todoItem}) => {
  //     const idx = todoItem.filter(el => el.done);
     
  //     return {
  //       todo: idx
  //     };
  //    });
  // };


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
    return {
      label,
      timeOut: new Date(),
      done: false,
      important: false,
      id: this.maxId + 1,
    }
  };

  render() {
    const {todoItem, filter} = this.state;
    const visibleItems = this.filter(todoItem, filter);
    // const {todo} = this.state;
    const doneCount = todoItem.filter((el) => !el.done).length;
    // const finallyTodo = (todo, todoItem) => {
    //   if(todo == []) return todoItem
    //   return todo
    // }
    // const importantCount = todoItem.length - doneCount;

    return (
      <div className='todoapp'>
        <NewTaskForm addItem={ this.addItem } />
        <TaskList todos={ visibleItems } 
                  oneDeleted={ this.deleteItem }
                  onToggleImportant={ this.onToggleImportant }
                  onToggleDone={ this.onToggleDone }
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

App.defaultProps = {
  maxId: 100
}

ReactDOM.render(<App />, document.getElementById('root'));

// Task - одна задача
// TaskList - список задач
// NewTaskForm - форма для добавления
// Footer - футер с информацией и кнопками
// TasksFilter - фильтры в футере