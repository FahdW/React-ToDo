import React from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    var {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input ref="todoText" type="text" />
          <button className="button expanded">Add Todo</button>
        </form>
    </div>
    );
  }

}

export default connect()(AddTodo);
