import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import "./styles.css";

/*
A todo item should have the following attributes:
- text
- completed
- unique id

Should be able to mark as completed or not
Should be able to delete the todo
*/

export default class Todos extends React.Component {
  state = {
    todos: [
      {
        text: "New todo",
        completed: true,
        id: 12345
      },
      {
        text: "another todo",
        completed: false,
        id: 1456
      }
    ],
    newTodo: {
      text: ""
    }
  };

  handleNewtodo = (e) => {
    e.preventDefault();

    const newTodo = {
      text: this.state.newTodo.text,
      completed: false,
      id: new Date().toString()
    };

    this.setState((currentState) => ({
      todos: [...currentState.todos, newTodo]
    }));
    // Complete the logic
  };

  handleChange = (value) => {
    this.setState({
      newTodo: { text: value }
    });
  };

  handleDelete = (e, id) => {
    // Complete the logic
    this.setState((currentState) => ({
      todos: currentState.todos.filter((t) => t.id !== id)
    }));
  };

  handleCompleteChange = (e, id) => {
    // Complete the logic
    console.log(e);
    this.setState((currentState) => ({
      todos: currentState.todos.map((t) => {
        if (t.id === id) {
          t.completed = !e.target.value;
        }
        return t;
      })
    }));
  };

  render() {
    return (
      <div>
        <NewTodo
          onChange={this.handleChange}
          onSubmit={this.handleNewtodo}
          text={this.state.newTodo.text}
        />
        <TodoList
          todoItems={this.state.todos}
          onCompleteChange={this.handleCompleteChange}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
