import React, { useState, useEffect } from 'react'
import NavigationAsesor from './NavigationAsesor'
import axios from 'axios'


const ListaTickets = () => {

    const [listaTickets, setListaTickets] = useState([])

    const getListaTickets = async () => {
        await axios.post('http://localhost:5050/ticket/listaTicketsAsesor',
            { id_usuario: JSON.parse(sessionStorage.getItem('token')).usuario })
            .then((response) => {
                setListaTickets(response.data.tickets)
                console.log(listaTickets)
                //console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getListaTickets();
    }, [])

    return (
        <div>
            <NavigationAsesor />
            <div className="container-fluid mt-4">
                <div className="row">
                    <table className="table table-hover">
                        <thead className="thead-tickets">
                            <tr>
                                <th>NRO TICKET</th>
                                <th>ESTADO</th>
                                <th>CLIENTE</th>
                                <th>DOCUMENTO</th>
                                <th>ÁREA</th>
                                <th>DESCRIPCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaTickets.map(ticket =>
                                    <tr key={ticket.nro_ticket}>
                                        <td>{ticket.nro_ticket}</td>
                                        <td>{ticket.estado}</td>
                                        <td>{ticket.nombre_cliente}</td>
                                        <td>{ticket.nro_doc}</td>
                                        <td>{ticket.area}</td>
                                        <td>{ticket.descripcion}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}


export default ListaTickets;