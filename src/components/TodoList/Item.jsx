import { FaStar } from "react-icons/fa";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { editTodo } from "../../redux/todoSlice";
import { useState } from "react";
import { deleteTodo } from "../../redux/todosOps";

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo);
  return (
    <li className={s.item}>
      <input type="checkbox" checked={isCompleted} />
      <p>
        {editMode ? (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                dispatch(editTodo({ id, todo, value }));
                setEditMode(false);
              }}
            />
          </div>
        ) : (
          <>
            {isFavorite && <FaStar color="gold" />} {todo}
            {""}
          </>
        )}
      </p>

      <div>
        <button>{isFavorite ? "Dislike" : "Like"}</button>
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
