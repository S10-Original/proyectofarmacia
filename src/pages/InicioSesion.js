import React, { useRef,useState } from "react";
import '../css/login.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';




const URL_LOGIN = 'http://localhost/proyectofarmacia/src/archivosPHP/login.php';



const enviarData = async( url, data) => {

    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log(resp);

    const json = await resp.json();
    console.log(json);

    return json;

}

function InicioSesion(props) {
    const [error, setError] = useState(null);
    const [espera, setEspera] = useState(false);


    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin= async()=>{
        setEspera(true);

        const data = {
            "usuario" : refUsuario.current.value,
            "clave" : refClave.current.value
        };
        console.log(data);
        const respuestaJson = await enviarData(URL_LOGIN,data);
        
        console.log("respuesta desde el evento",respuestaJson.conectado);
        console.log("tipo de usuario: ",respuestaJson.idTipoUsuario);

        props.acceder(respuestaJson.conectado);
        props.idUsuario(respuestaJson.id);
        props.tipoUsuario(respuestaJson.idTipoUsuario);
        props.nombreUsuario(respuestaJson.nombre);
        props.apellidoUsuario(respuestaJson.apellidos);
        setError(respuestaJson.error);
        setEspera(false);
        if(respuestaJson.conectado)
            alertify.alert("Inicio de sesion satisfactorio");

    }




    /*
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);


    function handleSubmit(event) {
        event.preventDefault();

        fetch('tu_archivo_php.php', {
            method: 'POST' ,
            body: JSON.stringify({ username, password})
        })
        .then(Response => Response.json())
        .then(data => setLoginStatus(data.success))
        .catch(error => console.error(error));
    }



    {loginStatus !== null && (<div>loginStatus ? 'Login exitoso' : 'Error en el login'</div>)}
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Usuario:
                                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                                    </label><br/>
                                    <label>
                                        Contraseña:
                                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                                    </label> <br/>
                                    <button type="submit">Login</button>

                                </form>
    */

    return(
        <div className="fondo">
            <h2>Ventana Inicio de Sesion</h2>
            <div className="login">
                <div className="row mt-4">
                    <div className="col-sm-4 offset-4 mt-5">
                        <div className="card pt-5">
                            <div className="card-header text-center">
                                <h3>
                                Inicio Sesion
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">👤</span>
                                    </div>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Correo" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1"
                                        ref={refUsuario}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">🔒</span>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Clave" 
                                        aria-label="Clave" 
                                        aria-describedby="basic-addon2"
                                        ref={refClave}
                                    />

                                </div>


                                {
                                    error &&
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                }
                                

                                <center><button onClick={handleLogin} disabled={ espera} className="btn btn-info btn-lg btn-block" style={{color: "white"}}>Acceder</button></center>




                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default InicioSesion;