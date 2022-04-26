import { useState } from 'react';
import './App.css';

function App() {
  const [times, setTimes] = useState([
    'Fúria',
    'Mibr',
    'Imperial',
    'Case Sports',
    '9z',
    'Pain Gaming',
    'godsent',
    '00 nation',
    'team One',
    'são caetano',
    'yng sharks',
    'isurus',
    'leviatan',
    'meta gaming',
    'artic'
  ]);

  return (
    <div className="App">
      <h1>Power Ranking</h1>
      <ol className="team-list">
        {times.map(time => (
          <li key={time}>{time}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
