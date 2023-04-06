import React, { useState } from 'react';
import CC1 from './CC1';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task.css"

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function handleDeleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" value={newTask} id="input1" placeholder='Add a task' onChange={handleInputChange} />
        <button class="cssbuttons-io-button" id='button'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path>
  <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z">
    </path></svg>Add Tasks</button>
      </form>
      <ul id='ul'>
        {tasks.map((task, index) => (
          <CC1
            key={index}
            description={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
