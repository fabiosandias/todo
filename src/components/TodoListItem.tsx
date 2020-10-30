import React, { useContext, useState } from 'react';

// import { Container } from './styles';
import { Todo } from '../models/Todo';
import { TodoContextType } from './contexts/TodoContextType';
import { TodoContext } from './contexts/TodoContext';
import { get } from '../services/TodoSevices';



interface TodoListItemProps {
  todo: Todo
}

const TodoListItem = ({ todo }: TodoListItemProps) => {

  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  }

  const handleChange = (): void => {
    toggle(todo)
  }

  return (
    <>
      <tr className="uk-animation-slide-bottom-mendium" key={todo.id}>
        <td className="uk-with-auto">
          <label>
            <input
              className="uk-checkbox"
              type="checkbox"
              onChange={handleChange}
              checked={todo.done}
            />
          </label>
        </td>
        <td className="uk-with-expand">{todo.title}</td>
        <td className="uk-with-auto">
          <button
            className="uk-icon-button uk-button-danger"
            uk-icon="trash"
            onClick={() => onRemove(todo)}
          >
            Deletar
            </button>
        </td>
      </tr>
    </>
  );
}

export default TodoListItem;