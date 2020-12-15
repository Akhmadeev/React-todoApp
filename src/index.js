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
  time = 13;

  state = {
    todoItem: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
      //{label:'Completed task',timeOut:'created 17 seconds ago', important: false, id:'one'},
      //{label:'Editing task',timeOut:'created 5 minutes ago', important: true, id:'two'},
      //{label:'Active task',timeOut:'created 5 minutes ago', important: false, id:'three'}
    ]
  };

  deleteItem = (id) => {
    console.log(id)
    this.setState(({todoItem}) => {

      const idx = todoItem.findIndex(el => el.id === id);
      console.log(idx);
        
        const newArray = [...todoItem.slice(0, idx), ...todoItem.slice(idx + 1)];
        return {
          todoItem: newArray
        };
    });
  };

  allDelet = () => {
    this.setState(({todoItem}) => {
     const idx = todoItem.filter(el => el.done !== true);
     return {
       todoItem: idx
     };
    })
  };

  createTodoItem(label) {
    return {
      label,
      timeOut: this.time++,
      done: false,
      important: false,
      id: this.maxId++,
    }
  };

  addItem = (text) => {
 
    const newItem = this.createTodoItem(text);
    // const newItem = {
    //   label: text,
    //   timeOut: text,
    //   important: false,
    //   id: this.maxId++
    // }
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
    console.log('all')
  }

  newActiveList = () => {
    console.log('active')
  }

  newCompletedList = () => {
    console.log('completed')
  }

  render() {
    const {todoItem} = this.state;
    const doneCount = todoItem.filter((el) => el.done).length;
    //const importantCount = todoItem.length - doneCount;

    return (
      <div className='todoapp'>
        <NewTaskForm addItem={this.addItem}></NewTaskForm>
        <TaskList todos={todoItem} 
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