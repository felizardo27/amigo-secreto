import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipanteState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipanteState);
    const list = useRecoilValue(listaDeParticipanteState);
    const setErro = useSetRecoilState(erroState);
 
    return (novoParticipante: string) => {
        if (list.includes(novoParticipante)) {
            setErro('Nomes duplicados não são permitidos!');
            setTimeout(()=> {
                setErro('');
            }, 5000);
            return;
        }

        return setLista(listaAtual => [...listaAtual, novoParticipante])
    }
};