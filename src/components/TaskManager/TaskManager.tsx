"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

const TaskManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [tasks1, setTasks1] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskIndex1, setEditingTaskIndex1] = useState(null);
  const [editingTaskIndex2, setEditingTaskIndex2] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setInputValue("");
    setEditingTaskIndex(null);
  };

  const handleClose1 = () => {
    setShowModal1(false);
    setInputValue1("");
    setEditingTaskIndex1(null);
  };

  const handleClose2 = () => {
    setShowModal2(false);
    setInputValue2("");
    setEditingTaskIndex2(null);
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
    setInputValue("");
    setShowModal(false);
  };

  const handleButton1 = (e) => {
    e.preventDefault();
    if (editingTaskIndex1 !== null) {
      const updatedTasks1 = tasks1.map((task1, index) =>
        index === editingTaskIndex1 ? inputValue1 : task1
      );
      setTasks1(updatedTasks1);
      setEditingTaskIndex1(null);
    } else {
      setTasks1([...tasks1, inputValue1]);
    }
    setInputValue1("");
    setShowModal1(false);
  };

  const handleButton2 = (e) => {
    e.preventDefault();
    if (editingTaskIndex2 !== null) {
      const updatedTasks2 = tasks2.map((task2, index) =>
        index === editingTaskIndex2 ? inputValue2 : task2
      );
      setTasks2(updatedTasks2);
      setEditingTaskIndex2(null);
    } else {
      setTasks2([...tasks2, inputValue2]);
    }
    setInputValue2("");
    setShowModal2(false);
  };

  const handleEdit = (index) => {
    setEditingTaskIndex(index);
    setInputValue(tasks[index]);
    setShowModal(true);
  };

  const handleEdit1 = (index) => {
    setEditingTaskIndex1(index);
    setInputValue1(tasks[index]);
    setShowModal1(true);
  };

  const handleEdit2 = (index) => {
    setEditingTaskIndex2(index);
    setInputValue2(tasks[index]);
    setShowModal2(true);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleDelete1 = (index) => {
    const updatedTasks1 = tasks1.filter(
      (_, taskIndex1) => taskIndex1 !== index
    );
    setTasks1(updatedTasks1);
  };

  const handleDelete2 = (index) => {
    const updatedTasks2 = tasks2.filter(
      (_, taskIndex2) => taskIndex2 !== index
    );
    setTasks2(updatedTasks2);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  return (
    <div>
      <h1 className="text-[2rem] text-center text-gray-500 pb-[200px]">
        MY FORM TASK PAGE
      </h1>
      <div className=" flex  items-center  gap-4 w-[200px] h-[200px] pl-[300px] ">
        <div className="card-body rounded bg-gray-500 flex  items-center gap-4 p-[100px]">
          <h1 className="text-[2rem] text-white font-bold mt-[-80px]">Today</h1>

          <ul className="mt-[80px]">
            {tasks.map((task, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-white capitalize font-bold text-[1.3rem]">
                  {task}
                </span>
                <div className="flex items-center gap-4 pl-[20px]">
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn w-[80px]"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[90px] flex justify-center">
            <button
              className="btn py-2 px-5 bg-blue-500 text-white rounded"
              onClick={() => setShowModal(true)}
            >
              Add +
            </button>
          </div>
        </div>

        {/* progress */}
        <div className="card-body rounded bg-gray-500 flex items-center gap-4 p-[100px]">
          <h1 className="text-[2rem] text-white font-bold  mt-[-80px]">
            Progress
          </h1>

          <ul className="mt-[80px]">
            {tasks1.map((task1, index1) => (
              <li key={index1} className="flex justify-between">
                <span className="text-white capitalize font-bold text-[1.3rem]">
                  {task1}
                </span>
                <div className="flex items-center gap-4 pl-[20px]">
                  <button
                    onClick={() => handleEdit1(index1)}
                    className="btn w-[80px]"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete1(index1)} className="btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[90px] flex justify-center">
            <button
              className="btn py-2 px-5  bg-blue-500 text-white"
              onClick={() => setShowModal1(true)}
            >
              Add +
            </button>
          </div>
        </div>

        {/* complete */}
        <div className="card-body rounded bg-gray-500 flex items-center gap-4 p-[100px]">
          <h1 className="text-[2rem] text-white font-bold  mt-[-80px]">
            Complete
          </h1>

          <ul className="mt-[80px]">
            {tasks2.map((task2, index2) => (
              <li key={index2} className="flex justify-between">
                <span className="text-white capitalize font-bold text-[1.3rem]">
                  {task2}
                </span>
                <div className="flex items-center gap-4 pl-[20px]">
                  <button
                    onClick={() => handleEdit2(index2)}
                    className="btn w-[80px]"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete2(index2)} className="btn">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[90px] flex justify-center">
            <button
              className="btn py-2 px-5  bg-blue-500 text-white"
              onClick={() => setShowModal2(true)}
            >
              Add +
            </button>
          </div>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={handleClose}>
        <h1>{editingTaskIndex !== null ? "Edit Task" : "Today"}</h1>
        <form
          className="flex items-center justify-center gap-3"
          onSubmit={handleButton}
        >
          <input
            type="text"
            name="Add-Task"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add Task"
            className="border outline-blue-500 border-blue-500 rounded p-[10px]"
          />
          <button type="submit" className="btn">
            {editingTaskIndex !== null ? "Update" : "Add"}
          </button>
        </form>
      </Modal>

      <Modal isVisible={showModal1} onClose={handleClose1}>
        <h1>{editingTaskIndex1 !== null ? "Edit Task" : "Progress"}</h1>
        <form
          className="flex items-center justify-center gap-3"
          onSubmit={handleButton1}
        >
          <input
            type="text"
            name="Add-Task"
            value={inputValue1}
            onChange={handleInputChange1}
            placeholder="Add Task"
            className="border outline-blue-500 border-blue-500 rounded p-[10px]"
          />
          <button type="submit" className="btn">
            {editingTaskIndex1 !== null ? "Update" : "Add"}
          </button>
        </form>
      </Modal>

      <Modal isVisible={showModal2} onClose={handleClose2}>
        <h1>{editingTaskIndex2 !== null ? "Edit Task" : "Complete"}</h1>
        <form
          className="flex items-center justify-center gap-3"
          onSubmit={handleButton2}
        >
          <input
            type="text"
            name="Add-Task"
            value={inputValue2}
            onChange={handleInputChange2}
            placeholder="Add Task"
            className="border outline-blue-500 border-blue-500 rounded p-[10px]"
          />
          <button type="submit" className="btn">
            {editingTaskIndex2 !== null ? "Update" : "Add"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TaskManager;
