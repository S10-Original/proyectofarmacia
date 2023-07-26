import React,{useState,useEffect} from "react";
import { useForm } from 'react-hook-form';
import '../css/login.css'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import Tabla from '../components/Tabla.js';



const URL_API2 = 'http://localhost/proyectofarmacia/src/archivosPHP/obtenerMedicamentos.php' ;

var DataLista;
function Productos({id}) {
    const redireccionar = () => {
    window.open('http://localhost/proyectofarmacia/src/archivosPHP/reportes.php');
  };


const [isReady, setIsReady] = useState(false);

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
        })
    }

    return(
        <div className="fondo">
            <h2>Pagina de Inicio</h2>
            <div className='login'>
            <div className='row mt-2'>
                

                <div className='col-sm-9 offset-2 mt-5'>
                    <div className='card pt-1'>
                        <div className='card-header text-center'>
                            <h3>Tabla de Medicamentos</h3>
                        </div>
                        <div className='card-body'>
                                <div className='input-group mb-3'>
                                    {
                                        isReady ?
                                         <Tabla array={DataLista}/>
                                         :
                                         <div className="alert alert-info">
                                             Cargando datos...
                                         </div>

                                    }
                                    <center><button onClick={redireccionar} className="btn btn-info" style={{color: "white",textAlign: "center"}}>reporte</button></center>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Productos;