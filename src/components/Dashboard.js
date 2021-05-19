import React from 'react'
import axios from 'axios'
import NavigationSuper from './NavigationSuper'

const Dashboard = () => {



    return (
        <div>
            <NavigationSuper />
            <div className="container-fluid mt-4">
                <div className="row">
                    <table className="table">
                        <thead className="thead-dark">
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>N° DOCUMENTO</th>
                            <th>DESCRIPCIÓN</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Dashboard;