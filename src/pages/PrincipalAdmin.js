import React from "react";
import '../css/login.css';




function PrincipalAdmin({conectado, idTipoUsuario, nombre, apellidos, salir}) {
  

    return(
        <div className="fondo">
            <h2>Ventana principal</h2>
        <div className="login">
                <div className="row mt-4">
                    <div className="col-sm-4 offset-4 mt-5">
                        <div className="card pt-5">
                            <div className="card-header text-center">
                                <h3>
                                Bienvenido {nombre}
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <h4>Apellidos: {apellidos}</h4>
                                        <h4>Rol: {idTipoUsuario==2 ? <h4>Gerente</h4>:<h4>Empleado</h4>}</h4>
                                    </div>
                                </div>
                                
                                <center><button onClick={() => salir(false)} className="btn btn-warning btn-lg btn-block" style={{color: "white"}}>Cerrar Sesion</button></center>
                                



                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipalAdmin;