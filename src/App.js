import React, { useState } from 'react'
import './App.css'
import Item from '../src/components/item/index'
import Form from '../src/components/form/index'
import { nanoid } from 'nanoid'
import { resgataItens, salvaItens } from './auxiliares'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [ afazeres, setAfazeres ] = useState(resgataItens('itens'))

  function adicionar(afazer){
    const novoAfazer = { id: nanoid(), name: afazer, completed: false }
    setAfazeres([...afazeres, novoAfazer])
    salvaItens('itens', [...afazeres, novoAfazer])
  }

  function completar(id){
    const afazeresAtualizados = afazeres.map(afazer => {
      if (id === afazer.id){
        return {...afazer, completed: !afazer.completed}
      }
      return afazer
    })
    setAfazeres(afazeresAtualizados)
    salvaItens('itens', afazeresAtualizados)
  }

  function deletar(id){
    const afazeresRestantes = afazeres.filter(afazer => id !== afazer.id)
    setAfazeres(afazeresRestantes)
    salvaItens('itens', afazeresRestantes)
    toast.success('Afazer excluído com sucesso')
  }

  function editar(id, novoAfazer){
    const afazeresAtualizados = afazeres.map(afazer => {
      if(id === afazer.id){
        return {...afazer, name: novoAfazer}
      }
      return afazer;
    })
    setAfazeres(afazeresAtualizados)
    salvaItens('itens', afazeresAtualizados)
  }

  return (
    <div className="App">
      <ul className="Lista-afazeres">
        <Form adicionar={adicionar} />
        {afazeres.map(afazer => (
          <Item
            id={afazer.id}
            name={afazer.name}
            completed={afazer.completed}
            key={afazer.id}
            completar={completar}
            deletar={deletar}
            editar={editar}
          />
          )
        )}
      </ul>
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
    </div>
  );
}

export default App
