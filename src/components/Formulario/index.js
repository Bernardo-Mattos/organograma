import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [time, setTime] = useState("");
  const [imagem, setImagem] = useState("");

  const onSub = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      time,
      imagem
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={onSub}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obgt={true}
          label="Nome"
          placeholder="Digite seu nome..."
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obgt={true}
          label="Cargo"
          placeholder="Digite seu cargo..."
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da foto..."
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa obgt={true} label="Time" itens={times} />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
