import './header.css';
import Swal from 'sweetalert2';

export default function Header(){

    function projectInfos(){
        Swal.fire(
          'Sobre este projeto',
          'Este é um app desenvolvido em ReactJs apenas para estudo e homenagem ao streamer Ale Apoka, todos os créditos estão no rodapé do site.',
          'info'
        )
      }

    return(
        <header>
            <button className="infos" onClick={projectInfos} >?</button>
        </header>
    )
}