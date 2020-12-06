function validar() {

  var name = document.getElementById("nombre").value;
  if (name.length == 0 || /^\s+$/.test(name)) {
    alert("El campo *nombre* es obligatorio.");
    return false;
  }

  DNI = document.getElementById("documento").value;
  if (DNI.length == 0 || /^\s+$/.test(DNI)) {
    alert("El campo *Dni* es obligatorio.");
    return false;
  }

  phone = document.getElementById("telefono").value;
  if (phone.length == 0 || !/^\d{8}$/.test(phone)) {
    alert("El campo *Telefono* es obligatorio, el mismo debe tener 8 dígitos.");
    return false;
  }
    
  var contador = 0;
  if((document.getElementById("opciones1Si").checked == false) && (document.getElementById("opciones1No").checked == false)){
    alert("Todos los campos de *Síntomas* son obligatorios.");
    return false;
  }else{
    if(document.getElementById("opciones1Si").checked){
      contador++;
    }
  }

  if((document.getElementById("opciones2Si").checked == false) && (document.getElementById("opciones2No").checked == false)){
    alert("Todos los campos de *Síntomas* son obligatorios.");
    return false;
  }else{
    if(document.getElementById("opciones2Si").checked){
      contador++;
    }
  }

  if((document.getElementById("opciones3Si").checked == false) && (document.getElementById("opciones3No").checked == false)){
    alert("Todos los campos de *Síntomas* son obligatorios.");
    return false;
  }else{
    if(document.getElementById("opciones3Si").checked){
      contador++;
    }
  }

  if((document.getElementById("opciones4Si").checked == false) && (document.getElementById("opciones4No").checked == false)){
    alert("Todos los campos de *Síntomas* son obligatorios.");
    return false;
  }else{
    if(document.getElementById("opciones4Si").checked){
      contador++;
    }
  }


  if((document.getElementById("opciones5Si").checked == false) && (document.getElementById("opciones5No").checked == false)){
    alert("Todos los campos de *Síntomas* son obligatorios.");
    return false;
  }else{
    if(document.getElementById("opciones5Si").checked){
      contador++;
    }
  }

  var email = document.getElementById("correo").value;
    if (!(/^[0-9a-zA-Z..-]+\@[0-9a-zA-Z..-]+\.[0-9a-zA-Z]+$/.test(email))){
    alert("Debe ingresar una dirección de correo valida");
    return false;
  }

  alert("El formulario fue completado con éxito, "+contador+" síntomas de COVID fueron detectados.")
  return true;
}



function mostrar(){
  document.getElementById("opcionesPaises").style.display="block";
  document.getElementById("labelPaisesVisitados").style.display="block";
}

function ocultar(){
    document.getElementById("opcionesPaises").style.display="none";
    document.getElementById("labelPaisesVisitados").style.display="none";
}



function mostrar1(){
  document.getElementById("direccion").style.display="block";
  document.getElementById("labelDireccion").style.display="block";
}

function ocultar2(){
    document.getElementById("direccion").style.display="none";
    document.getElementById("labelDireccion").style.display="none";
}