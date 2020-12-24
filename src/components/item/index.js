import React, { useState } from 'react'
import './styles.css'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = (props) => {

    const [afazer, setAfazer] = useState(props.name)

    function handleChange(e) {
        setAfazer(e.target.value)
    }

    function editarAfazer(e){
        if(e.keyCode === 13){
            e.preventDefault(); 
            if(afazer.trim()){
                props.editar(props.id, afazer.trim())
                e.target.blur()
                toast.success('Afazer alterado com sucesso')
            } else {
                toast.error('Erro, insira o nome do afazer')
            }
        }
    }

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
            <input
                type="text"
                className="nome" 
                style={{textDecoration: props.completed ? 'line-through' : 'none', width: (afazer.length+1)*10+'px'}} 
                value={afazer} 
                onChange={handleChange}
                onKeyDown={editarAfazer}
            />
            </div>
            <label className="botao-excluir" type="button" onClick={() => props.deletar(props.id)}>
                <FaTrash color="rgb(135,135,135)" />
            </label>
        </li>
    )
}

export default Item