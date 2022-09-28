import { useListaParticipantes } from "../state/hook/useListaParticipantes";

const Sorteio = () => {

    const participantes = useListaParticipantes();

    return (
        <section>
            <form>
                <select name="participanteDaVez" id="ParticipanteDaVez">
                    {participantes.map(participante => 
                        <option key={participante}>{participante}</option>
                        )}
                </select>
            </form>
        </section>
    );
};

export default Sorteio;