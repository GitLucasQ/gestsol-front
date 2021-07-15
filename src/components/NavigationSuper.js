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
            <Link className="navbar-brand" to="/">
                Ver solicitudes
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/registroUsuario">
                            Registrar usuario
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/reportes">
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