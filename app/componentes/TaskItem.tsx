import React, { useState } from 'react';

interface TaskItemProps {
  task: { id: number; title: string };
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
  
    const handleEdit = () => {
      if (isEditing) {
        onEdit(task.id, newTitle);
      }
      setIsEditing(!isEditing);
    };
  
    return (
      <div className="flex items-center justify-between p-4 border-b">
        {isEditing ? (
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            className="p-2 border rounded"
          />
        ) : (
          <span>{task.title}</span>
        )}
        <div>
          <button onClick={handleEdit} className="mr-2 p-2 bg-blue-500 text-white rounded">
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button onClick={() => onDelete(task.id)} className="p-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TaskItem;