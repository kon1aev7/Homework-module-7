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
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex !== -1) {
          state.items[itemIndex] = action.payload;
        }
      });
  },
});

export const todoReducer = slice.reducer;
