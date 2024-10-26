import React, { useState } from 'react';

const AdminDashboard = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      description,
      date,
      assignedTo,
      category,
    };

    console.log('New Task:', newTask); // Handle the new task submission
    // Here you can add logic to send the task to your backend or store it in state

    // Reset form fields
    setTaskTitle('');
    setDescription('');
    setDate('');
    setAssignedTo('');
    setCategory('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Create Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="taskTitle">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="date">
            Due Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="assignedTo">
            Assigned To
          </label>
          <input
            type="text"
            id="assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Urgent">Urgent</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
