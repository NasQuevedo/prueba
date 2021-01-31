/**
* Method to create a new item on Databae
*/
function create(id){
	let address 	= "";
	let city 		= "";
	let phone 		= "";
	let postalCode 	= "";
	let type 		= "";
	let price 		= "";
	for(let i =0; i<data1.length; i++){
		if(data1[i].Id == id){
			address 	= data1[i].Direccion;
			city 		= data1[i].Ciudad;
			phone 		= data1[i].Telefono;
			postalCode 	= data1[i].Codigo_Postal;
			type 		= data1[i].Tipo;
			price 		= data1[i].Precio;
		}
	}

	jQuery.ajax({
		url: "controller/create.php",
		type: "GET",
		dataType: "json",
		data:{
			"operacion":"crear",
			"address":address,
			"city":city,
			"phone": phone,
			"postalCode": postalCode,
			"type": type,
			"price": price,
			"code": id
		},
		success: function(response){
			alert(response.Message);
			setTimeout(function(){
				location.reload();
			}, 1000);
		}
	});
}

/**
* Method to consult all the data on Database
*/
function consult(){
	jQuery.ajax({
		url: "controller/consult.php",
		type: "GET",
		dataType: "json",
		data:{
			"operacion": "consultar"
		},
		success: function(response){
			if(response.length > 0){
				jQuery("#tab-2 .tituloContenido").hide();
				for(let i =0; i<response.length; i++){
					jQuery("#bien"+response[i].code_number).hide();
					let html = "";	
					html += "<div class='itemMostrado card' id='bien_guardado"+response[i].id+"'>";
					html += "<img src='img/home.jpg' />";
					html += "<ul>";
					html += "<li><b>Direccion:</b> "+response[i].address+"</li>";
					html += "<li><b>Ciudad:</b> "+response[i].city+"</li>";
					html += "<li><b>Telefono:</b> "+response[i].phone+"</li>";
					html += "<li><b>Codigo Postal:</b> "+response[i].postal_code+"</li>";
					html += "<li><b>Tipo:</b> "+response[i].type+"</li>"; 
					html += "<li class='precioTexto'><b>Precio:</b> "+response[i].price+"</li>";
					html += "<li><button class='btn' value='Borrar' onclick='deleteItem("+response[i].id+")'>Borrar</button></li>";
					html += "</ul>"
					html += "</div>";
					jQuery("#divResultadosBusqueda2").append(html);
				}
			}
		}
	});
}

/**
* Method to delete a item
*/
function deleteItem(id){

	jQuery.ajax({
		url: "controller/delete.php",
		type: "GET",
		dataType: "json",
		data:{
			"operacion":"borrar",
			"id": id
		},
		success: function(response){
			alert(response.Message);
			setTimeout(function(){
				location.reload();
			}, 1000);
		}
	});
}