import { useDispatch } from "react-redux";
import s from "./TodoList.module.css";
import { FaStar } from "react-icons/fa";
import { deleteTodo, editTodo } from "../../redux/todosOps";

const Item = ({ completed, edit, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(editTodo({ completed: !completed, todo, id }));
  };

  return (
    <li className={s.item}>
      <input type="checkbox" checked={completed} onChange={handleChange} />

      <p>
        {isFavorite && <FaStar color="gold" />} {todo}{" "}
      </p>

      <div>
        <button>{isFavorite ? "Dislike" : "Like"}</button>
        <button onClick={edit}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
