import React from 'react'

const TablaContactos = ({contactos =[]}) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Numero</th>
                <th>Accion</th>                        
            </tr>        
        </thead>  
        <tbody>
        {
            contactos.map( (contacto) => {
                return <tr key={contacto.id}>
                    <th>{contacto.id}</th> 
                    <td>{contacto.nombre}</td> 
                    <td>{contacto.numero}</td>  
                    <td>
                    <button className='btn btn-danger'>Eliminar</button>
                    </td>             
                </tr>
            })  
        }   
        
        </tbody>  
    </table>
  )
}

export default TablaContactos