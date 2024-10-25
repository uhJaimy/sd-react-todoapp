import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [draggedTask, setDraggedTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTaskName) return;
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      description: newTaskDesc,
      highPriority: false,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName('');
    setNewTaskDesc('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const togglePriority = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, highPriority: !task.highPriority } : task));
  };

  const toggleCompleted = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (droppedOnTask) => {
    const reorderedTasks = tasks.filter(t => t.id !== draggedTask.id);
    const dropIndex = reorderedTasks.findIndex(t => t.id === droppedOnTask.id);
    reorderedTasks.splice(dropIndex, 0, draggedTask);

    setTasks(reorderedTasks);
    setDraggedTask(null);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <div className="actions">
        <div className="add">
          <textarea
            placeholder='Task Name'
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <textarea
            placeholder='Task Description'
            value={newTaskDesc}
            onChange={(e) => setNewTaskDesc(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <div className="categories">
        <div className="tasks high">
          <h2>High priority tasks</h2>
          {tasks.filter(task => task.highPriority && !task.completed).map(task => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
              onDrop={() => handleDrop(task)}
              onDragOver={(e) => e.preventDefault()}
            >
              <h3>{task.name}</h3>
              <p className="description">{task.description}</p>
              <div className="buttons">
                <button onClick={() => toggleCompleted(task.id)}>Complete</button>
                <button onClick={() => togglePriority(task.id)}>Toggle Priority</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="tasks normal">
          <h2>Regular tasks</h2>
          {tasks.filter(task => !task.highPriority && !task.completed).map(task => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
              onDrop={() => handleDrop(task)}
              onDragOver={(e) => e.preventDefault()}
            >
              <h3>{task.name}</h3>
              <p className="description">{task.description}</p>
              <div className="buttons">
                <button onClick={() => toggleCompleted(task.id)}>Complete</button>
                <button onClick={() => togglePriority(task.id)}>Toggle Priority</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="tasks completed">
          <h2>Completed tasks</h2>
          {tasks.filter(task => task.completed).map(task => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
              onDrop={() => handleDrop(task)}
              onDragOver={(e) => e.preventDefault()}
            >
              <h3>{task.name}</h3>
              <p className="description">{task.description}</p>
              <div className="buttons">
                <button onClick={() => toggleCompleted(task.id)}>Uncomplete</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
