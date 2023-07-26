<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: text/html; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
  $method = $_SERVER['REQUEST_METHOD'];
  $JSONData = file_get_contents("php://input");
  $dataObject = json_decode($JSONData);  
  require 'conexion.php';
  $con=conectarDB();



  //sleep(1);
  $id = $dataObject-> id;
  $nombreMedicamento = $dataObject-> nombreMedicamento;
  $cantidad = $dataObject-> cantidad;
  $fechaVencimiento = $dataObject-> fechaVencimiento;
  $lote = $dataObject-> lote;
  $sucursal = $dataObject-> sucursal;
  $proveedor = $dataObject-> proveedor;
  $idTipoProducto = $dataObject-> idTipoProducto;
  $idUsuario = $dataObject-> idUsuario;
  $numeroFactura = $dataObject-> numeroFactura;




  $actualizacion = "UPDATE medicamentos SET 
		nombreMedicamento='$nombreMedicamento', 				
		cantidad=$cantidad,
		fechaVencimiento=$fechaVencimiento,
    lote=$lote,
    sucursal='$sucursal',
    proveedor='$proveedor',
    idTipoProducto=$idTipoProducto,
    idUsuario=$idUsuario,
    numeroFactura=$numeroFactura
		WHERE id = $id";
   
   $resultadoActualizacion = mysqli_query($con, $actualizacion); 

   if($resultadoActualizacion)
   {
    echo json_encode(array('isOk'=>true,'msj'=>'Registro editado de forma exitosa.'));
   }
   else
   {
    echo json_encode(array('isOk'=>false,'msj'=>$con->error)); 
   }
}
?>