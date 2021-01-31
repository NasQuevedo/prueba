<?php
/**
* Conexion class
*
* Class to connect in intelcost_bienes Database
*
* @access public
* @version 1.0 Initial version
* @author Santiago Quevedo <qesantiago@gmail.com>
*/
class Conexion{
	private $host = "localhost";
	private $user = "root";
	private $password = "";
	private $db = "intelcost_bienes";
	private $connect;
	
	/**
	* Conexion construct
	* 
	* @access public
	* @version 1.0 Initial version
	* @author Santiago Quevedo <qesantiago@gmail.com>
	*/
	public function connect(){
		$connect = mysqli_connect($this->host, $this->user, $this->password, $this->db);
		return $connect;
	}

	/**
	* executeQuery Method
	*
	* Method to execute query
	*
	* @access public
	* @version 1.0 Initial version
	* @author Santiago Quevedo <qesantiago@gmail.com>
	* @param Object $connect Mysql Object
	* @param string $query
	* @return string
	*/
	public function executeQuery($connect, $query){
		$executeQuery = mysqli_query($connect, $query);
		if(!$executeQuery){
			return "Error al crear el bien ".mysqli_error($connect);
		}

		return "OK";
	}

	/**
	* getData Method
	*
	* Method to get data by query parameter
	*
	* @access public
	* @version 1.0 Initial version
	* @author Santiago Quevedo <qesantiago@gmail.com>
	* @param Object $connect Mysql Object
	* @param string $query
	* @return mixed string|array
	*/
	public function getData($connect, $query){
		$result = mysqli_query($connect, $query);
		$data = array();
		if($result){
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
				$data[] = $row;
			}
		}else{
			echo "Error al realizar la consulta ".mysqli_error($connect);
		}

		return $data;
	}
}
?>