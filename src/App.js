import { useState } from 'react';
import Window from './components/Window/window';
import { truncateStr } from './utils';
import TasksList from './MOCK_DATA.json';
import NewTaskForm from './components/NewTask/form';
import './index.css';

const App = () => {
  const [newTasks, setNewTasks] = useState(() => TasksList);
  const [newTaskFormOpen, setNewTaskFormOpen] = useState(false);

  console.log({ newTasks });

  return (
    <>
      {newTaskFormOpen && (
        <NewTaskForm
          setNewTasks={setNewTasks}
          setNewTaskFormOpen={setNewTaskFormOpen}
        />
      )}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
        }}
      ></div>
      <div className='app'>
        <h1 className='title'>
          Tasks List{' '}
          <button className='add-new' onClick={() => setNewTaskFormOpen(true)}>
            Add
          </button>
        </h1>

        <Window rowHeight={200}>
          {newTasks
            .map((task, index) => ({
              id: index,
              title: task.subject,
              priority: task.priority,
              status: task.status,
              description: task.description,
            }))
            .map((item) => {
              let badgeColor;
              switch (item.priority.toLowerCase()) {
                case 'high':
                  badgeColor = 'red';
                  break;
                case 'medium':
                  badgeColor = 'yellow';
                  break;
                default:
                  badgeColor = '';
                  break;
              }

              return (
                <div className='row' key={item.id}>
                  <h4 className='task-title'>
                    {item.title}
                    <span className={`badge ${badgeColor}`}>
                      {item.priority}
                    </span>
                    <span className='status'>{item.status}</span>
                  </h4>
                  <p>{truncateStr(item.description)}</p>
                </div>
              );
            })}
        </Window>
      </div>
    </>
  );
};

export default App;
