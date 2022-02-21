import React, { useReducer } from 'react'
import Formulario from './Formulario'
import TablaContactos from './TablaContactos'
import { ContactosReducer } from '../reducers/ContactosReducer'

const contactos = [
    {
        id:"hsdfs",
        nombre:"Alexander",
        numero:"04142345874"
    },
    {
        id:"hsjhfs",
        nombre:"Angelina",
        numero:"04142334984"
    },
    {
      id:"hsgdteh",
      nombre:"Ana",
      numero:"04142334984"
  }
]
const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, contactos)
  
  return (
    <div className='container mt-3'>
        <Formulario dispatch= {dispatch}/>
        <TablaContactos contactos={state}  dispatch={dispatch}/>    
    </div>
  )
}

export default Contactos