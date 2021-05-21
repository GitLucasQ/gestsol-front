import React, { Component } from 'react'
import axios from 'axios'
import NavigationSuper from './NavigationSuper'


export default class dashboard extends Component {

    state = {
        listaConsultas: []
    }

    async componentDidMount() {
        this.getSolicitudes();
    }

    getSolicitudes = async () => {
        const resp = await axios.get('http://localhost:5050/ticket/listTickets')
        this.setState({ listaConsultas: resp.data.tickets })
    }


    render() {
        return (
            <div>
                <NavigationSuper />
                <div className="container-fluid mt-4">
                    <div className="row">
                        <table className="table table-hover">
                            <thead className="thead-usuarios">
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>N° DOCUMENTO</th>
                                <th>DESCRIPCIÓN</th>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaConsultas.map(ticket =>
                                        <tr>
                                            <td>{ticket.nro_ticket}</td>
                                            <td>{ticket.nombre_cliente}</td>
                                            <td>{ticket.nro_doc}</td>
                                            <td>{ticket.descripcion}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
