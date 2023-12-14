'use client';
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask = { id: Date.now(), title, description };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: number, newTitle: string, newDescription: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle, description: newDescription } : task));
  };

  return (
    <div className="container mx-auto p-4">
      <AddTaskForm onAddTask={addTask} />
      <div className="mt-4">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
