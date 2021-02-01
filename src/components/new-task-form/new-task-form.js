import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minuts: '',
    seconds: '',
  };

  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

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
    return this.setState({
      label: '',
      minuts: '',
      seconds: '',
    });
  };

  render() {
    const { label, minuts, seconds } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(event) => {
            this.onSubmit(event);
          }}
          className="new-todo-form"
        >
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
            value={minuts}
          />
          <input
            className="new-todo-form__timer"
            required
            placeholder="Sec"
            onChange={this.onSexondsChange}
            type="number"
            min={0}
            max={60}
            value={seconds}
          />
        </form>
      </header>
    );
  }
}
