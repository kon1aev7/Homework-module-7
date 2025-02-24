import { useDispatch, useSelector } from "react-redux";
// import { AddForm } from "./AddForm";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import s from "./TodoList.module.css";
import { useEffect, useState } from "react";
import { addTodo, fetchData } from "../../redux/todosOps";
import TodoForm from "../TodoForm";
import Modal from "../Modal/Modal";
import Filter from "./Filter";
import { SelectUncompletedTodosMemo } from "../../redux/selectors";
export const TodoList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const uncompletedTodos = useSelector(SelectUncompletedTodosMemo);
  const handleSubmit = (values, options) => {
    dispatch(addTodo(values));
    setIsOpen(false);
    options.resetForm();
  };
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchData({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      {/* <AddForm /> */}
      <button onClick={() => setIsOpen(true)}>Add</button>
      <SearchBar />
      <Filter />
      <h2>Uncompleted todos:{uncompletedTodos}</h2>
      <List />
      {isOpen && (
        <Modal>
          <TodoForm handleSubmit={handleSubmit} initialValues={{ todo: "" }} />
        </Modal>
      )}
    </div>
  );
};
