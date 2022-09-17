import { render, screen } from '@testing-library/react';
import React from 'react';
import Formulario from './Formulario';

// jest

test('Quando o input está vazio, novos participantes não podem ser adicionados', ()=> {

    render(<Formulario />);

    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // Encontrar o botao
    const botao = screen.getByRole('button');

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    
    // garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled();

});