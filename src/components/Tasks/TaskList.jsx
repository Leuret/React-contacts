import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../../slices/tasks/tasksSlice';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {
        tasks.length > 0
        ?
        <div className="tasklist">
          <div className="display-tasks">
            <h3>Your tasks:</h3>
            <ul className="tasks">
              {tasks.map((task) => (
                <li className="task" key={task.id}>
                  {task.text}
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