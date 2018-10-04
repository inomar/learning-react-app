import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';

export default class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            task: [],
        }
        this.add = this.add.bind(this)
    }

    add() {
    　const add_task = document.getElementById('addTask').value
      document.getElementById('addTask').value = ''
      const tasks = this.state.task
      tasks.push(add_task)
      
      ReactDOM.render(
          <React.Fragment>
              {tasks.map((task, index) =>
                <List task={task} key={index} />
              )}
          </React.Fragment>,
          document.getElementById('tasks')
      )
      
    }

    render() {
        return(
            <React.Fragment>
                <form>
                    <label htmlFor="task">TODO</label>
                    <input type="text" id="addTask" name="addTask" />
                    <button type="button" onClick={this.add}>追加</button>
                </form>
                <form>
                    <ul id="tasks"></ul>
                </form>
            </React.Fragment>
        )
    }
}