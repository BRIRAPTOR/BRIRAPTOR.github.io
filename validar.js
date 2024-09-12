function validar(form) {
let nombre = form.nombre.value.trim();
if (nombre === "") {
    alert("El campo nombre es obligatorio.");
        return false; // Detiene el envío del formulario
       console.log("El campo nombre es obligatorio.");
}
return true; // Permite el envío del formulario
}
