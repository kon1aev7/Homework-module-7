import { useDispatch } from "react-redux";
import s from "./TodoList.module.css";
import { changeVisibilityStatus } from "../../redux/filterSlice";
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <button onClick={() => dispatch(changeVisibilityStatus("all"))}>
        All
      </button>
      <button onClick={() => dispatch(changeVisibilityStatus("active"))}>
        Active
      </button>
      <button onClick={() => dispatch(changeVisibilityStatus("completed"))}>
        Completed
      </button>
    </div>
  );
};
export default Filter;
