import React, {Component} from 'react';

export default class TasksFilter extends Component {

  

  render() {

    const {newAllList, newActiveList, newCompletedList, important} = this.props;

    let className = '';
    if(important) className += 'selected';

    return (
      <ul className="filters">
        <li>
          <button className={className} 
                  onClick={newAllList}>All</button>
        </li>
        <li>
          <button className={className}
                  onClick={newActiveList}>Active</button>
        </li>
        <li>
          <button className={className}
                  onClick={newCompletedList}>Completed</button>
        </li>
      </ul>
    )
  }
};

