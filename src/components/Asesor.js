import React, { useState } from 'react'
import axios from 'axios'
import NavigationAsesor from './NavigationAsesor'

import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '../assets/css/asesor.css'

const Dashboard = () => {

    const notify = (message) => {
        toast.error(
            message,
            { position: toast.POSITION.TOP_CENTER }
        );
    }

    const notifySuccess = (message) => {
        toast.success(
            message,
            { position: toast.POSITION.TOP_CENTER }
        );
    }

    const listaAreas = [
        {
            value: "Sistemas",
            name: "Sistemas"
        },
        {
            value: "Ventas",
            name: "Ventas"
        }
    ];

    const [nombreCliente, setNombreCliente] = useState("");
    const [ruc, setRuc] = useState("");
    const [telefonoCliente, setTelefonoCliente] = useState("");
    const [correoCliente, setCorreoCliente] = useState("");
    const [area, setArea] = useState("Sistemas");
    const [descripcionConsulta, setDescripcionConsulta] = useState("");
    const getIdUsuario = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.usuario
    };
    const [idUsuario, setIdUsuario] = useState(getIdUsuario());


    const handleSelect = e => {
        setArea(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validarCampos() && validarEmail()) {
            registroConsulta();
        }
        else {
            notify("Verifique que los campos sean correctos")
        }
    }

    const registroConsulta = async () => {
        await axios.post("http://localhost:5050/registroConsulta",
            {
                nombreCliente: nombreCliente,
                nroDoc: ruc,
                telefono: telefonoCliente,
                email: correoCliente,
                area: area,
                descripcion: descripcionConsulta,
                idUsuario: idUsuario
            })
            .then((reponse) => {
                notifySuccess("Registro exitoso")
                limpiarCampos();
            })
            .catch((error) => {
                notify("Error al registar la consulta")
            })
    }

    const limpiarCampos = () => {
        setNombreCliente('');
        setRuc('');
        setTelefonoCliente('');
        setCorreoCliente('');
        setDescripcionConsulta('');
    }

    var validarCampos = () => {
        return (nombreCliente.toString().trim().length > 0 &&
            ruc.toString().trim().length > 0 &&
            telefonoCliente.toString().trim().length > 0 &&
            correoCliente.toString().trim().length > 0 &&
            descripcionConsulta.toString().trim().length > 0)
    }

    var validarEmail = () => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(correoCliente)) {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <div>
            <ToastContainer />
            <NavigationAsesor />
            <div className="container mt-4" id="formularioRegistro">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label>Nombre del cliente</label>
                                    <input
                                        type="text"
                                        value={nombreCliente}
                                        className="form-control"
                                        placeholder="Ingrese nombres"
                                        onChange={e => setNombreCliente(e.target.value)} />
                                </div>
                                <div className="form-group col-6">
                                    <label>Nro. Documento</label>
                                    <input
                                        type="number"
                                        value={ruc}
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
                                        value={telefonoCliente}
                                        className="form-control"
                                        placeholder="Ingrese teléfono"
                                        onChange={e => setTelefonoCliente(e.target.value)} />
                                </div>
                                <div className="form-group col-6">
                                    <label>Correo electrónico</label>
                                    <input
                                        type="text"
                                        value={correoCliente}
                                        className="form-control"
                                        placeholder="Ingrese correo"
                                        onChange={e => setCorreoCliente(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Área a derivar</label>
                                <select
                                    className="form-control"
                                    value={area}
                                    onChange={handleSelect}>
                                    {
                                        listaAreas.map(item =>
                                            <option key={item.value} value={item.value}>{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Descripción de la consulta</label>
                                <textarea
                                    type="text"
                                    value={descripcionConsulta}
                                    className="form-control"
                                    rows="5"
                                    placeholder="Ingrese documento"
                                    onChange={e => setDescripcionConsulta(e.target.value)} />
                            </div>
                            <br />
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                    onClick={handleSubmit}>Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard