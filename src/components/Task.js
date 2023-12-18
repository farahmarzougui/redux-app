import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTask } from '../app/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleDone = () => {
    dispatch(toggleDone(task.id));
  };

  const handleEditTask = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask({ id: task.id, description: editedDescription }));
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggleDone} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Enregistrer</button>
        </>
      ) : (
        <>
          {task.description}
          <button onClick={() => setIsEditing(true)}>Éditer</button>
        </>
      )}
    </li>
  );
};

export default Task;