import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";

class Todos extends Component {
  render() {
    return (
      <List as="ul">
        return this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
        );
      </List>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
