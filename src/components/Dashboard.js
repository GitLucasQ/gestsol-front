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
        const resp = await axios.post('http://localhost:5050/ticket/listTickets', {id_usuario: JSON.parse(sessionStorage.getItem('token')).token})
        this.setState({ listaConsultas: resp.data.tickets })
        console.log(resp)
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
                                <th>ESTADO</th>
                                <th>REGISTRADO POR</th>
                                <th>FECHA REGISTRO</th>
                                <th>OPCIONES</th>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaConsultas.map(ticket =>
                                        <tr>
                                            <td>{ticket.nro_ticket}</td>                                            
                                            <td>{ticket.nombre_cliente}</td>
                                            <td>{ticket.estado}</td>
                                            <td>{ticket.nombres}</td>
                                            <td>{ticket.fecha_registro}</td>
                                            <td>
                                                <button className="btn btn-info btn-sm">Detalle</button>
                                                <button className="btn btn-success btn-sm">Reasignar</button>
                                            </td>
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
