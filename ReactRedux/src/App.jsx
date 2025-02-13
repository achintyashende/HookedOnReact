import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <AddTodo />
        <TodoFilter />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;