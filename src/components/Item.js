import React from 'react'
import './styles/Item.css'

const Item = (props) => {

    return (
        <li className="list-item">
            <input 
                className="check"
                id={props.id} 
                type="checkbox"
                checked = {props.completed} 
                onChange={() => props.completar(props.id)}
            />
            <label className="nome" style={{textDecoration: props.completed ? 'line-through' : 'none'}} htmlFor={props.id}>
                {props.name}
            </label>
            <button className="botao-excluir" type="button" onClick={() => props.deletar(props.id)}>
                Excluir 
            </button>
        </li>
    )
}

export default Item