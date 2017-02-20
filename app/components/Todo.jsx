import React from 'react';

export default class Todo extends React.Component {
  render () {
    var {text, id} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    );
  }
}
