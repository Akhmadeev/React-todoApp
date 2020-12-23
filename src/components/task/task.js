import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = ({ label, timeOut, oneDeleted, onToggleDone, done }) => {


    let className = 'todo-list-item';
    if(done) className += ' completed';

    return (
      <li className={ className }>
        <div className='view'>
          <input name='for' className='toggle' type="checkbox" onClick={onToggleDone} />
          <label htmlFor='for'>
            <span className='description'
            >{ label }</span>
            <span className='created'>{ formatDistanceToNow(timeOut, { addSuffix: true, includeSeconds: true })}</span>
          </label>
          <button label="Button" type='button' className="icon icon-edit" />
          <button label="Button"  type='button' className="icon icon-destroy"
                  onClick={ oneDeleted } />
        </div>
      </li>
    )
  }

Task.defaultProps = {
  label:() => {},
  timeOut: () => {},
  oneDeleted: () => {},
  onToggleDone: () => {},
  done: '',
}

Task.propTypes = {
  label: PropTypes.func,
  timeOut: PropTypes.func,
  oneDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.string,
}

export default Task;