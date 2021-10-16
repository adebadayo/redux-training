import React from "react";
import { Provider} from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";
import { tasksReducer } from "./reducers/tasks";
import TodoApp from "./containers/TodoApp";
import {BrowserRouter as Router, Route} from "react-router-dom";

const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={TodoApp}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);