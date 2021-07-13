import React, { useEffect, useState } from 'react'
import NavigationSuper from './NavigationSuper'
import axios from 'axios'

const Reportes = () => {

    const [listaPersonas, setListaPersonas] = useState([])
    const [personaSeleccionada, setPersonaSeleccionada] = useState('')
    const [estadoTicket, setEstadoTicket] = useState('')

    const getListaPersonas = async () => {
        await axios.post('http://localhost:5050/listarUsuarios',
            { idUsuario: JSON.parse(sessionStorage.getItem('token')).token })
            .then((response) => {
                setListaPersonas(response.data.usuarios)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSelectPersona = e => {
        setPersonaSeleccionada(e.target.value)
    }

    const handleSelectEstado = e => {
        setEstadoTicket(e.target.value)
    }

    useEffect(() => {
        getListaPersonas();
    })

    return (
        <div>
            <NavigationSuper />

            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="selectPersona">Nombre</label>
                        <select
                            id="selectPersona"
                            className="form-control custom-select"
                            onChange={handleSelectPersona}>
                            {
                                listaPersonas.map(persona =>
                                    <option key={persona.id_usuario} value={persona.id_usuario}>
                                        {persona.nombres + ' ' + persona.apellidos}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="selectEstado">Estado</label>
                        <select
                            id="selectEstado"
                            className="form-control custom-select"
                            onChange={handleSelectEstado}>
                            <option value="">Todos</option>
                            <option value="abierto">Abiertos</option>
                            <option value="cerrado">Cerrados</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Reportes