import { useSetRecoilState } from "recoil"
import { listaDeParticipanteState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipanteState);
    return (novoParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, novoParticipante])
    }
};