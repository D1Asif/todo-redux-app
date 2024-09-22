import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    _id: string;
    title: string;
    description: string,
    isCompleted?: boolean,
    priority: string
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({...action.payload, isCompleted: false});
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.map((item) => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
        }
    }
})

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;