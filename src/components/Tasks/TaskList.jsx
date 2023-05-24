import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, deleteTask } from '../../slices/tasks/tasksSlice';
import { Link } from "react-router-dom"

const TaskList = () => {
  const {tasks, loading} = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

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
                  <span>{task.title}</span>
                  {
                    task.completed
                    &&
                    <span className="tag-success">Completed</span>
                  }
                  <button
                    className="delete-btn"
                  >
                    <Link to={`/tasks/edit/${task.id}`}>
                      <span>Edit </span>
                    </Link>
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