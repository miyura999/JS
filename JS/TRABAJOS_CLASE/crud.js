const { opcion, start } = require("./examen_1/inventario");

let aprendiz = []

function editarAprendiz() {
    let documento = parseInt(prompt("Digite el número del documento del aprendiz a editar"));
    let encontrado = false;
    for (let i = 0; i < aprendiz.length; i++) {
        if (aprendiz[i].documento === documento) {
            encontrado = true;
            let nuevoNombre = prompt("Digite el nuevo nombre del aprendiz");
            let nuevaEdad = parseInt(prompt("Digite la nueva edad del aprendiz"));
            let nuevoPrograma = prompt("Digite el nuevo programa de formación del aprendiz");

            aprendiz[i].nombre = nuevoNombre;
            aprendiz[i].edad = nuevaEdad;
            aprendiz[i].Programa = nuevoPrograma;

            alert("Aprendiz editado exitosamente.");
            break;
        }
    }
    if (!encontrado) {
        alert("El aprendiz no existe.");
    }
}

function agregarAprendiz() {
    let cantidad = parseInt(prompt("Digite el número de aprendices a agregar"));
    for (let i = 0; i < cantidad; i++) {
        let nuevoAprendiz = {
            "nombre": prompt("Digite su nombre"),
            "documento": parseInt(prompt("Digite su documento de identidad")),
            "edad": parseInt(prompt("Digite su edad")),
            "Programa": prompt("Digite su programa de formación")
        };
        aprendiz.push(nuevoAprendiz);
    }
}

function eliminarAprendiz() {
    let documento = parseInt(prompt("Digite el número del documento del aprendiz a eliminar"));
    const longitudInicial = aprendiz.length;
    aprendiz = aprendiz.filter(a => a.documento !== documento);

    if (aprendiz.length < longitudInicial) {
        alert("Aprendiz eliminado exitosamente.");
    } else {
        alert("El aprendiz no existe.");
    }
}

function mostrarAprendices() {
    if (aprendiz.length == 0) {
        alert("No hay aprendices registrados");
    } else {
        let lista = "";
        for (let i = 0; i < aprendiz.length; i++) {
            lista += `Nombre: ${aprendiz[i].nombre}, Documento: ${aprendiz[i].documento}, Edad: ${aprendiz[i].edad}, Programa: ${aprendiz[i].Programa}\n`;
        }
        alert(lista);
    }
}



let opcion = 0;
do {
    opcion = parseInt(prompt(`Seleccione una de las opciones 
        1. Agregar aprendiz
        2. Eliminar aprendiz
        3. Mostrar aprendices
        4. Editar aprendiz
        5. Salir`));

    switch (opcion) {
        case 1:
            agregarAprendiz();
            break;
        case 2:
            eliminarAprendiz();
            break;
        case 3:
            mostrarAprendices();
            break;
        case 4:
            editarAprendiz();
            break;
        case 5:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción no válida, por favor intente de nuevo.");
    }
} while (opcion !== 5);

    start();
