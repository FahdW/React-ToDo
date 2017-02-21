import React from 'react';

export default class Todo extends React.Component {

  render () {
    var {id, text, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
}
