// src/components/TaskList.js
import React from 'react';
import { useParams } from 'react-router-dom';

const taskData = {
  Vijay: [
    {
      task: 'Complete the front end for ems',
      status: 'No status',
    },
  ],
  // Add more employee tasks here if needed
};

const TaskList = () => {
  const { name } = useParams();
  const tasks = taskData[name] || [];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tasks for {name}</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={index} className="text-center border-t">
              <td>{t.task}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
