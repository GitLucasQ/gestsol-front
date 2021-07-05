import React, { Component } from 'react'
import axios from 'axios'
import NavigationSuper from './NavigationSuper'
import Modal from './ModalDetalle'
import ModalReasignar from './ModalReasignar'


export default class dashboard extends Component {

    state = {
        listaConsultas: [],
        ticketSeleccionado: [],
        ticketReasignar: ''
    }

    async componentDidMount() {
        this.getSolicitudes();
    }

    getSolicitudes = async () => {
        const resp = await axios.post('http://localhost:5050/ticket/listTickets', { id_usuario: JSON.parse(sessionStorage.getItem('token')).token })
        this.setState({ listaConsultas: resp.data.tickets })
        //console.log(resp.data.tickets)
    }

    setTicketSeleccionado = (ticket) => {
        this.setState({ ticketSeleccionado: ticket })
    }

    setTicketReasignar = (nroTicket) => {
        this.setState({ ticketReasignar: nroTicket })
    }


    render() {
        return (
            <div>
                <NavigationSuper />
                <div className="container-fluid mt-4">
                    <div className="row">
                        <table className="table table-hover">
                            <thead className="thead-usuarios">
                                <tr>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>ESTADO</th>
                                    <th>REGISTRADO POR</th>
                                    <th>FECHA REGISTRO</th>
                                    <th>OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaConsultas.map(ticket =>
                                        <tr key={ticket.nro_ticket}>
                                            <td>{ticket.nro_ticket}</td>
                                            <td>{ticket.nombre_cliente}</td>
                                            <td>{ticket.estado}</td>
                                            <td>{ticket.nombres}</td>
                                            <td>{ticket.fecha_registro}</td>
                                            <td>
                                                <button
                                                    className="btn btn-info btn-sm"
                                                    data-toggle="modal"
                                                    data-target="#modalDetalle"
                                                    onClick={() => this.setTicketSeleccionado(ticket)}>
                                                    Detalle
                                                </button>

                                                <button
                                                    className="btn btn-success btn-sm"
                                                    data-toggle="modal"
                                                    data-target="#modalReasignar"
                                                    onClick={() => this.setTicketReasignar(ticket.nro_ticket)}>
                                                    Reasignar
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        <Modal ticket={this.state.ticketSeleccionado} />
                        <ModalReasignar nroTicket={this.state.ticketReasignar} />
                    </div>
                </div>
            </div>
        )
    }
}
