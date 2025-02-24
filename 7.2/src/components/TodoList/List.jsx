import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import s from "./TodoList.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import TodoForm from "../TodoForm";
import { editTodo } from "../../redux/todosOps";
import { selectVisibilityTaskByStatusMemo } from "../../redux/selectors";

export const List = () => {
  const todos = useSelector(selectVisibilityTaskByStatusMemo);

  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <Item
          {...item}
          key={item.id}
          edit={() => {
            setItem(item);
            setIsOpen(true);
          }}
        />
      ))}
      {isOpen && (
        <Modal>
          <TodoForm
            initialValues={item}
            handleSubmit={(values) => {
              dispatch(editTodo({ ...item, ...values }));
              setIsOpen(false);
            }}
          />
        </Modal>
      )}
    </ul>
  );
};
