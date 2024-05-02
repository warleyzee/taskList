import React, { Component } from 'react';

//form
import { FaPlus } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [
      'Breackfast',
      'Lunch',
      'Dinner'
    ]
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }
  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className='main'>
        <h1> TASK LIST </h1>
        <form action="#" className='form'>
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
          {tasks.map((tasks) => (
            <li key={tasks}>
              {tasks}
              <div>
              <FaEdit className="edit"/>
              <FaWindowClose className="delete"/>
              </div>
              </li>
          ))}

        </ul>

      </div>
    );
  }
}
