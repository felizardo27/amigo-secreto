import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro";
import styles from './Formulario.module.scss';

const Formulario = () => {

    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();
    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }; 

    return (
        <form onSubmit={adicionarParticipante}>
            <div className={styles.containerInputBtn}>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
            </div>
            {mensagemDeErro && <p  className={styles.alerta} role="alert">{mensagemDeErro}</p>}
        </form>
    );
}

export default Formulario;