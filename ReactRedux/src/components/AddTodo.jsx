import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new todo..."
                    className="flex-1 px-4 py-2 border rounded"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
        </form>
    );
};


export default AddTodo
