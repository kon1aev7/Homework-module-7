//https://67b741dc2bddacfb270e55b6.mockapi.io/tasks

import axios from "axios";
import { fetchDataSuccess, setIsError, setIsLoading } from "./todoSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL="https://67b741dc2bddacfb270e55b6.mockapi.io"

export const fetchData = createAsyncThunk("todos/fetchData", async (_,thunkAPI) => {
  try {
    const { data } = await axios.get(
      `/tasks`
    );
    return data;

  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);

  }

});


export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id, thunkAPI) => {
  try {
   await axios.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk('todos/addTodo', async (body, thunkAPI) => {
  try {
    const { data } = await axios.post('/tasks', body);
    return data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);

  }
});







// export const fetchData = additional_data => async (dispatch) => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get(
//       "https://67b741dc2bddacfb270e55b6.mockapi.io/tasks"
//     );
//     dispatch(fetchDataSuccess(response.data));
//   } catch {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };
