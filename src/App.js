import React, { Component } from "react";
import FormInput from "./Components/FormInput/FormInput";
import TaskList from "./Components/TaskList/TaskList";
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  addTask = (newTask) => {
      this.setState({
        list: [...this.state.list,
          { id: Math.random(), task: newTask, isDone: false }]
        
    
    })
  }

  completeTask = (idTask) => {
    this.setState({
      list: this.state.list.map(elt =>
        elt.id === idTask ? { ...elt, isDone: !elt.isDone } : elt
      )
    });
  };
  deleteTask = (idTask) => {
    this.setState({ list: this.state.list.filter(elt => elt.id !== idTask) });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">TO DO APP</h1>
        <FormInput addTask={this.addTask} />
        <TaskList taskList={this.state.list} deleteTask={this.deleteTask} complete={this.completeTask} />
      </div>
    );
  }
}
