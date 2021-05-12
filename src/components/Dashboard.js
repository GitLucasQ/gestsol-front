import React from 'react'
import NavigationSuper from './NavigationSuper'

const Dashboard = () => {
    return (
        <div className="container-fluid">
            
            <div className="row">
                <table className="table">
                    <thead className="thead-dark">
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>N° DOCUMENTO</th>
                        <th>DESCRIPCION</th>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;