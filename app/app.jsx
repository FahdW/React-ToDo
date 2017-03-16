import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

var actions = require('actions');
// import actions from 'actions'
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// Load foundation
$('document').foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
