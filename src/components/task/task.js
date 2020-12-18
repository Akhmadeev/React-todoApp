import React, {Component} from 'react';

export default class Task extends Component {

  render() {
    const {label, timeOut, id, oneDeleted, onToggleImportant, onToggleDone, done} = this.props;


    let className = 'todo-list-item';
    if(done) className += ' completed';

    return (
      <li className={className} key={id}>
        <div className='view'>
          <input className='toggle' type="checkbox" onClick={onToggleDone}></input>
          <label>
            <span className='description'
            >{label}</span>
            <span className='created'>{timeOut}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
                  onClick={oneDeleted}></button>
        </div>
      </li>
    )
  }
};