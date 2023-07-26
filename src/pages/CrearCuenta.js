import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/login.css'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';



//proyectos-uni.infinityfreeapp.com/htdocs
const URL_API = 'http://localhost/proyectofarmacia/src/archivosPHP/registrar.php'; //

export default function CrearCuenta() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    if(data.idTipoUsuario ==2 || data.idTipoUsuario==3) {
        console.log(data);
    fetch (URL_API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then( resp=> resp.json())
    .then(json=>{
        reset();
        console.log("respuesta", json);
        alertify.alert("Creacion de Cuenta",json.msj);
    })
    }
    else{
        alertify.alert("Error","Por favor, seleccionar un nivel de acceso");
    }
  };
  console.log(errors);
  
  return (
    <div className='fondo'>
        <h2>Ventana Creación de Cuenta</h2>
        <div className='login'>
            <div className='row mt-4'>
                <div className='col-sm-4 offset-4 mt-5'>
                    <div className='card pt-5'>
                        <div className='card-header text-center'>
                            <h3>
                                FORMULARIO
                            </h3>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <center>{errors.usuario && <span className='text-danger small'>Introducir correo</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon1">👤</span>
                                    </div>
                                    <input id='basic-addon1' className='form-control' type="email" placeholder="correo" {...register("usuario", {required: true})} />
                                </div>
                                <center>{errors.clave && <span className='text-danger small'>Introducir clave</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon2">🔒</span>
                                    </div>
                                    <input id='basic-addon2' className='form-control' type="password" placeholder="clave" {...register("clave", {required: true, maxLength: 10})} />
                                </div>
                                <center>{errors.nombre && <span className='text-danger small'>Introducir nombre</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon3">🧑🏻</span>
                                    </div>
                                    <input id='basic-addon3' className='form-control' type="text" placeholder="nombre" {...register("nombre", {required: true})} />
                                </div>
                                <center>{errors.apellidos && <span className='text-danger small'>Introducir apellidos</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon4">🧬</span>
                                    </div>
                                    <input id='basic-addon4' className='form-control' type="text" placeholder="apellidos" {...register("apellidos", {required: true})} />
                                </div>
                                <center>{errors.idTipoUsuario && <span className='text-danger small'>Seleccionar nivel de acceso</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon5">🔑</span>
                                    </div>
                                    <select id='basic-addon5' className='form-select' {...register("idTipoUsuario", { required: true })}>
                                            <option value={null}>Seleccionar nivel de acceso:</option>
                                            <option value={2}>Gerente</option>
                                            <option value={3}>Empleado</option>
                                        </select>
                                </div>
                            <center><input type="submit" className="btn btn-info btn-lg btn-block" style={{color: "white"}} /></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}