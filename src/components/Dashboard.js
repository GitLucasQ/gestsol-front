import React, { Component } from 'react'
import axios from 'axios'
import NavigationSuper from './NavigationSuper'
import Modal from './ModalDetalle'
import ModalReasignar from './ModalReasignar'


export default class dashboard extends Component {

    state = {
        listaConsultas: [],
        ticketSeleccionado: [],
        personaAsignadaActual: '',
        equipo: []
    }

    async componentDidMount() {
        this.getSolicitudes();
        this.getEquipo();
    }

    getSolicitudes = async () => {
        const resp = await axios.post('http://localhost:5050/ticket/listTickets', { id_usuario: JSON.parse(sessionStorage.getItem('token')).token })
        this.setState({ listaConsultas: resp.data.tickets })
        console.log(resp.data.tickets)
    }

    getEquipo = async () => {
        const resp = await axios.post('http://localhost:5050/listarUsuarios',
            { idUsuario: JSON.parse(sessionStorage.getItem('token')).token })
        this.setState({ equipo: resp.data.usuarios })
    }

    setDataTicket = (ticket, nombrePersonaAsignada) => {
        this.setState({ ticketSeleccionado: ticket })
        this.setState({ personaAsignadaActual: nombrePersonaAsignada })
    }

    setTicketSeleccionado = (ticket) => {
        this.setState({ ticketSeleccionado: ticket })
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
                                    <th>NOMBRE CLIENTE</th>
                                    <th>ESTADO</th>
                                    <th>REGISTRADO POR</th>
                                    <th>ASIGNADO A</th>
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
                                            <td>{ticket.nombre_usuario_asignado}</td>
                                            <td>{ticket.fecha_registro} {ticket.hora_inicio}</td>
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
                                                    onClick={() => this.setDataTicket(ticket.nro_ticket, ticket.nombre_usuario_asignado)}>
                                                    Reasignar
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        <Modal ticket={this.state.ticketSeleccionado} />
                        <ModalReasignar
                            nroTicket={this.state.ticketSeleccionado}
                            nombresPersona={this.state.personaAsignadaActual}
                            equipo={this.state.equipo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
