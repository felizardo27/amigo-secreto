import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import Formulario from './Formulario';

describe('O comportamento do Formulario.tsx', () => {
    
    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
    
        // Encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // Encontrar o botao
        const botao = screen.getByRole('button');
    
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument();
    
        // garantir que o botao esteja desabilitado
        expect(botao).toBeDisabled();
    
    });
    
    test('Adiciona um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
    
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();
    
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("");
    
    });
    
    test('Nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        const mensagemDeErro = screen.getByRole('alert');
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');
    
    });
    
    test('A mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers();
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>);
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();
    
        act(()=> {
            // Esperar N segundos
            jest.runAllTimers();
        });
    
    
        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    
    });
    
});
