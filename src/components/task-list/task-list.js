import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';

const TaskList = ({todos, oneDeleted, onToggleImportant, onToggleDone, editItem }) => {


  // let todoItem;
  // if(todos.length === 0) todoItem = todosItem;
  // else todoItem = todos;

  const elements = todos.map(item => (
      <Task label={ item.label } timeOut={ item.timeOut } key={ item.id } 
      important={item.important}
      oneDeleted={ () => oneDeleted(item.id)}
      onToggleImportant={ () => onToggleImportant(item.id) }
      onToggleDone={ () => onToggleDone(item.id) }
      editItem={ () => {editItem(item.id, item.label)}}
      done={ item.done }
      />
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
  todos: [],
  oneDeleted: () => {},
  onToggleImportant: () => {},
  onToggleDone: () => {},
  editItem: () => {}
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    label: '',
    completed:PropTypes.bool,
  })),
  oneDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  editItem: PropTypes.func
};

export default TaskList;