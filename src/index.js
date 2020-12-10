import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/task/';
import Footer from './components/footer/';
import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import TasksFilter from './components/task-filter';

import './index.css';



const App = () => {

  const todoItem = [
    {label:'Completed task',timeOut:'created 17 seconds ago', important: false, id:'one'},
    {label:'Editing task',timeOut:'created 5 minutes ago', important: true, id:'two'},
    {label:'Active task',timeOut:'created 5 minutes ago', important: false, id:'three'}
  ]
  return (
  <div className='todoapp'>
    <NewTaskForm></NewTaskForm>
    <TaskList todos={todoItem}></TaskList>
    <Footer></Footer>
  </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById('root'));

// Task - одна задача
// TaskList - список задач
// NewTaskForm - форма для добавления
// Footer - футер с информацией и кнопками
// TasksFilter - фильтры в футере