import React from 'react';
import TodoList from 'TodoList';

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
    }
  }
  render () {
    let {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}
