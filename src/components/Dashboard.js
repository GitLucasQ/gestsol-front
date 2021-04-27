import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '../assets/css/dashboard.css'

const Dashboard = () => {

    const [nombreCliente, setNombreCliente] = useState("");
    const [ruc, setRuc] = useState("");
    const [telefonoCliente, setTelefonoCliente] = useState("");
    const [correoCliente, setCorreoCliente] = useState("");
    const [descripcionConsulta, setDescripcionConsulta] = useState("");

    const handleSubmit = e => {

    }

    return (
        <div>
            <ToastContainer />
            <div className="container mt-4" id="formularioRegistro">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label>Nombre del cliente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese nombres"
                                        onChange={e => setNombreCliente(e.target.value)} />
                                </div>
                                <div className="form-group col-6">
                                    <label>Nro. Documento</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese documento"
                                        onChange={e => setRuc(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label>Teléfono / celular</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ingrese teléfono"
                                        onChange={e => setTelefonoCliente(e.target.value)} />
                                </div>
                                <div className="form-group col-6">
                                    <label>Correo electrónico</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese correo"
                                        onChange={e => setCorreoCliente(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Descripción de la consulta</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    rows="5"
                                    placeholder="Ingrese documento"
                                    onChange={e => setDescripcionConsulta(e.target.value)} />
                            </div>
                            <br />
                            <div>
                                <button type="submit" className="btn btn-success btn-block">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard