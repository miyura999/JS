// Desarrolla un aplicativo que permita el registro de empleados, así como el valor de su nómina mensual ($ 1.200.000+ un bono del 35%), ahora bien, es importante destacar que si el empleado trabajo mas de 60 horas a la semana, se le debe pagar un saldo de extra de 20.000 por hora laborada, y si tiene hijos, recibo un bono por subsidio familiar de $300.000.
// Realiza el registro de los usuarios, el método listar y un método de buscar e imprimir los datos del empleado buscado (documento)
// Implementa todo lo aprendido.
// Éxitos.

let empleados = []

function nomina() {
    let subnomina = 1200000 + (1200000 * 0.35)

    let horasExtras = parseInt(prompt("Ingrese las horas trabajas en el mes: "))
    let contador = 0
    if (horasExtras > 240) {
        for (let i = 240; i < horasExtras; i++) {
            contador = contador + 20000

        }
        subnomina = subnomina + contador
    }
    let hijos = parseInt(prompt("Ingrese la cantidad de hijos de tinene claro esta si no marque 0 : "))

    if (hijos > 0) {
        subnomina = subnomina + 300000
    }
    return subnomina



}

function registroEmpleado() {

    let cantidad =parseInt(prompt("Ingrese el numero de de empleados a agregar"))

    for (let i = 0; i < cantidad; i++) {
        let nuevoEmpleado = {
            "documento": parseInt(prompt("Digite su documento de identidad")),
            "nombre": prompt("Digite su nombre"),
            "edad": parseInt(prompt("Digite su edad")),
            nomina: nomina()
        };
        empleados.push(nuevoEmpleado);
    }


}

function mostrarEmpleado (){
    let documento =parseInt(prompt("Digite el numero del documento del empleado a buscar"))
    let encontrado = false;

    for (let i = 0 ; i < empleados.length; i++) {

        if (empleados[i].documento === documento){
            encontrado = true;
            alert(`Nombre: ${empleados[i].nombre}, Documento: ${empleados[i].documento}, Edad: ${empleados[i].edad}, Nómina: ${empleados[i].nomina} pesos `);
            break;
        }else {
            alert("El empleado no existe.");
        }
        

    }

}

function eliminarEmpleado (){
    let documento = parseInt(prompt("Digite el número del documento del empleado a eliminar"));
    const longitudInicial = empleados.length;
    empleados = empleados.filter(a => a.documento !== documento);

    if (empleados.length < longitudInicial) {
        alert("Empleado eliminado exitosamente.");
    } else {
        alert("El empleado no existe.");
    }

}

function editarEmpleado() {
    let documento = parseInt(prompt("Digite el número del documento del empleado a editar"));
    let encontrado = false;
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].documento === documento) {
            encontrado = true;
            let nuevoNombre = prompt("Digite el nuevo nombre del empleado");
            let nuevaEdad = parseInt(prompt("Digite la nueva edad del empleado"));

            empleados[i].nombre = nuevoNombre;
            empleados[i].edad = nuevaEdad;

            alert("Empleado editado exitosamente.");
            break;
        }
    }
    if (!encontrado) {
        alert("El empleado no existe.");
    }
}

function listarEmpleado() {
    for (let i = 0; i < empleados.length; i++) {
        alert(`Lista de empleados
            Nombre: ${empleados[i].nombre}
            Documento: ${empleados[i].documento}
            Edad: ${empleados[i].edad} 
            `
        )
    }
}
function star(){
    do{
    opcion = parseInt(prompt(`Seleccione una de las opciones 
        1. Agregar empleado
        2. Eliminar empleado
        3. Mostrar empleado
        4. Editar empleaod
        5. listar empleado
        6. Salir`));

    switch (opcion){
        case 1 :
            registroEmpleado();
            break;
        case 2 : 
            eliminarEmpleado();
            break;
        case 3:
            mostrarEmpleado();
            break;
        case 4:
            editarEmpleado();
            break;

        case 5:
            listarEmpleado()
            break;
        case 6:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción no válida, por favor intente de nuevo.");

    }
}while(opcion !== 6)



}

star()