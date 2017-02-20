import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Eat some food'
        },
        {
          id: 3,
          text: 'Another one'
        },
        {
          id: 4,
          text: 'Clean house'
        }
      ]
    };
  }

  handleAddTodo (text) {
    //Get highest id number append text to todo list
    alert('new todo' + text);
  }

  render () {
    let {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
