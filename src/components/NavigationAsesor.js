import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const NavigationAsesor = () => {

    let history = useHistory()

    const Logout = () => {
        sessionStorage.clear()
        history.push("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Nueva solicitud
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/misTickets">
                            Mis tickets
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
        </nav>
    )
}

export default NavigationAsesor;