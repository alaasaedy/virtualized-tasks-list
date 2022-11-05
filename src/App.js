import Window from './components/window';
import { truncateStr } from './utils';
import TasksList from './MOCK_DATA.json';
import './index.css';

const App = () => {
  return (
    <>
      <h1>Tasks List</h1>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
        }}
      ></div>
      <div className='app'>
        <Window rowHeight={200}>
          {TasksList.map((task, index) => ({
            id: index,
            title: task.subject,
            priority: task.priority,
            status: task.status,
            description: task.description,
          })).map((item) => {
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
                  <span className={`badge ${badgeColor}`}>{item.priority}</span>
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
