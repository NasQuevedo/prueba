<?php
/**
* delete controller
*
* file to update metadata by record id
*
* @version 1.0 Initial version
* @author Santiago Quevedo <qesantiago@gmail.com>
*/
require_once("../class/conexion.php");
$conexion = new Conexion();
$connect = $conexion->connect();
if($connect){
	if(isset($_GET['operacion']) && $_GET['operacion'] == "borrar"){
		$id = $_GET['id'];

		$query = "UPDATE bienes SET deleted = 1 WHERE id = $id";

		$insert = $conexion->executeQuery($connect,$query);

		$response = array();
		if($insert == "OK"){
			$response['Message'] = "El bien se ha eliminado correctamente";
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