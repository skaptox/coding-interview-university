var urlSuscripcion = "http://mcs.krasis.es/client/addmodsuscriptor.asp";

//puntero al formulario y prefijo en el nombre de los campos a validar
function ValUser(prefix) {
    var whitespace = ' \t\n\r';
    var bvalue = true;
    with (document.getElementById(prefix + "Email")) {
        for (i = 0; i <= length; i++) {
            if (whitespace.indexOf(value.charAt(i)) != -1) {
                bvalue = false;
            } else {
                bvalue = true;
                break;
            }
        }
        if (bvalue == false || value == '') {
            alert('El correo electrónico no puede estar en blanco');
            focus();
            return false;
        }
    }
    
  var expreReg = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/gi;
  var sEmail = document.getElementById(prefix + "Email").value;
  var rExecute = sEmail.match(expreReg);
  if (rExecute == null) {
    alert("El correo introducido no tiene una sintaxis válida");
    document.getElementById(prefix + "Email").focus();
    return false;
  }
  
  return true;
}

function submitSubscription(prefix) {
    //Se valida el formulario
    var res = ValUser(prefix);
    //Si el resultado es "true", entonces se envía el formulario
    if (res) {
        //Se asignan nombres a los campos antes de enviarlos
        document.getElementById(prefix + "Email").name = "Email";
        document.getElementById(prefix + "LastName").name = "LastName";
        document.getElementById(prefix + "Name").name = "Name";
        document.getElementById(prefix + "NewsLetterId").name = "NewsLetterId";
        //Se cambia el action
        document.forms[0].action = urlSuscripcion;
        //Se envía
        document.forms[0].submit();
    }
}