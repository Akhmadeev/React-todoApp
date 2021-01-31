import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minuts: null,
    seconds: null,
  };

  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  componentDidUpdate() {}

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onMinutsChange = (event) => {
    this.setState({
      minuts: event.target.value,
    });
  };

  onSexondsChange = (event) => {
    this.setState({
      seconds: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { label, minuts, seconds } = this.state;
    const { addItem } = this.props;
    event.preventDefault();
    if (label && minuts && seconds) addItem(label, minuts, seconds);
    this.setState({
      label: '',
      minuts: null,
      seconds: null,
    });
  };

  render() {
    const { label } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit} className="new-todo-form">
          <input
            className="new-todo"
            required
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}
          />
          <input type="submit" className="none" />
          <input
            className="new-todo-form__timer"
            required
            placeholder="Min"
            onChange={this.onMinutsChange}
            type="number"
            min={0}
            max={60}
          />
          <input
            className="new-todo-form__timer"
            required
            placeholder="Sec"
            onChange={this.onSexondsChange}
            type="number"
            min={0}
            max={60}
          />
        </form>
      </header>
    );
  }
}
