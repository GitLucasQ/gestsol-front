import React, { useState } from 'react'
import PropTypes from 'prop-types'
import avatar from '../assets/img/avatar.png'

import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

import '../assets/css/login.css'
import 'react-toastify/dist/ReactToastify.css'

export default function Login({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const notify = (message) => {
        toast.error(
            message,
            { position: toast.POSITION.TOP_CENTER }
        );
    }

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const loginUser = async () => {
        await axios.post("http://localhost:5050/user/login", { username: username, password: password })
            .then((response) => {
                const id = {
                    "token": response.data.usuario[0].TIPO_USUARIO,
                    "usuario": response.data.usuario[0].ID_USUARIO
                }
                setToken(id)
            })
            .catch((error) => {
                notify("No existe el usuario");
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm) {
            loginUser(username, password);
        }
        else {
            console.log("No existe el usuario");
            notify("Debe llenar todos los campos");
        }
    }

    return (
        <div className="container-fluid vh-100" id="login">
            <ToastContainer />
            <div className="row align-items-center">
                <div className="col pt-4">
                    <h3 style={{color: "#fff"}}>Sistema de Gestión de Solicitudes</h3>
                </div>
            </div>
            <div className="container" id="formulario">
                <div className="row">
                    <div className="col align-self-center ml-5">
                        <img src={avatar} />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese usuario"
                                    onChange={e => setUsername(e.target.value)} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Ingrese contraseña"
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            <br />
                            <div>
                                <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

//export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}