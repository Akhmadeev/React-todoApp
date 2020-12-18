import React, {Component} from 'react';
import TasksFilter from '../task-filter/';
export default class Footer extends Component  {

  render() {
    const {doneCount, allDelet, newAllList, newActiveList, newCompletedList} = this.props;

    return (
      <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <TasksFilter newAllList={newAllList}
                  newActiveList={newActiveList}
                  newCompletedList={newCompletedList}></TasksFilter>
      <button className="clear-completed" onClick={allDelet}>Clear completed</button>
    </footer>
    )
  }
};
