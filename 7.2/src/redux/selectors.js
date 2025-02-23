//counter

import { createSelector } from "@reduxjs/toolkit";

// //todos
export const selectTodos = (state) => state.todos.items;

//filter
export const selectFilter = (state) => state.filter.filter;
export const selectStatus = (state) => state.filter.status;
export const selectVisibilityTaskByStatus = (state) => {
  console.log("filter status logic");

  const todos = selectTodos(state);
  const taskStatus = selectStatus(state);
  switch (taskStatus) {
    case "active":
      return todos.filter((item) => !item.completed);
    case "completed":
      return todos.filter((item) => item.completed);
    default:
      return todos;
  }
};
export const selectVisibilityTaskByStatusMemo = createSelector(
  [selectStatus, selectTodos],
  (taskStatus, todos) => {
    console.log("filter status logic");

    switch (taskStatus) {
      case "active":
        return todos.filter((item) => !item.completed);
      case "completed":
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  }
);

export const SelectUncompletedTodosMemo = createSelector(
  [selectTodos],
  (todos) => {
    console.log("UNCOMPLETED LOGIC");
    return todos.reduce(
      (total, curr) => (curr.completed ? total : total + 1),
      0
    );
  }
);

export const SelectUncompletedTodos = (state) => {
  console.log("UNCOMPLETED LOGIC");
  const todos = selectTodos(state);
  return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
};
