import React from 'react'
import TablaContactos from './TablaContactos'

const Contactos = () => {
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
    }
]
  return (
    <div className='container mt-3'>
       <TablaContactos contactos={contactos}/>    
    </div>
  )
}

export default Contactos