import React from 'react'
import axios from 'axios'


const getListaPersonas = () => {
    console.log('entra')
}

const ModalReasignar = ({ nroTicket }) => {

    return (
        <div className="modal fade"
            id="modalReasignar"
            tabindex="-1"
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
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ textAlign: "left" }}>
                        <p>{nroTicket}</p>
                        <button
                            className="btn btn-success"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalReasignar