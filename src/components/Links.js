import React from "react";
import { NavLink } from "react-router-dom";
import '../css/login.css';


const Links = ({conectado, idTipoUsuario}) => {
    return(
        <div className="estilosLinks">
            <header>
                <h2 style={{paddingRight:30}}>FARMACIAS SAAS</h2>
                
                {conectado? (
                    idTipoUsuario==3? (
                        <nav className="nav">
                        <NavLink to="/Principal" className="nav" >PRINCIPAL</NavLink>
                        <NavLink to="/Productos" className="nav" >PRODUCTOS</NavLink>
                        </nav>
                    ) : (
                        <nav className="nav">
                        <NavLink to="/PrincipalAdmin" className="nav" >ADMIN PRINCIPAL</NavLink>
                        <NavLink to="/ProductosAdmin" className="nav" >PRODUCTOS AÑADIR</NavLink>
                        <NavLink to="/ModificarAdmin" className="nav" >MODIFICAR</NavLink>
                        </nav>
                    )
                    
                ) : (
                    <nav className="nav">
                    <NavLink to="/" className="nav">INICIO</NavLink>
                    <NavLink to="/InicioSesion" className="nav">INICIO SESION</NavLink>
                    <NavLink to="/CrearCuenta" className="nav">CREAR CUENTA</NavLink>
                    </nav>
                )}
                
                
            </header>
        </div>
    );
}

export default Links;