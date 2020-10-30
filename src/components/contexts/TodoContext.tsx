import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Todo } from '../../models/Todo';
import { TodoContextType } from './TodoContextType';
import { get, save } from '../../services/TodoSevices';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggle: () => { }
});


interface Props {
  children: ReactNode
}

const TodoProvider = ({ children }: Props) => {

  const [todos, setTodos] = useState<Todo[]>(get)

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title: title, done: false };
    setTodos([...todos, todo]);

  }

  const removeTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  }

  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
  }

  useEffect(() => { save(todos) }, [todos]);

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      toggle
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider