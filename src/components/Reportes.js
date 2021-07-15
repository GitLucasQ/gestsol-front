import React, { useEffect, useState } from 'react'
import { Pie, Column } from '@ant-design/charts'
import NavigationSuper from './NavigationSuper'
import axios from 'axios'

const Reportes = () => {

    const [ticketPorPersona, setTicketPorPersona] = useState([])
    const [promedioAbordaje, setPromedioAbordaje] = useState([])
    const [promedioFinalizacion, setPromedioFinalizacion] = useState([])


    const getTicketsPorPersona = async () => {
        await axios.post('http://localhost:5050/ticket/ticketsPorUsuario',
            { id_usuario: JSON.parse(sessionStorage.getItem('token')).token })
            .then((response) => {
                setTicketPorPersona(
                    response.data.resultado.map(dato => ({
                        usuario: dato.persona,
                        cantidad: dato.cantidad
                    }))
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getPromedioAbordaje = async () => {
        await axios.post('http://localhost:5050/ticket/promedioAbordaje',
            { id_usuario: JSON.parse(sessionStorage.getItem('token')).token })
            .then((response) => {
                setPromedioAbordaje(response.data.promedio)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getPromedioFinalizacion = async () => {
        await axios.post('http://localhost:5050/ticket/promedioFinalizacion',
            { id_usuario: JSON.parse(sessionStorage.getItem('token')).token })
            .then((response) => {
                setPromedioFinalizacion(response.data.promedio)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        getTicketsPorPersona();
        getPromedioAbordaje();
        getPromedioFinalizacion();
    }, [])


    var config = {
        appendPadding: 10,
        data: ticketPorPersona,
        angleField: 'cantidad',
        colorField: 'usuario',
        radius: 0.8,
        label: { type: 'outer' },
        interactions: [{ type: 'element-active' }],
    }

    var configBarraAbordaje = {
        data: promedioAbordaje,
        xField: 'persona',
        yField: 'promedio_abordaje',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: { alias: 'Persona' },
            sales: { alias: 'Tiempo de abordaje' },
        },
    }

    var configBarraFinalizacion = {
        data: promedioFinalizacion,
        xField: 'persona',
        yField: 'promedio_finalizacion',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: { alias: 'Persona' },
            sales: { alias: 'Tiempo de finalización' },
        },
    }

    return (
        <div>
            <NavigationSuper />
            <div className="container">
                <div className="row m-4">
                    <div className="col">
                        <h5>Tiempo promedio de finalización</h5>
                        <Column {...configBarraFinalizacion} />
                    </div>
                    <div className="col">
                        <h5>Tiempo promedio de abordaje</h5>
                        <Column {...configBarraAbordaje} />
                    </div>
                </div>
                <br />
                <div className="row m-8">
                    <div className="col">
                        <h5>Tickets por persona</h5>
                        <Pie {...config} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Reportes