import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

const TodoList = () => {
    const { list, filter } = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const filteredTodos = list.filter(todo => {
        if (filter === 'ACTIVE') return !todo.completed;
        if (filter === 'COMPLETED') return todo.completed;
        return true;
    });

    return (
        <div className="space-y-2">
            {filteredTodos.map(todo => (
                <div
                    key={todo.id}
                    className="flex items-center justify-between p-3 border rounded"
                >
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                            className="h-4 w-4"
                        />
                        <span
                            className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
                        >
                            {todo.text}
                        </span>
                    </div>
                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList
