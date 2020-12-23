import React, { useState } from "react"
import './styles/Form.css'
import { ToastContainer, toast } from 'react-toastify';
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
            <h1 className="titulo">Lista de afazeres</h1>
            <input size="40" className="entrada" onChange={handleChange} value={afazer}  type="text" placeholder="O que precisa ser feito?"/>
            <button className="botao-add" type="submit">Adicionar</button>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
             />
        </form>
    )
}

export default Form