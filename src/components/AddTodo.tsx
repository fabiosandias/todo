import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { Container } from './styles';
import { TodoContextType } from './contexts/TodoContextType';
import { TodoContext } from './contexts/TodoContext';

interface IFormInputs {
  task: string
}

const schema = yup.object().shape({
  task: yup.string().required('Esse campo é requedifo!').email('E-mail invalido!')
});


const AddTodo: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const { addTodo } = useContext<TodoContextType>(TodoContext);


  const onSubmit = (data: IFormInputs, e: any) => {
    addTodo(data.task);
    e.target.reset();
    window.location.href = '/';

  };

  return (
    <form onSubmit={handleSubmit<IFormInputs>(onSubmit)}>
      <input type="text" name="task" ref={register} />
      {errors.task?.message}

      <input type="submit" value="Salvar" />
    </form>
  );
}

export default AddTodo;