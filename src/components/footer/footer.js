import React from "react";
import PropTypes from 'prop-types';
import TasksFilter from "../task-filter";

const Footer = ({doneCount, onFilterChange, filter, allDelet, newAllList, newActiveList, newCompletedList}) =>  (
      <div className="footer">
        <span className="todo-count">{ doneCount } items left</span>
        <TasksFilter newAllList={ newAllList }
                    newActiveList={ newActiveList }
                    newCompletedList={ newCompletedList }
                    filter={ filter }
                    onFilterChange={ onFilterChange } />
        <button  type='button' className="clear-completed" onClick={ allDelet }>Clear completed</button>
      </div>
    )

  Footer.defaultProps = {
    doneCount: 0,
    onFilterChange: () => {},
    filter: () => {},
    allDelet: () => {},
    newAllList: () => {},
    newActiveList: () => {},
    newCompletedList: () => {}
  };

  Footer.propTypes = {
    doneCount: PropTypes.number,
    onFilterChange: PropTypes.func,
    filter: PropTypes.func,
    allDelet: PropTypes.func,
    newAllList: PropTypes.func,
    newActiveList: PropTypes.func,
    newCompletedList: PropTypes.func
  }

export default Footer;


