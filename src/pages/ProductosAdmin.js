import React,{useState,useEffect} from "react";
import { useForm } from 'react-hook-form';
import '../css/login.css'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import Tabla from "../components/Tabla.js";



const URL_API = 'http://localhost/proyectofarmacia/src/archivosPHP/registrarMedicamentos.php' ;
const URL_API2 = 'http://localhost/proyectofarmacia/src/archivosPHP/obtenerMedicamentos.php' ;


var DataLista;

function ProductosAdmin({id}) {

    const redireccionar = () => {
    window.open('http://localhost/proyectofarmacia/src/archivosPHP/reportes.php');
  };


const [isReady, setIsReady] = useState(false);
const [dataUpdated, setDataUpdated] = useState();

useEffect(()=>{
    obtenerRegistros();
},[] );

    const obtenerRegistros = () => {
        fetch(URL_API2)
        .then(resp=>resp.json())
        .then(json=>{
            //console.log(json);
            DataLista = json;
            setIsReady(true);
            setDataUpdated(DataLista);
        })
    }

    const handleDataUpdate = () => {
        obtenerRegistros();
    }


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if(data.idTipoProducto ==1 || data.idTipoProducto ==2 ||data.idTipoProducto ==3 ||data.idTipoProducto ==4 ||data.idTipoProducto ==5 ||data.idTipoProducto ==6 ||data.idTipoProducto ==7 ||data.idTipoProducto ==8) {
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
            alertify.alert("Ingreso de datos",json.msj);
            handleDataUpdate();
        })
        }
        else{
            alertify.alert("Error","Por favor, seleccionar un tipo de medicamento");
        }
    };
    console.log(errors);



    return(
        <div className="fondo">
            <h2>Pagina de Inicio</h2>
            <div className='login'>
            <div className='row mt-2'>
                <div className='col-sm-3 offset-0 mt-5'>
                    <div className='card pt-1'>
                        <div className='card-header text-center'>
                            <h3>Registro:</h3>
                        </div>
                        <div className='card-body'>

 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <center>{errors.nombre && <span className='text-danger small'>Introducir medicamento</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon1">💊</span>
                                    </div>
                                    <input id="basic-addon1" className="form-control" type="text" placeholder="nombre de medicamento" {...register("nombreMedicamento", {required: true})} />
                                </div>


                                <center>{errors.cantidad && <span className='text-danger small'>Introducir cantidad</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon2">🧮</span>
                                    </div>
                                    <input id="basic-addon2" className="form-control" type="number" placeholder="cantidad" {...register("cantidad", {required: true, min: 0})} />
                                </div>


                                <center>{errors.fechaVencimiento && <span className='text-danger small'>Introducir fecha de Vencimiento</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon3">🗓️</span>
                                    </div>
                                    <input id="basic-addon3" className="form-control" type="date" placeholder="fechaVencimiento" {...register("fechaVencimiento", {required: true})} />
                                </div>


                                <center>{errors.lote && <span className='text-danger small'>Introducir lote</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon4">🧬</span>
                                    </div>
                                    <input id="basic-addon4" className="form-control" type="number" placeholder="lote" {...register("lote", {required: true})} />
                                </div>


                                <center>{errors.sucursal && <span className='text-danger small'>Introducir sucursal</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon5">🧬</span>
                                    </div>
                                    <input id="basic-addon5" className="form-control" type="text" placeholder="sucursal" {...register("sucursal", {required: true})} />
                                </div>


                                <center>{errors.proveedor && <span className='text-danger small'>Introducir proveedor</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon6">🧬</span>
                                    </div>
                                    <input id="basic-addon6" className="form-control" type="text" placeholder="proveedor" {...register("proveedor", {required: true})} />
                                </div>


                                <center>{errors.idTipoProducto && <span className='text-danger small'>Seleccionar tipo de producto</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon7">🔑</span>
                                    </div>
                                    <select id="basic-addon7" className="form-select" {...register("idTipoProducto", { required: true })}>
                                        <option value={null}>Seleccionar tipo:</option>
                                        <option value={1}>Analgesicos</option>
                                        <option value={2}>Antiinflamatorios</option>
                                        <option value={3}>Antidepresivos</option>
                                        <option value={4}>Antihistaminicos</option>
                                        <option value={5}>Antipsicoticos</option>
                                        <option value={6}>Ansioliticos</option>
                                        <option value={7}>Hipnoticos</option>
                                        <option value={8}>Psicotropicos</option>
                                    </select>
                                </div>


                                <input type="number" style={{display:"none"}} value={id} placeholder="idUsuario" {...register("idUsuario", {required: true})} />


                                <center>{errors.numeroFactura && <span className='text-danger small'>Introducir numero de Factura</span>}</center>
                                <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                        <span className="input-group-text" id="basic-addon8">📜</span>
                                    </div>
                                    <input id="basic-addon8" className="form-control" type="number" placeholder="numeroFactura" {...register("numeroFactura", {required: true})} />
                                </div>
                            <center><input type="submit" className="btn btn-info btn-lg btn-block" style={{color: "white"}} /></center>
                        </form>
                        </div>
                    </div>
                </div>

                <div className='col-sm-9 offset-0 mt-5'>
                    <div className='card pt-1'>
                        <div className='card-header text-center'>
                            <h3>Tabla de Medicamentos</h3>
                        </div>
                        <div className='card-body'>
                                <div className='input-group mb-3'>
                                    {
                                        isReady ?
                                         <Tabla array={dataUpdated}/>
                                         :
                                         <div className="alert alert-info">
                                             Cargando datos...
                                         </div>

                                    }
                                    <center><button onClick={redireccionar} className="btn btn-info" style={{color: "white"}}>reporte</button></center>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default ProductosAdmin;

