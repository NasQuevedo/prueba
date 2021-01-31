<?php
/**
* create controller
*
* file to create or update a record on the Database
*
* @version 1.0 Initial version
* @author Santiago Quevedo <qesantiago@gmail.com>
*/
require_once("../class/conexion.php");
$conexion = new Conexion();
$connect = $conexion->connect();
if($connect){

	if(isset($_GET['operacion']) && $_GET['operacion'] == "crear"){
		$address 	= $_GET['address'];
		$city 		= $_GET['city'];
		$phone 		= $_GET['phone'];
		$postalCode = $_GET['postalCode'];
		$type 		= $_GET['type'];
		$price 		= $_GET['price'];
		$code 		= $_GET['code'];

		$consult = "SELECT id FROM bienes WHERE code_number = $code";
		$data = $conexion->getData($connect, $consult);

		if(count($data) > 0){
			$query = "UPDATE bienes SET deleted = 0 WHERE id = ".$data[0]['id'];
		}else{
			$query = "INSERT INTO bienes(address, city, phone, postal_code, type, price, code_number, deleted)
					VALUES('$address', '$city', '$phone', '$postalCode', '$type', '$price', $code, 0)";
		}

		$insert = $conexion->executeQuery($connect,$query);

		$response = array();
		if($insert == "OK"){
			$response['Message'] = "El bien se ha creado correctamente";
		}else{
			$response['Message'] = $insert;
		}

		echo json_encode($response);
	}else{
		echo "Operacion incorrecta";
	}

}else{
	echo "Error al conectarse a la base de datos";
}
?>