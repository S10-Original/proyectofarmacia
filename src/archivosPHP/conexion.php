<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];

function conectarDB(){

  $servidor = "localhost";  //"sql111.infinityfree.com"
  $usuario = "stendavid"; //"if0_34690678"
  $password = "Urphael3."; //"hUezHh3vH9ZMgM"
  $bd = "farmacia_bdd"; //"if0_34690678_farmacia_bdd"

  

    $conexion = mysqli_connect($servidor, $usuario, $password,$bd);
        if($conexion){
            echo "";
        }else{
            echo 'Ha sucedido un error inexperado en la conexion de la base de datos';
        }

    return $conexion;
}
?>