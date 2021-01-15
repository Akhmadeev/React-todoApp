import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {

  state = {
    label: '',
  }

  static defaultProps = {
    addItem: () => {}
  };

  static propTypes = {
    addItem: PropTypes.func
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  };


  onSubmit = (event) => {

    const { label} = this.state; 

    const {addItem} = this.props;

    event.preventDefault();
    if(label) addItem(label);
    this.setState({
      label: ''
    })
  }

  render() {

    const { label} = this.state; 
    
    return (
      <header className="header">
        <form onSubmit={this.onSubmit}>
          <h1>todos</h1>
          <input className="new-todo" required placeholder="What needs to be done?" 
          onChange={this.onLabelChange}
          value={label} />
        </form>
      </header>
    )
  }
}