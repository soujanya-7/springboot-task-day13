// src/components/EmployeeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Employee List</h1>
      <input
        type="text"
        placeholder="Search by employee name..."
        className="border p-2 w-full mb-4"
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="text-center border-t">
              <td>{emp.id}</td>
              <td>
                <Link className="text-blue-600 underline" to={`/tasks/${emp.name}`}>
                  {emp.name}
                </Link>
              </td>
              <td>{emp.email}</td>
              <td>
                <button
                  className="bg-red-500 text-white px-3 py-1 m-1"
                  onClick={() => onDelete(emp.id)}
                >
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 m-1">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
