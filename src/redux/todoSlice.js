import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchData } from "./todosOps";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    editTodo: (state, action) => {
      //1) отримати айді і отримати новий текст
      //2) прибігти по масиву
      // 3)Знайти потрібний елемент по айді
      // 4)Поміняти тому елементу тайтл
      const item = state.items.find((item) => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.items = action.payload;
    })
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }).addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
    .addCase(addTodo.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
  },
});

export const todoReducer = slice.reducer;
export const {

  editTodo,
  fetchDataSuccess,
  setIsError,
  setIsLoading,
} = slice.actions;
