import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    let todos = [{
      id: 1,
      text: 'other text',
      completed: true
    },{
      id: 2,
      text: 'Some text',
      completed: false
    },{
      id: 3,
      text: 'Some text',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return incompleted todos if showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should move completed todos to the bottom of the todolist', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all items if searchText is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
