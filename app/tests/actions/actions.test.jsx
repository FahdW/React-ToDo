import expect from 'expect';
// import {
//   setSearchText
// } from 'actions';
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Something'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'take out garabge'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
    let todos = [{
      id: '11',
      text: 'something',
      completed: false,
      completedAt: undefined,
      createdAt: 33999
    }];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let res = actions.addTodos(todos);

    expect(res).toEqual(action);
  })

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
