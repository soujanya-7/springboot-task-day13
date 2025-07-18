import React, { useState } from 'react';

const AssignTask = ({ employees, onAssign }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEmployee && taskDescription) {
      onAssign(selectedEmployee, taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <div className="assign-container">
      <h2>Assign Task</h2>
      <form className="assign-form" onSubmit={handleSubmit}>
        <div>
          <label>Select Employee:</label>
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Task Description:</label>
          <textarea
            rows="4"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default AssignTask;
