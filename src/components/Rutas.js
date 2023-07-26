import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Inicio from "../pages/Inicio";
import InicioSesion from "../pages/InicioSesion";
import Links from "../components/Links";
import CrearCuenta from "../pages/CrearCuenta";
import Principal from "../pages/Principal";
import PrincipalAdmin from "../pages/PrincipalAdmin";
import Productos from "../pages/Productos";
import ProductosAdmin from "../pages/ProductosAdmin";
import ProductosAdminAnadir from "../pages/ProductosAdminAnadir";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";



 const Rutas = () => {

    const [conectado, setConectado] = useState(false);
    const [id, setId] = useState(0);
    const [idTipoUsuario, setIdTipoUsuario] = useState(0);
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");

    const acceder=(estado) => {
        setConectado(estado)
    }

    const idUsuario=(estado) => {
        setId(estado)
    }

    const tipoUsuario=(estado) => {
        setIdTipoUsuario(estado)
    }

    const nombreUsuario=(estado) => {
        setNombre(estado)
    }

    const apellidoUsuario=(estado) => {
        setApellidos(estado)
    }

    const salir=(estado) => {
        setConectado(estado)
    }


    return(
        <div>
            <Router>
                <Links conectado={conectado} idTipoUsuario={idTipoUsuario} />
                <Routes>
                    <Route exact path='/' element={<Inicio/>} />
                    <Route exact path='/InicioSesion' element={<InicioSesion acceder={acceder} idUsuario={idUsuario} tipoUsuario={tipoUsuario} nombreUsuario={nombreUsuario} apellidoUsuario={apellidoUsuario}/>} />
                    <Route exact path='/CrearCuenta' element={<CrearCuenta/>} />
                    <Route element={<ProtectedRoute conectado={conectado} idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>}>
                        <Route exact path='/Principal' element={<Principal salir={salir} conectado={conectado} idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>} />
                        <Route exact path='/Productos' element={<Productos idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>} />
                    </Route>
                    <Route element={<ProtectedRouteAdmin conectado={conectado} idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>}>
                        <Route exact path='/PrincipalAdmin' element={<PrincipalAdmin salir={salir} conectado={conectado} idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>} />
                        <Route exact path='/ProductosAdmin' element={<ProductosAdmin id={id} idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>} />
                        <Route exact path='/ModificarAdmin' element={<ProductosAdminAnadir id={id} idTipoUsuario={idTipoUsuario} nombre={nombre} apellidos={apellidos}/>} />
                    </Route>
                    
                </Routes>
            </Router>
            
        </div>
    );
};

export default Rutas;

