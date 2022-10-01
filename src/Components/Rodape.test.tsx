import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import Rodape from "./Rodape";

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('../state/hook/useSorteador.ts', () => {
    return {
        useSorteador: () => mockSorteio
    }
});

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe('Quando não existe participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    })
    test('a brincadeira não pode começar', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });

});

describe('Quando existem participantes suficientes', () => {
    
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Elisa', 'Cleiton']);
    })
    
    test('a brincadeira pode começar', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled();
    })

    test('a brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    })
})