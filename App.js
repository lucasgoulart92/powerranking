import './App.css';
import logoApoka from './img/logo/logoapoka.png';
import Footer from './elements/footer';

import { Link } from 'react-router-dom';

// importando a lista de times
import times from './Teams';

function App() {

  return (
    <div className="App">
      <img className="logo-apoka" src={logoApoka}/>
      <ol className="team-list">
        {times.map(time => (
          <li key={time}>
            <img className="time-logo" src={time.avatarUrl}/>
            {time.nome}
          </li>
        ))}
      </ol>
      <Footer/>
    </div>
  );
}

export default App;
