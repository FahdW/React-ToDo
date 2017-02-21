import React from 'react';

export default class AddTodo extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input ref="todoText" type="text" />
          <button className="button expanded">Add Todo</button>
        </form>
    </div>
    );
  }

}
