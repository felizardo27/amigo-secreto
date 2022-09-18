import { atom } from "recoil";

export const listaDeParticipanteState = atom<string[]>({
    key: 'listaDeParticipanteState',
    default: []
});