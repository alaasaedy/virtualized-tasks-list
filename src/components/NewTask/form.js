import { useState } from 'react';
import './styles.css';

const NewTaskForm = ({ setNewTasks, setNewTaskFormOpen }) => {
  const [taskData, setTaskData] = useState({
    subject: '',
    priority: 'low',
    status: 'pending',
    description: '',
  });

  const handleFormStateChange = (e) => {
    setTaskData((_prevState) => {
      return {
        ..._prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log({ taskData });

  const handleNewTaskSubmit = (e) => {
    console.log('here');
    e.preventDefault();
    setNewTasks((_prevTasks) => [..._prevTasks, taskData]);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleNewTaskSubmit} className='editing-form'>
        <h3 className='form-title'>Add New Task</h3>
        <button className='close' onClick={() => setNewTaskFormOpen(false)}>
          x
        </button>
        <div className='form-control'>
          <label>Task Title</label>
          <input
            value={taskData.title}
            onChange={handleFormStateChange}
            type='text'
            name='subject'
          />
        </div>
        <div className='form-control'>
          <label>Select Priority</label>
          <select
            defaultValue={taskData.priority}
            onChange={handleFormStateChange}
            name='priority'
          >
            <option>Choose an option</option>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>
        <div className='form-control'>
          <label>Select Status</label>
          <select
            defaultValue={taskData.status}
            onChange={handleFormStateChange}
            name='status'
          >
            <option>Choose an option</option>
            <option value='Pending'>Pending</option>
            <option value='In Proress'>In Progress</option>
          </select>
        </div>
        <div className='form-control'>
          <label>Description</label>
          <input
            value={taskData.description}
            onChange={handleFormStateChange}
            type='text'
            name='description'
          />
        </div>
        <button className='add-new-task-btn'>Add</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
