import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Task from './components/task/';
import Footer from './components/footer/';
import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import TasksFilter from './components/task-filter';
import { formatRelative, subDays } from 'date-fns'
import './index.css';

export default class App extends Component {

  maxId = 1;
  time = 13;

  state = {
    todoItem: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ], 
    todo: []
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
    })
  };

  createTodoItem(label) {
    return {
      label,
      timeOut: formatRelative(subDays(new Date(), 3), new Date()),
      done: false,
      important: false,
      id: this.maxId++,
    }
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

  toggleProperty(arr, id, propName) {
  
      const idx = arr.findIndex(el => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({todoItem}) => {
      return {
        todoItem: this.toggleProperty(todoItem, id, 'important')
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoItem}) => {
      return {
        todoItem: this.toggleProperty(todoItem, id, 'done')
      };
    });
  }

  
  newAllList = () => {
    this.setState(({todoItem}) => {
      return {
        todo: todoItem
      }
    })
  }

  newActiveList = () => {
    this.setState(({todoItem}) => {
      const idx = todoItem.filter(el => !el.done);
      console.log(idx)
      return {
        todo: idx
      };
     })
  }

  newCompletedList = () => {
    this.setState(({todoItem}) => {
      const idx = todoItem.filter(el => el.done);
     
      return {
        todo: idx
      };
     })
  }
  
  render() {
    const {todoItem} = this.state;
    const {todo} = this.state;
    const doneCount = todoItem.filter((el) => !el.done).length;
    // const finallyTodo = (todo, todoItem) => {
    //   if(todo == []) return todoItem
    //   return todo
    // }
    //const importantCount = todoItem.length - doneCount;

    return (
      <div className='todoapp'>
        <NewTaskForm addItem={this.addItem}></NewTaskForm>
        <TaskList todos={todo} 
                  oneDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}
        ></TaskList>
        <Footer doneCount={doneCount} 
                allDelet={this.allDelet} 
                newAllList={this.newAllList}
                newActiveList={this.newActiveList}
                newCompletedList={this.newCompletedList}></Footer>
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