import { useRecoilValue } from "recoil";
import { listaDeParticipanteState } from "../atom";

export const useListaParticipantes = () => {
    return useRecoilValue(listaDeParticipanteState);
};