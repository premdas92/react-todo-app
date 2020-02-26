import React, { Component } from "react";
import "./Todo.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
      isAddButtonClicked: false
    };
  }
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  addTask = e => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term],
      isAddButtonClicked: true,
      term: ""
    });
  };
  deleteTask = data => {
    let newTask = this.state.items.filter(function(value) {
      return value !== data;
    });
    this.setState({ items: newTask });
  };
  render() {
    console.log(this.state.items);
    return (
      <section className="todo-wrapper">
        <div className="inner-wrapper">
          <header>TODOs</header>
          <div className="input-add-wrapper">
            <input
              type="text"
              name="task"
              placeholder="Enter your task here..."
              value={this.state.term}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="add-task btn-animation"
              onClick={this.addTask}>
              ADD
            </button>
          </div>
          {this.state.isAddButtonClicked && (
            <div className="tasks-list-block">
              {this.state.items.map((data, index) => {
                return (
                  <div className="task-wrapper" key={index}>
                    <div className="task-name">{data}</div>
                    <div className="buttons-wrapper">
                      <button
                        className="delete-task edit-btn btn-animation"
                        onClick={() => this.deleteTask(data)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Todo;
