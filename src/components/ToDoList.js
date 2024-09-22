import React, { useState } from 'react';

const ToDoList = () => {
  // State for tasks and current command
  const [tasks, setTasks] = useState([]);
  const [command, setCommand] = useState('');

  // Handle adding a task
  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  // Handle removing a task by index
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle toggling task completion
  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Command parsing
  const handleCommandInput = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const [action, ...rest] = command.split(' ');
    const taskText = rest.join(' ');

    switch (action) {
      case 'add':
        handleAddTask(taskText);
        break;
      case 'remove':
        handleRemoveTask(parseInt(taskText) - 1); // Convert index from human-readable to zero-based
        break;
      case 'toggle':
        handleToggleTask(parseInt(taskText) - 1);
        break;
      default:
        alert('Unknown command! Use "add", "remove", or "toggle"');
    }

    // Clear the command input
    setCommand('');
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleCommandSubmit}>
        <input 
          type="text" 
          placeholder="Enter command (add, remove, toggle)" 
          value={command}
          onChange={handleCommandInput}
        />
        <button type="submit">Execute</button>
      </form>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => handleToggleTask(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
