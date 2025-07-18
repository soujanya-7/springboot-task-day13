import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import EmployeeList from './components/EmployeeList';
import TaskList from './components/TaskList';
import AssignTask from './components/AssignTask';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Karthik', email: 'karthi@gmail.com' },
    { id: 2, name: 'Vijay', email: 'vijay@gmail.com' },
    { id: 5, name: 'Yugesh G', email: 'yugesh@sece.ac.in' },
    { id: 7, name: 'Thiruneelin', email: 'thiru@email.com' },
    { id: 8, name: 'Sarathi', email: 'sarathi@gmail.com' },
    { id: 9, name: 'Jothi', email: 'jo@gmail.com' },
    { id: 11, name: 'Ben10', email: 'ben10@gmail.com' },
  ]);

  const [tasks, setTasks] = useState({});

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleAssign = (employeeName, taskDescription) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [employeeName]: [
        ...(prevTasks[employeeName] || []),
        { task: taskDescription, status: 'No status' },
      ],
    }));
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="text-xl font-bold">EMS</div>
        <div>
          <Link to="/" className="mx-2">Employees</Link>
          <Link to="/assign" className="mx-2">Assign Task</Link>
          <Link to="/logout" className="mx-2">Logout</Link>
        </div>
      </div>

      {/* Page Routes */}
      <Routes>
        <Route
          path="/"
          element={<EmployeeList employees={employees} onDelete={deleteEmployee} />}
        />
        <Route path="/tasks/:name" element={<TaskList tasks={tasks} />} />
        <Route
          path="/assign"
          element={<AssignTask employees={employees} onAssign={handleAssign} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
