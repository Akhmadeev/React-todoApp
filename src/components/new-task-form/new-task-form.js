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

  onLavelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  };


  onSubmit = (event) => {

    const { label} = this.state; 

    const {addItem} = this.props;

    event.preventDefault();
    if(label) addItem(label);
    else addItem('(no name)')
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
          <input className="new-todo" placeholder="What needs to be done?" 
          onChange={this.onLavelChange}
          value={label} />
        </form>
      </header>
    )
  }
}