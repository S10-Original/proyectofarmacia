import React from "react";
import '../css/login.css';
import logoEditar from '../img/edit.svg';
import logoBorrar from '../img/delete.svg';

function TablaAdmin(props) {
    return(
        <table className="table table-striped-columns">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Vencimiento</th>
      <th scope="col">Lote</th>
      <th scope="col">Sucursal</th>
      <th scope="col">Proveedor</th>
      <th scope="col">Clasificacion</th>
      <th scope="col">numFactura</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
      {
          props.array.map((item, i)=>(
              <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{item.nombreMedicamento}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.fechaVencimiento}</td>
                  <td>{item.lote}</td>
                  <td>{item.sucursal}</td>
                  <td>{item.proveedor}</td>
                  <td>{item.etiquetaTipoProducto}</td>
                  <td>{item.numeroFactura}</td>
                  <td>
                      <td role="button" id={item.id} onClick={props.handleEditar}>
                      <img className="svg-icon" src={logoEditar} alt="iconoEditar"/>
                      </td>
                      <td>
                        <img className="svg-icon" src={logoBorrar} alt="iconoBorrar"/>
                      </td>
                  </td>
                  

              </tr>
          ))
      }
   
  </tbody>
</table>



    );
}

export default TablaAdmin;