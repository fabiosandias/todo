import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoContext from './components/contexts/TodoContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';

const App = () => (
  <>
    <TodoContext>
      <BrowserRouter>

        <div className="uk-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route path="/create" component={AddTodo} />
          </Switch>
        </div>
      </BrowserRouter>
    </TodoContext>
  </>
);

export default App;