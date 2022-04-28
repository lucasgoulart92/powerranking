import './App.css';
import logoApoka from './img/logo/logoapoka.png';

// importando a lista de times
import times from './Teams';

import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className="App">
      <Header/>
      <img className="logo-apoka" src={logoApoka}/>
      <ol className="team-list" >
        {times.map(time => (
          <li key={time}>
            <img className="time-logo" src={time.avatarUrl}/>
            {time.nome}
          </li>
        ))}
      </ol>
      <button className="resetar-lista" onClick={refreshPage} >Resetar</button>
      <Footer/>
    </div>
  );
}

export default App;