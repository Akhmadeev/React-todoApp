import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = ({
  label,
  timeOut,
  oneDeleted,
  onToggleDone,
  done,
  editItem,
  important,
  startTime,
  endTime,
  min,
  sec,
}) => {
  let className = 'todo-list-item';
  if (done) className += ' completed';

  let textTask = '';

  const onSubmit = (event) => {
    event.preventDefault();
    editItem(event.target.value, textTask);
  };

  const editTask = (text) => {
    textTask = text.target.value;
  };

  function Timer() {
    return (
      <span>
        {min} : {sec}{' '}
      </span>
    );
  }

  if (important) {
    return (
      <li>
        <form onSubmit={onSubmit}>
          <input className="new-todo" placeholder={label} defaultValue={label} onChange={editTask} />
        </form>
      </li>
    );
  }
  return (
    <li className={className}>
      <div className="view">
        <input name="for" className="toggle" type="checkbox" onClick={onToggleDone} />
        <label htmlFor="for">
          <span className="description">{label}</span>
          <div className="stopwatch">
            <button type="button" label="Button" className="icon icon-pause" onClick={endTime} />
            <button type="button" label="Button" className="icon icon-play" onClick={startTime} />
          </div>
          <Timer min={min} sec={sec} />
          <span className="created">{formatDistanceToNow(timeOut, { addSuffix: true, includeSeconds: true })}</span>
        </label>
        <button label="Button" type="button" className="icon icon-edit" onClick={editItem} />
        <button label="Button" type="button" className="icon icon-destroy" onClick={oneDeleted} />
      </div>
    </li>
  );
};

Task.defaultProps = {
  label: '',
  min: 0,
  sec: 0,
  timeOut: {},
  oneDeleted: () => {},
  onToggleDone: () => {},
  done: true,
  editItem: () => {},
  important: false,
  startTime: () => {},
  endTime: () => {},
};

Task.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  sec: PropTypes.number,
  timeOut: PropTypes.instanceOf(Date),
  oneDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  editItem: PropTypes.func,
  important: PropTypes.bool,
  startTime: PropTypes.func,
  endTime: PropTypes.func,
};

export default Task;
