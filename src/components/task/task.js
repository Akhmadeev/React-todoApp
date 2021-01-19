import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = ({ label, timeOut, oneDeleted, onToggleDone, done, editItem, important }) => {

    let className = 'todo-list-item';
    if(done) className += ' completed';

    if(important) {
      return (
        <li>
          <input className="new-todo" placeholder={label} defaultValue={label}/>
        </li>
      )
    }
    return (
      <li className={ className } >
        <div className='view'>
          <input name='for' className='toggle' type="checkbox" onClick={onToggleDone}/>
          <label htmlFor='for'>
            <span className='description'>{ label }</span>
            <span className='created'>{ formatDistanceToNow(timeOut, { addSuffix: true, includeSeconds: true })}</span>
          </label>
          <button label="Button" type='button' className="icon icon-edit" 
                  onClick={ editItem }/>
          <button label="Button" type='button' className="icon icon-destroy"
                  onClick={ oneDeleted }/>
        </div>
      </li>
    )
  }

Task.defaultProps = {
  label:'',
  timeOut: {},
  oneDeleted: () => {},
  onToggleDone: () => {},
  done: true,
  editItem: () => {},
  important: false
}

Task.propTypes = {
  label: PropTypes.string,
  timeOut: PropTypes.instanceOf(Date),
  oneDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  editItem: PropTypes.func,
  important: PropTypes.bool
}

export default Task;