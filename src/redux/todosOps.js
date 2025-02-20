//https://67b741dc2bddacfb270e55b6.mockapi.io/tasks

import axios from "axios";
import { fetchDataSuccess, setIsError, setIsLoading } from "./todoSlice";
export const fetchData = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      "https://67b741dc2bddacfb270e55b6.mockapi.io/tasks"
    );
    dispatch(fetchDataSuccess(response.data));
  } catch {
    dispatch(setIsError(true));
  } finally {
    dispatch(setIsLoading(false));
  }
};
