import React, { useState } from 'react'
import axios from 'axios'


const ModalReasignar = ({ nroTicket, nombresPersona, equipo }) => {

    const [personaAsignar, setPersonaAsignar] = useState('')

    const handleSelect = e => {
        setPersonaAsignar(e.target.value)
    }

    const reasignarTicket = e => {
        e.preventDefault()
        axios.put('http://localhost:5050/ticket/reasignarTicket',
            { id_usuario_asignado: personaAsignar, nro_ticket: nroTicket })
        window.location.href = '/'
    }

    return (
        <div className="modal fade"
            id="modalReasignar"
            tabIndex="-1"
            aria-labelledby="modalReasignarLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="modalDetalleLabel">
                            Reasignar ticket
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ textAlign: "left" }}>
                        <p>Actualmente el ticket {nroTicket} está asignado a <strong>{nombresPersona}</strong></p>
                        <p>Seleccione una persona a quien se le reasignará el ticket</p>
                        <form onSubmit={reasignarTicket}>
                            <div className="input-group">
                                <select
                                    className="custom-select"
                                    onChange={handleSelect}>
                                    {
                                        equipo.map(persona =>
                                            <option key={persona.id_usuario} value={persona.id_usuario}>
                                                {persona.nombres + ' ' + persona.apellidos}
                                            </option>
                                        )
                                    }
                                </select>
                                <div className="input-group-append">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalReasignar