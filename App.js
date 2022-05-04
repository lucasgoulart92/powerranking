import './App.css';
import logoApoka from './img/logo/logoapoka.png';

// importando a lista de times
import times from './Teams';
import rebaixados from './Rebaixados'

import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  // Drag and Drop
  const draggables = document.querySelectorAll('.draggable');
  const containers = document.querySelectorAll('.container');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  })

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }


    }, {offset: Number.NEGATIVE_INFINITY }).element
  }
  



  return (
    <div className="App">
      <Header/>
      <div className="about-apoka">
        <img className="logo-apoka" src={logoApoka}/>
        <div className="about-links">
          <a className="twitch" target="_blank" href="https://twitch.tv/ale_apoka">Twitch</a>
          <a className="instagram" target="_blank" href="https://instagram.com/ale_apoka">Instagram</a>
          <a className="youtube" target="_blank" href="https://www.youtube.com/c/AleAPOKA">Youtube</a>
        </div>
      </div>


      <div className="times-ativos">
        <ol className="team-list container" >
          {times.map(time => (
            <li className="draggable" draggable="true" key={time}>
              <img className="time-logo" src={time.avatarUrl}/>
              {time.nome}
            </li>
          ))}
        </ol>
      </div>
      
      
      <div className="times-rebaixados">
        <h3 className="title-rebaixados" >Times fora do Ranking</h3>

        <ol className="team-list rebaixados container">
          {rebaixados.map(rebaixado => (
            <li className="draggable" draggable="true" key={rebaixado}>
              <img className="time-logo" src={rebaixado.avatarUrl}/>
              {rebaixado.nome}
            </li>
          ))}
        </ol>
      </div>

      <button className="resetar-lista" onClick={refreshPage} >Resetar</button>
      <Footer/>
    </div>
  );
}

export default App;