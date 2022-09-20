import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";

const Rodape = () => {

    const participantes = useListaParticipantes();

    const navegarPara = useNavigate();

    const iniciar = () => {
        navegarPara('/sorteio');
    };

    return (
        <footer>
            <button 
            disabled={participantes.length < 3} 
            onClick={iniciar}
            >
                Iniciar brincadeira!
                </button>
        </footer>
    );
};

export default Rodape;
