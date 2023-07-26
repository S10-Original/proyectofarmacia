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

	$usuario= $dataObject-> usuario;
	$clave= $dataObject-> clave;
	$nombre= $dataObject-> nombre;
	$apellidos= $dataObject-> apellidos;
	$idTipoUsuario= $dataObject-> idTipoUsuario;

	$sqlQuery = "INSERT INTO usuarios (usuario,clave,nombre,apellidos,idTipoUsuario)
	VALUES ('$usuario','$clave','$nombre','$apellidos','$idTipoUsuario')";

	if ($con->query($sqlQuery) === TRUE) {
		echo json_encode(array('isOk'=>'true', 'msj'=>'Registro almacenado satisfactoriamente'));
	} else {
		echo json_encode(array('isOk'=>'false', 'msj'=>$con->error));
	}
	mysqli_close($con);
}
?>