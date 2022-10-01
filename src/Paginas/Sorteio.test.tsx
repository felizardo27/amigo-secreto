import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

jest.mock('../state/hook/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
});

describe("Na pagina de sorteio", () => {

    const participantes = [
        "Ana",
        "Elisa",
        "Cleiton"
    ];

    const resultado = new Map([
        ["Ana", "Elisa"],
        ["Cleiton", "Ana"],
        ["Elisa", "Cleiton"]
    ]);

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
    })
    
    test("todos os participantes podem exebir o seu amigo secreto", () => {

        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length + 1);

    });

    test("o amigo secreto é exibido quando solicitado", () => {

        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText("Selecione o seu nome");
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();

    });

});