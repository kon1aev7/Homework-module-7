import { useDispatch } from "react-redux";
import { AddForm } from "./AddForm";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import s from "./TodoList.module.css";
import { useEffect } from "react";
import { fetchData } from "../../redux/todosOps";
export const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
    </div>
  );
};
