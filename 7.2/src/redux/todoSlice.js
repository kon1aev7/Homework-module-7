import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, editTodo, fetchData } from "./todosOps";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.todo = action.payload.todo;
      });
  },
});

export const todoReducer = slice.reducer;
