import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';

const TaskList = ({todos, oneDeleted, onToggleImportant, onToggleDone}) => {

  // let todoItem;
  // if(todos.length === 0) todoItem = todosItem;
  // else todoItem = todos;

  const elements = todos.map(item => (
      <Task label={ item.label } timeOut={ item.timeOut } key={ item.id } 
      oneDeleted={ () => oneDeleted(item.id)}
      onToggleImportant={ () => onToggleImportant(item.id) }
      onToggleDone={ () => onToggleDone(item.id) }
      done={ item.done } />
    ));
 
  return (
    <section className='main'>
      <ul className='todo-list'>
        { elements  }
      </ul>
    </section>
  );
 };

TaskList.defaultProps = {
  todos:() => {},
  oneDeleted: () => {},
  onToggleImportant: () => {},
  onToggleDone: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.func,
  oneDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
}

export default TaskList;