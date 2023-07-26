import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRouteAdmin = ({conectado, idTipoUsuario}) => {
    if (!conectado) {
        return <Navigate to="/" />
    }
    else{
        if (idTipoUsuario == 2) //id sea gerente
        return <Outlet/>
    }
}

export default ProtectedRouteAdmin;