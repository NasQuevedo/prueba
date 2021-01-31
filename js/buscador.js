/** global variable to store all the data*/
var data1;

/**
* Method to get all the data restored
*/
function getStoredData(){
	consult();
}

/**
* Method to get all data stored in data-1.json
*/
function getData(){
  jQuery(".tituloContenido").hide();
  jQuery.getJSON("data-1.json", function(data){
    data1         = data;
    let cities    = [];
    let types     = [];
    let cont      = 0;
    let contTypes = 0;
    
    for(var i=0; i<data.length; i++){
      if(jQuery.inArray(data[i].Ciudad, cities) === -1){
          cities[cont] = data[i].Ciudad;
          cont++;
      }

      if(jQuery.inArray(data[i].Tipo, types) === -1){
        types[contTypes] = data[i].Tipo;
        contTypes++;
      }

      drawItem(i, data);
    }
     
    getStoredData(); 
    getCities(cities);
    getTypes(types);
  });
}

/**
* Method to draw a new item
*/
function drawItem(i, data){
  let html = "";
  html += "<div class='itemMostrado card' id='bien"+data[i].Id+"'>";
  html += "<img src='img/home.jpg' />";
  html += "<ul>";
  html += "<li><b>Direccion:</b> "+data[i].Direccion+"</li>";
  html += "<li><b>Ciudad:</b> "+data[i].Ciudad+"</li>";
  html += "<li><b>Telefono:</b> "+data[i].Telefono+"</li>";
  html += "<li><b>Codigo Postal:</b> "+data[i].Codigo_Postal+"</li>";
  html += "<li><b>Tipo:</b> "+data[i].Tipo+"</li>"; 
  html += "<li class='precioTexto'><b>Precio:</b> "+data[i].Precio+"</li>";
  html += "<li><button class='btn' value='Guardar' onclick='create("+data[i].Id+")'>Guardar</button></li>";
  html += "</ul>"
  html += "</div>";
  jQuery("#divResultadosBusqueda").append(html);
}

/**
* Method to add all the cities in the combobox
*/
function getCities(cities){
  let options = "";
  for(var i =0; i<cities.length; i++){
    options += "<option value='"+cities[i]+"'>"+cities[i]+"</option>";
  }
  jQuery("#selectCiudad").append(options);
}

/**
* Method to add all the types in the combobox
*/
function getTypes(types){
  let options = "";
  for(var i =0; i<types.length; i++){
    options += "<option value='"+types[i]+"'>"+types[i]+"</option>";
  }
  jQuery("#selectTipo").append(options);
}

/**
* Method to find all the items by filters
*/
function search(){
  jQuery("#divResultadosBusqueda").html("");
  let city  = jQuery("#selectCiudad").val();
  let type  = jQuery("#selectTipo").val();
  let price = jQuery("#rangoPrecio").val();
  let found = [];
  let cont  = 0;

  priceArray = price.split(";");

  for(var i=0; i<data1.length; i++){
    priceStored = data1[i].Precio.replace("$","");
    priceStored = priceStored.replace(",", "");
    if(parseInt(priceStored) >= parseInt(priceArray[0]) && parseInt(priceStored) <= parseInt(priceArray[1])){
        if(city != "" && type == ""){
          if(city == data1[i].Ciudad){
            found[cont] = data1[i];
            cont++;
          }
        }else if(city != "" && type != ""){
          if(city == data1[i].Ciudad && type == data1[i].Tipo){
              found[cont] = data1[i];
              cont++;
          }
        }else if(city == "" && type != ""){
          if(type == data1[i].Tipo){
            found[cont] = data1[i];
            cont++;
          }
        }else{
          found[cont] = data1[i];
          cont++;
        }
    }
  }
  
  if(found.length > 0){
    drawResults(found);
  }else{
    jQuery(".tituloContenido").show();
  }
}

/**
* Method to draw the results
*/
function drawResults(found){
  for(let i = 0; i<found.length; i++){
      drawItem(i, found);
  }
}


getData();