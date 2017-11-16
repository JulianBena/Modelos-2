function validar(){
    var nombre, apellido, usuario, clave;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    
    if(nombre === "" || apellido === "" || usuario === "" || clave === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>20 || clave.length>20 || usuario.length>20 || clave.length>20){
        alert("20 caracteres como máximo");
        return false;
    }
}