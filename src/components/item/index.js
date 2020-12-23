import React from 'react'
import './styles.css'
import { FaTrash } from 'react-icons/fa'

const Item = (props) => {

    return (
        <li className="list-item" style={{borderLeftColor: props.completed ? 'rgb(7,188,12)' : 'rgb(251, 113, 0)'}} htmlFor={props.id}>
            <div className="check-label">
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
            </div>
            <label className="botao-excluir" type="button" onClick={() => props.deletar(props.id)}>
                <FaTrash color="rgb(135,135,135)" />
            </label>
        </li>
    )
}

export default Item