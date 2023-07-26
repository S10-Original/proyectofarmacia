import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({conectado, idTipoUsuario}) => {
    if (!conectado) {
        return <Navigate to="/" />
    }
    else{
        if (idTipoUsuario == 3) //id sea empleado basico
        return <Outlet/>
    }
}

export default ProtectedRoute;