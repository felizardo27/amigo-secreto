import { useState } from "react";
import Card from "../Components/Card";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio";
import styles from './Sorteio.module.scss';


const Sorteio = () => {

    const participantes = useListaParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoDoSorteio();

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    return (
        <Card>
            <section className={styles.sorteio}>
            <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select
                        required
                        name="participanteDaVez"
                        id="ParticipanteDaVez"
                        placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={evento => setParticipanteDaVez(evento.target.value)}
                    >
                        {participantes.map(participante =>
                            <option key={participante}>{participante}</option>
                            )}
                    </select>
                    <button className={styles.botaoSortear}>Sortear</button>
                </form>
                    {amigoSecreto && <p className={styles.resultado} role="alert">{amigoSecreto}</p>}
                    <footer className={styles.sorteio}>
                            <img src="/imagens/aviao.png" className="aviao"  alt="Um desenho de um avião de papel" />
                    </footer>
            </section>
        </Card>
    );
};

export default Sorteio;