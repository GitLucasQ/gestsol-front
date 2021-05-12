import React from 'react'
import { Link } from 'react-router-dom'

const NavigationAsesor = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Mis tickets
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/create">
                            Nueva solicitud
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/user">
                            Salir
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationAsesor;