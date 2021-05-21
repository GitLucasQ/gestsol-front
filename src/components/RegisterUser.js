import React, { useState, Component } from 'react'
import axios from 'axios'

import { toast, ToastContainer } from 'react-toastify'
import NavigationSuper from './NavigationSuper'

import 'react-toastify/dist/ReactToastify.css'

export default class RegisterUser extends Component {

    notifyError = (message) => {
        toast.error(
            message,
            { position: toast.POSITION.TOP_CENTER }
        );
    }


    notifySuccess = (message) => {
        toast.success(
            message,
            { position: toast.POSITION.TOP_CENTER }
        );
    }

    state = {
        listaAreas: [
            {
                value: "Sistemas",
                name: "Sistemas"
            },
            {
                value: "Ventas",
                name: "Ventas"
            }
        ],
        tipoUsuarios: [
            {
                value: "3",
                name: "Técnico"
            },
            {
                value: "4",
                name: "Analista"
            }
        ],
        nombres: '',
        apellidos: '',
        area: 'Sistemas',
        tipo: 'Técnico',
        listaUsuarios: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const resp = await axios.get('http://localhost:5050/listarUsuarios')
        this.setState({ listaUsuarios: resp.data.usuarios })
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.registroUsuario();
    }

    registroUsuario = async () => {
        await axios.post('http://localhost:5050/registroUsuario',
            {
                nombres: this.state.nombres[0],
                apellidos: this.state.apellidos[0],
                area: this.state.area,
                tipo: this.state.tipo
            })
            .then((response) => {
                this.notifySuccess('Registro exitoso')
                this.getUsers();
            })
            .catch((error) => {
                this.notifyError('Error al registrar el usuario')
            })
    }


    render() {

        return (
            <div>
                <ToastContainer />
                <NavigationSuper />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col" id="formularioRegistro">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label>Nombres</label>
                                        <input
                                            type="text"
                                            name="nombres"
                                            className="form-control"
                                            value={this.state.nombres}
                                            placeholder="Ingrese nombres"
                                            onChange={this.inputHandler}
                                            required />
                                    </div>
                                    <div className="form-group col-6">
                                        <label>Apellidos</label>
                                        <input
                                            type="text"
                                            name="apellidos"
                                            className="form-control"
                                            value={this.state.apellidos}
                                            placeholder="Ingrese apellidos"
                                            onChange={this.inputHandler}
                                            required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label>Área a derivar</label>
                                        <select
                                            className="form-control"
                                            name="area"
                                            value={this.state.area}
                                            onChange={this.inputHandler}>
                                            {
                                                this.state.listaAreas.map(item =>
                                                    <option key={item.value} value={item.value}>{item.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-6">
                                        <label>Tipo de usuario</label>
                                        <select
                                            className="form-control"
                                            name="tipo"
                                            value={this.state.tipo}
                                            onChange={this.inputHandler}>
                                            {
                                                this.state.tipoUsuarios.map(item =>
                                                    <option key={item.value} value={item.value}>{item.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>

                                <br />
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-block"
                                        onClick={this.handleSubmit}>Registrar</button>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="thead-usuarios">
                                    <th>NOMBRES</th>
                                    <th>APELLIDOS</th>
                                    <th>ÁREA</th>
                                    <th>TIPO USUARIO</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.listaUsuarios.map(usuario =>
                                            <tr>
                                                <td>{usuario.nombres}</td>
                                                <td>{usuario.apellidos}</td>
                                                <td>{usuario.area}</td>
                                                <td>{usuario.tipo_usuario}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


