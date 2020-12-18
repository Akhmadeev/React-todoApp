import React, {Component} from 'react';


export default class NewTaskForm extends Component {

  state = {
    label: '',
  }

  onLavelChange = (e) => {

    this.setState({
      label: e.target.value
    })
  };


  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.label) this.props.addItem(this.state.label);
    else this.props.addItem('(no name)')
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <header className="header">
        <form onSubmit={this.onSubmit}>
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" 
          onChange={this.onLavelChange}
          value={this.state.label}></input>
        </form>
      </header>
    )
  }
}