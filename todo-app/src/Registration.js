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
    　const add_task = document.getElementById('task').value
      const tasks = this.state.task
      tasks.push(add_task)
      ReactDOM.render(
          <React.Fragment>
              {tasks.map((task) =>
                <List task={task} />
              )}
          </React.Fragment>,
          document.getElementById('tasks')
      )
      
    }

    render() {
        return(
            <form>
                <label htmlFor="task">TODO</label>
                <input type="text" id="task" name="task" />
                <button type="button" onClick={this.add}>追加</button>
                <div id="tasks"></div>
            </form>
        )
    }
}