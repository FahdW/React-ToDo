import expect from 'expect';
import df from 'deep-freeze-strict';
import * as reducers from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Test searchText'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompeletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: '131141',
          text: 'something',
          completed: false,
          createdAt: 243131
        }
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      let todos = [{
        id: '123',
        text: 'Test',
        completed: true,
        createdAt: 142,
        completedAt: 1651
      }];
      let updates = {
        completed: false,
        completedAt: null
      };
      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
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
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should remove todos on LOGOUT', () => {
      let todos = [{
        id: '11',
        text: 'something',
        completed: false,
        completedAt: undefined,
        createdAt: 33999
      }];
      let action = {
        type: 'LOGOUT'
      };
      let res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(0);
    });

    describe('authReducer', () => {
      it('should login and set uid', () => {
        let action = {
          type: 'LOGIN',
          uid: '13242'
        };

        let res = reducers.authReducer(df({}), df(action));

        expect(res.uid).toEqual(action.uid);
      });

      it('should logout and unset uid', () => {
        let state = {
          uid: '2424'
        };

        let action = {
          type: 'LOGOUT'
        };

        let res = reducers.authReducer(df(state), df(action));

        expect(res.uid).toNotExist();
      });
    });
  });
});
