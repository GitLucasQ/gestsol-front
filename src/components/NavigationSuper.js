import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


import '../assets/css/supervisor.css'

const NavigationSuper = () => {

    let history = useHistory()

    const Logout = () => {
        sessionStorage.clear()
        history.push("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end" id="navsuper">
            <Link className="navbar-brand mr-2" to="/">
                <i className="fa fa-fw fa-home mr-2"></i>
                Ver solicitudes
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ml-2 mr-2">
                        <Link className="navbar-brand" to="/registroUsuario">
                            <i className="fa fa-fw fa-users mr-2"></i>
                            Registrar usuario
                        </Link>
                    </li>
                    <li className="nav-item  mr-2">
                        <Link className="navbar-brand" to="/reportes">
                            <i className="fa fa-fw fa-area-chart mr-2"></i>
                            Reportes
                        </Link>
                    </li>

                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button
                            className="btn btn-outline-danger"
                            type="button"
                            onClick={Logout}>Salir</button>
                    </li>
                </ul>
            </div>

        </nav >
    )
}

export default NavigationSuper;