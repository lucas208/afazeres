import React, { useState } from "react"
import './styles.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {

    const [afazer, setAfazer] = useState('')

    function handleChange(e) {
      setAfazer(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(afazer.trim()){
          props.adicionar(afazer.trim())
          setAfazer("")
          toast.success('Afazer adicionado com sucesso')
        } else {
          toast.error('Erro, insira o nome do afazer')
        }
      }

    return(
        <form className="container" onSubmit={handleSubmit}>
            <h1 className="titulo">Afazeres App</h1>
            <input size="35" className="entrada" onChange={handleChange} value={afazer}  type="text" placeholder="O que precisa ser feito?"/>
            <button className="botao-add" type="submit">+</button>
        </form>
    )
}

export default Form