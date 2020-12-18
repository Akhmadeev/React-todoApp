import React, {Component} from 'react';
import Task from '../task';

export default class TaskList extends Component  {

 render() {
  const {todos, oneDeleted, onToggleImportant, onToggleDone, done} = this.props;

  const elements = todos.map(item => {

    return (
      <Task label={item.label} timeOut={item.timeOut} key={item.id} 
      oneDeleted={() => oneDeleted(item.id)}
      onToggleImportant={() => onToggleImportant(item.id)}
      onToggleDone={() => onToggleDone(item.id)}
      done={item.done}></Task>
    )
  });
  return (
    <section className='main'>
      <ul className='todo-list'>
        {elements}
      </ul>
    </section>
  );
 }
};
