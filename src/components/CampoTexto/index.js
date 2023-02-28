import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {
    console.log(props)

    const onTap = (event) => {
        props.aoAlterado(event.target.value)
    }
 return(
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={onTap} required={props.obgt} placeholder={props.placeholder}/>
    </div>
 )
}

export default CampoTexto 