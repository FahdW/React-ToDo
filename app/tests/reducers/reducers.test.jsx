import expect from 'expect';
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Test searchText'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompeletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo completion', () => {
      var todos = [{
        id: '123',
        text: 'Test',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: todos[0].id
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
    });
  });
});
