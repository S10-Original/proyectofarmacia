import React from "react";
import logosaas from "../img/logosaas.svg";

function Inicio() {
    return(
        <div className="fondo">
            <h2>Pagina de Inicio</h2>
            <div className='login'>
            <div className='row mt-4'>
                <div className='col-sm-6 offset-3 mt-5'>
                    <div className='card pt-5'>
                        <div className='card-header text-center'>
                            <img src={logosaas} alt="logo farmacias saas"/>
                        </div>
                        <div className='card-body'>
                                <div className='input-group mb-3'>
                                    <h5>Bienvenido al gestor de inventario: farmacias SAAS</h5>
                                    <br/><br/>
                                    <h5>Para ingresar, inicie sesion o cree una cuenta en caso de no poseer una</h5>
                                    <h5>LISTA DE PERMISOS:</h5>
                                    <h5>Empleado: solo lectura y generacion de reportes</h5>
                                    <h5>Gerente: CRUD de la tabla medicamentos y generacion de reportes</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Inicio;