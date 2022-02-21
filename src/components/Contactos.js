import React, { useReducer, useEffect, useState } from 'react'
import Formulario from './Formulario'
import TablaContactos from './TablaContactos'
import { ContactosReducer } from '../reducers/ContactosReducer';

const init =()=>{
  const contactos = localStorage.getItem("contactos") //utilizar el localstorage

  return contactos ? JSON.parse(contactos): [];
}

const Contactos = () => {

  //const [state, dispatch] = useReducer(ContactosReducer, [])
  const [state, dispatch] = useReducer(ContactosReducer, [], init)

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state))    
  }, [state])

  const [formView, setFormView] = useState(false)
  
  
  return (
    <div className='container mt-3'>
        <button onClick={()=> setFormView(!formView)} className=" btn btn-success mb-2">
        {!formView ? "+ Agregar Contactos": "- Cerrar Formulario"}
        </button>
        {formView && <Formulario dispatch={dispatch}/>}        
        <TablaContactos contactos={state}  dispatch={dispatch}/>    
    </div>
  )
}

export default Contactos