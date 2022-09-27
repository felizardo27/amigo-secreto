import Card from "../Components/Card";
import Formulario from "../Components/Formulario";
import ListaParticipantes from "../Components/ListaParticipantes";
import Rodape from "../Components/Rodape";

const Configuracao = () => {

    return (
        <Card>
            <section>
                <h2>Vamos Começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    );

};

export default Configuracao;