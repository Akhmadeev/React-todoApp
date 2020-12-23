import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TasksFilter extends Component {

  buttons = [
    {name: "all", label: "All"},
    {name: "active", label: "Active"},
    {name: "done", label: "Done"},
  ]

  render() {

    const { filter, onFilterChange } = this.props;

    const  buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classFilter = isActive ? 'selected' : '';
      return (
        <li key={ name }>
          <button type='button'
                  className={ classFilter }
                  onClick={ () => onFilterChange(name) }>{ label }</button>
        </li>
      )
    })

    return (
      <ul className="filters">
        { buttons }
        {/* <li>
          <button className={className} 
                  >All</button>
        </li>
        <li>
          <button className={className}
                  >Active</button>
        </li>
        <li>
          <button className={className}
                  >Completed</button>
        </li> */}
      </ul>
    )
  }
};

TasksFilter.defaultProps = {
  filter: '',
  onFilterChange: () => {}
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func
}