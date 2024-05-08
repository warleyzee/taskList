import React, { Component } from 'react';

//form
import { FaPlus } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };
  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if(!tasks) return;

    this.setState({tasks});
  }

  componentDidUpdate(prevProps, prevState){
    const { tasks } = this.state;

    if(tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }
  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    })
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className='main'>
        <h1> TASK LIST </h1>
        <form onSubmit={this.handleSubmit} action="#" className='form'>
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((tasks, index) => (
            <li key={tasks}>
              {tasks}
              <span>
                <FaEdit className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

