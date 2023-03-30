import Colaborador from  '../Colaborador'
import './time.css'

const Time = (props) => {

  const estilo = { backgroundColor: props.corPrimaria }

  return (
    <section className='time' style={estilo} >
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      {props.colaboradores.map(colaborador => <Colaborador/>)}
    </section>
  )
}

export default Time 