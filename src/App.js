import React, { Component } from "react";
import uniqid from "uniqid";
import Form from "./components/Form";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        taskNo: 1,
      },
      tasks: [],
    };

  }

  onChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        taskNo: this.state.task.taskNo,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
        taskNo: this.state.task.taskNo+1,
      },
    });

    document.getElementById('taskInput').value = '';
  };

  onDelete = (id) => {
    const tasks = this.state.tasks.slice();
    const filteredTasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: filteredTasks.map((task, index) => {
        task.taskNo = (index+1);
        return task;
      }),
      task: {
        text: this.state.task.text,
        id: this.state.task.id,
        taskNo: tasks.length,
      }
    });
  };

  onEdit = (edit, id) => {
    const tasks = this.state.tasks.slice();
    
    this.setState({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          return ({
            text: edit,
            id: task.id,
            taskNo: task.taskNo,
          });
        } else {
          return task;
        }
      }),
      task: {
        text: this.state.task.text,
        id: this.state.task.id,
        taskNo: this.state.task.taskNo,
      },
    });
  };

  render() {
    const { tasks } = this.state;
    const formType = 1;

    return (
      <div>
        <Form
          formType={formType}
          _handleSubmit={this.onSubmitTask}
          _handleChange={this.onChange}
        />
        <Overview 
          tasks={tasks}
          _handleDelete={this.onDelete}  
          _handleEdit={this.onEdit}
        />
      </div>
    );
  }
}

export default App;
