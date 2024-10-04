import { useState } from "react";
import ActionButton from "./ActionButton";
import "./TodoContent.css";

export default function TodoContent({ javascriptPass, todosDispatch }) {
  const { title, completed, id } = javascriptPass;
  console.log(javascriptPass)
  const [status, setState]=useState(completed)
  return (
    <div className="container">
      <input type="checkbox"  checked={status} onChange= {(e) => setState(e.target.checked) }/>
      <p>{title}</p>
      <button>Edit</button>
      <button
        onClick={() => todosDispatch({ type: "delete-todo", payload: { id } })}
      >
        Delete
      </button>
    </div>
  );
}

// javascriptPass= {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
