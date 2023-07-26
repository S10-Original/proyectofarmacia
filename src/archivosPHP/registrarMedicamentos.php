<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: text/html; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);
	require 'conexion.php';
	$con=conectarDB();

	$nombreMedicamento= $dataObject-> nombreMedicamento;
	$cantidad= $dataObject-> cantidad;
	$fechaVencimiento= $dataObject-> fechaVencimiento;
	$lote= $dataObject-> lote;
	$sucursal= $dataObject-> sucursal;
    $proveedor= $dataObject-> proveedor;
    $idTipoProducto= $dataObject-> idTipoProducto;
    $idUsuario= $dataObject-> idUsuario;
    $numeroFactura= $dataObject-> numeroFactura;

	$sqlQuery = "INSERT INTO medicamentos(nombreMedicamento,cantidad,fechaVencimiento,lote,sucursal,proveedor,idTipoProducto,idUsuario,numeroFactura) VALUES ('$nombreMedicamento','$cantidad','$fechaVencimiento','$lote','$sucursal','$proveedor','$idTipoProducto','$idUsuario','$numeroFactura')";

	if ($con->query($sqlQuery) === TRUE) {
		echo json_encode(array('isOk'=>'true', 'msj'=>'Registro almacenado satisfactoriamente'));
	} else {
		echo json_encode(array('isOk'=>'false', 'msj'=>$con->error));
	}
	mysqli_close($con);
}
?>