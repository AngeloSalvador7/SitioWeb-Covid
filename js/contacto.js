function validar(){

  var name = document.getElementById("nombre").value;
    if (name.length == 0) {
      alert("El campo *nombre* es obligatorio");
      return false;
    }

  var email = document.getElementById("email").value;
    if (!(/^[0-9a-zA-Z..-]+\@[0-9a-zA-Z..-]+\.[0-9a-zA-Z]+$/.test(email))){
    alert("Debe ingresar una dirección de correo valida");
  return false;
  }
  
  var phone = document.getElementById("telf").value;
    if (phone.length == 0 || !/^\d{8}$/.test(phone)) {
    alert("El campo teléfono es obligatorio, debe contener 8 digitos.");
    return false;
  }

    alert("El formulario fue completado correctamente. ")
  return true;
}

function textarea(){
    var maxLength = 1000;
    var strLength = document.getElementById("consulta").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
      document.getElementById("caracteresRestantes").innerHTML = '<span style="color: red;">Usted ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
      document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}