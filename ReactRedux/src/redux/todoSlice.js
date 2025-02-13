import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        filter: 'ALL' // ALL, ACTIVE, COMPLETED
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.list.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;