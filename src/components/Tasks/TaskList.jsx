import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, deleteTask, editTask } from '../../slices/tasks/tasksSlice';

const TaskList = () => {
  const {tasks, loading} = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, title, newStatus) => {
    const status= newStatus==="true"?true:false
    dispatch(editTask({id,title,status}));
  };

  const isEditable = false
  const [title, setTitle] = useState()
  const [status, setStatus] = useState()
  const handlerTitle = event => setTitle(event.target.value)
  const handlerStatus = event => setStatus(event.target.value)

  return (
    <div>
      {
        loading
        ?
        <p>Loading...</p>
        :
        tasks.length > 0
        ?
        <div className="tasklist">
          <div className="display-tasks">
            <h3>Your tasks:</h3>
            <ul className="tasks">
              {tasks.map((task) => (
                <li className="task" key={task.id}>
                  {isEditable
                  ?
                    <div>
                      <input type="text" id="title" name="title" defaultValue={task.title} onChange={handlerTitle}/>
                      <select name="status" id="status" onChange={handlerStatus}>
                        <option value="true">Completed</option>
                        <option value="false">Not Completed</option>
                      </select>
                    </div>
                  :
                    <span>{task.title}</span>
                  }
                  {
                    task.completed
                    &&
                    <span className="tag-success">Completed</span>
                  }
                  <button
                    className="delete-btn"
                    onClick={() => handleEdit(task.id, title, status)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        :
        <div>
          <p>There are no tasks.</p>
        </div>
      }
    </div>
  );
};

export default TaskList;