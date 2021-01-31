<?php
/**
* create controller
*
* file to get all the data on the database if the metada is zero
*
* @version 1.0 Initial version
* @author Santiago Quevedo <qesantiago@gmail.com>
*/
require_once("../class/conexion.php");
$conexion = new Conexion();
$connect = $conexion->connect();
if($connect){
	if(isset($_GET['operacion']) && $_GET['operacion'] == "consultar"){
		$query = "SELECT id, address, city, phone, postal_code, type, price, code_number FROM bienes WHERE deleted = 0";
		$data = $conexion->getData($connect, $query);

		echo json_encode($data);
	}else{
		echo "Operacion incorrecta";
	}
}else{
	echo "Error al conectarse a la base de datos";
}
?>