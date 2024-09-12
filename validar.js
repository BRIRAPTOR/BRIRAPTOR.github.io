function validar(form) {
let nombre = form.nombre.value.trim();
let edad = form.edad.value.trim();
let sexo = form.sexo.value.trim();
if (nombre === "") {
    alert("El campo nombre es obligatorio.");
        return false; // Detiene el envío del formulario
}
if (edad === "") {
    alert("El campo edad es obligatorio.");
        return false; // Detiene el envío del formulario
}
if (sexo === "") {
    alert("El campo sexo es obligatorio.");
        return false; // Detiene el envío del formulario
}
return true; // Permite el envío del formulario
}
