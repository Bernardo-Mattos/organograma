import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './formulario.css';

const Formulario = () => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const onSub = (evento)=> {
    evento.preventDefault()
    console.log('form was submited')
  }

  return (
    <section className="formulario">
      <form onSubmit={onSub}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obgt={true} label="Nome" placeholder="Digite seu nome..." />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da foto..." />
        <ListaSuspensa label="Time"itens={times} />
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
