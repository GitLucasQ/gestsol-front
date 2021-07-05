import React from 'react'

const Modal = ({ ticket }) => {

    return (
        <div className="modal fade"
            id="modalDetalle"
            tabindex="-1"
            aria-labelledby="modalDetalleLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="modalDetalleLabel">
                            Detalle del ticket
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{textAlign: "left"}}>
                        <div className="row">
                            <div className="col">
                                <h5>ID:</h5>
                            </div>
                            <div className="col">
                                <p>{ticket.nro_ticket}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Registrado por:</h5>
                            </div>
                            <div className="col">
                                <p>{ticket.nombres}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Ingresado:</h5>
                            </div>
                            <div className="col">
                                <p>{ticket.fecha_registro + ' ' + ticket.hora_inicio}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Asginado a:</h5>
                            </div>
                            <div className="col">
                                <p>{ticket.nombre_usuario_asignado}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Cliente:</h5>
                            </div>
                            <div className="col">
                                <p>{ticket.nombre_cliente}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Descripción:</h5>
                            </div>
                            <div className="col">
                                <p>{ticket.descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;