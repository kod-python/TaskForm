"use client"
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const TaskManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setInputValue('');
    setEditingTaskIndex(null);
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (editingTaskIndex !== null) {
      const updatedTasks = tasks.map((task, index) => 
        index === editingTaskIndex ? inputValue : task
      );
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
    } else {
      setTasks([...tasks, inputValue]);
    }
    setInputValue('');
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setEditingTaskIndex(index);
    setInputValue(tasks[index]);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Today</button>
      <button onClick={() => setShowModal(true)}>progress</button>
      <button onClick={() => setShowModal(true)}>Complete</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between">
            <span>{task}</span>
            <div>
              <button onClick={() => handleEdit(index)} className="btn">Edit</button>
              <button onClick={() => handleDelete(index)} className="btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Modal isVisible={showModal} onClose={handleClose}>
        <h1>{editingTaskIndex !== null ? 'Edit Task' : 'Today'}</h1>
        <form className="flex items-center justify-center gap-3" onSubmit={handleButton}>
          <input 
            type="text" 
            name="Add-Task" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Add Task" 
            className="border outline-blue-500 border-blue-500 rounded p-[10px]" 
          />
          <button type="submit" className="btn">
            {editingTaskIndex !== null ? 'Update' : 'Add'}
          </button>
        </form>
      </Modal>
    </div>










  );
};

export default TaskManager;
