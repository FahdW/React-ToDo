import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'do something'
    }, {
      id: 2,
      text: 'check stuff'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todosComponents.length).toBe(todos.length);
  });
});
