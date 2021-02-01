import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component {
   

  state = {
    textTask: ''
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {textTask} = this.state;
    const { editItem, id } = this.props;
    editItem(id, textTask);
  };

  editTask = (text) => {
    this.setState({textTask: text.target.value})
  };

 

  render() {
    const { textTask } = this.state;
    const { label, timeOut, oneDeleted, onToggleDone, done, editItem, important, startTime, endTime, min, sec } = this.props;
  let className = 'todo-list-item';
  if (done) className += ' completed';
  
    if (important) {
      return (
        <li>
          <form onSubmit={this.onSubmit}>
            <input
              className="new-todo"
              value={textTask}
              onChange={this.editTask}
            />
          </form>
        </li>
      );
    }

  return (
    <li className={className}>
      <div className="view">
        <input name="for" className="toggle" type="checkbox" onClick={onToggleDone} value={textTask} />
        <label htmlFor="for">
          <span className="description">{label}</span>
          <div className="stopwatch">
            <button type="button" label="Button" className="icon icon-pause" onClick={endTime} />
            <button type="button" label="Button" className="icon icon-play" onClick={startTime} />
          </div>
          <span>
            {min} : {sec}
          </span>
          <span className="created">{formatDistanceToNow(timeOut, { addSuffix: true, includeSeconds: true })}</span>
        </label>
        <button label="Button" type="button" className="icon icon-edit" onClick={editItem} />
        <button label="Button" type="button" className="icon icon-destroy" onClick={oneDeleted} />
      </div>
    </li>
  );
  }
};

Task.defaultProps = {
  label: '',
  min: 0,
  sec: 0,
  id: 0,
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
  id: PropTypes.number,
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