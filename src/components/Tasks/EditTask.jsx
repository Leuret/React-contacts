import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { editTask } from "../../slices/tasks/tasksSlice"
import './Tasks.css'
import { Link, useNavigate } from "react-router-dom"

const EditTask = () => {

  const { id } = useParams()
  const {tasks} = useSelector(state => state.tasks);
  const task = tasks[id - 1]
  const dispatch = useDispatch();  
  const navigate = useNavigate();

  const handleEdit = (id, title, newStatus) => {
    const status= newStatus==="true"?true:false
    dispatch(editTask({id,title,status}))
    navigate("/tasks")
  };

  const [title, setTitle] = useState(task.title)
  const [status, setStatus] = useState(task.completed)
  const handlerTitle = event => setTitle(event.target.value)
  const handlerStatus = event => setStatus(event.target.value)


  return (
    <div>
      <div>
        <input type="text" id="title" name="title" defaultValue={title} onChange={handlerTitle}/>
        <select name="status" id="status" defaultValue={status} onChange={handlerStatus}>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </div>
      <button>
        <Link to={`/tasks`}>
          <span>Cancel</span>
        </Link>
      </button>
      <button onClick={() => handleEdit(task.id, title, status)}>Edit task</button>
    </div>
  );
};

export default EditTask;