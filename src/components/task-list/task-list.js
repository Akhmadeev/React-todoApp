import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';

const TaskList = ({todos, oneDeleted, onToggleImportant, onToggleDone, editItem, startTime, endTime }) => {


  // let todoItem;
  // if(todos.length === 0) todoItem = todosItem;
  // else todoItem = todos;

  const elements = todos.map(item => (
      <Task label={ item.label } timeOut={ item.timeOut } key={ item.id } 
      min={item.min} sec={item.sec}
      important={item.important}
      oneDeleted={ () => oneDeleted(item.id)}
      onToggleImportant={ () => onToggleImportant(item.id) }
      onToggleDone={ () => onToggleDone(item.id) }
      editItem={ () => {editItem(item.id, item.label)}}
      done={ item.done }
      startTime={() => {startTime(item.id)}}
      endTime={() => {endTime(item.id)}}
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
  editItem: () => {},
  startTime: () => {},
  endTime: () => {}
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    label: '',
    completed:PropTypes.bool,
  })),
  oneDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  editItem: PropTypes.func,
  startTime: PropTypes.func,
  endTime: PropTypes.func
};

export default TaskList;