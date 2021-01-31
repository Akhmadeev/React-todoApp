import React, { Component } from "react";
import "./app.css";
import Footer from "../footer";
import TaskList from "../task-list/task-list";
import NewTaskForm from "../new-task-form/new-task-form";

export default class App extends Component {
  maxId = 1;

  state = {
    todoItem: [
      this.createTodoItem('Completed task', 0, 0),
      this.createTodoItem('Editing task', 0, 0),
      this.createTodoItem('Active task', 0, 0),
    ],
    filter: 'all',
    timer: 0,
  };

  componentDidMount() {
    this.stopwatch = setInterval(() => {
      
      const { todoItem, timer } = this.state;
      const newArr = todoItem.map((elem) => {
        if(elem.timer) {
          return {
            ...elem, sec: elem.sec + 1
          }
        }
        return elem;
      })
      this.setState({ todoItem: newArr, timer: timer + 1 })
      // todoItem.forEach((element) => {
      //   let timleft;
      //     if (element.timer === true) {
      //       console.log(element.timer);
      //       timleft = element.sec;

      //       this.setState(() => {
      //         const oldItem = element;
              
      //         const newItem = { ...oldItem, sec: timleft + 1 };
      //         const newArr = [...todoItem.slice(0, idx), newItem, ...todoItem.slice(idx + 1)];
      //         return { todoItem: newArr, timer: timer + 1 };
      //       });
      //     }
      // });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.stopwatch);
  }

  deleteItem = (id) => {
    this.setState(({ todoItem }) => {
      const idx = todoItem.findIndex((el) => el.id === id);
      const newArray = [...todoItem.slice(0, idx), ...todoItem.slice(idx + 1)];
      return {
        todoItem: newArray,
      };
    });
  };

  deleteAllTasks = () => {
    this.setState(({ todoItem }) => {
      const idx = todoItem.filter((el) => !el.done);
      return {
        todoItem: idx,
      };
    });
  };

  addItem = (text, min, sec) => {
    const newItem = this.createTodoItem(text, min, sec);
    this.setState(({ todoItem }) => {
      const newArr = [...todoItem, newItem];
      return {
        todoItem: newArr,
      };
    });
  };

  // editNameItem = (id) => {

  //   this.setState(({ todoItem }) => {
  //     const idx = todoItem.findIndex(el => el.id === id)

  //     const oldItem = todoItem[idx];
  //     const newItem = { ...oldItem, label: !!!поменять с input }

  //     const newArr = [...todoItem.slice(0, idx), newItem, ...todoItem.slice(idx + 1)]

  //     return {
  //       todoItem: newArr
  //     }
  //   })

  // }

  editItem = (id, textTask) => {
    console.log(textTask);
    this.setState(({ todoItem }) => ({
      todoItem: this.toggleProperty(todoItem, id, 'important'),
    }));
  };

  startTime = (id) => {
    this.setState(({ todoItem }) => {
      const idx = todoItem.findIndex((el) => el.id === id);
      const oldItem = todoItem[idx];
      const newItem = { ...oldItem, timer: true };
      const newArr = [...todoItem.slice(0, idx), newItem, ...todoItem.slice(idx + 1)];
      return { todoItem: newArr };
    });
  };

  endTime = (id) => {
    this.setState(({ todoItem }) => {
      const idx = todoItem.findIndex((el) => el.id === id);
      const oldItem = todoItem[idx];
      const newItem = { ...oldItem, timer: false };
      const newArr = [...todoItem.slice(0, idx), newItem, ...todoItem.slice(idx + 1)];
      return { todoItem: newArr };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoItem }) => ({
      todoItem: this.toggleProperty(todoItem, id, 'important'),
    }));
  };

  onToggleDone = (id) => {
    this.setState(({ todoItem }) => ({
      todoItem: this.toggleProperty(todoItem, id, 'done'),
    }));
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  createTodoItem(label, min, sec) {
    this.maxId += 1;
    return {
      label,
      min,
      sec,
      timeOut: new Date(),
      id: this.maxId,
      done: false,
      important: false,
      timer: false,
    };
  }

  render() {
    const { todoItem, filter, timer } = this.state;
    const visibleItems = this.filter(todoItem, filter);

    const doneCount = todoItem.filter((el) => !el.done).length;
    return (
      <div className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <h2>Начался Таймер {timer} </h2>
        <TaskList
          todos={visibleItems}
          oneDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          editItem={this.editItem}
          startTime={this.startTime}
          endTime={this.endTime}
        />
        <Footer
          doneCount={doneCount}
          allDelet={this.allDelet}
          filter={this.filter}
          onFilterChange={this.onFilterChange}
        />
      </div>
    );
  }
};