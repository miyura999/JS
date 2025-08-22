let categorias = [
    {
        "nombre": "aseo",
        "descripcion ": "productos relacionado a aseo"
    }]
let productos = []

//Menu categorias


function Menu_categorias() {

    let opcion = 0

    do {
        opcion = parseInt(prompt(`---------------------------------------
                               bienvenido a categorias digite la opcion a la cual desea ingresar
                               1. mostrar categorias
                               2. salir`));

        switch (opcion) {
            // case 1:
            //     registro_categoria()
            //     break

            case 1:
                listar_categorias()
                break

            case 2:
                alert("has salido del panel de categorias")
                break
        }
    } while (opcion !== 2)



}

//registro de categorias


// function registro_categoria(){

//     let cantidad = parseInt(prompt("Digite el número de categorias a  agregar"));
//     for (let i = 0; i < cantidad; i++) {
//         let nueva_categoria = {
//             "nombre": prompt("Digite el nombre de la categoriaa resgistrar"),
//             "descripcion": prompt("Digite la descripcion de la categoria")
//         };
//         categorias.push(nueva_categoria);
//     }
// }

//listar de categorias

function listar_categorias() {

    let lista = "";
    for (let i = 0; i < categorias.length; i++) {
        lista += `${i + 1} : Nombre: ${categorias[i].nombre}, descripcion: ${categorias[i]["descripcion "]}\n`;
    }
    alert(lista);

}

//Menu productos
function Menu_productos() {

    let opcion = 0

    do {
        opcion = parseInt(prompt(`---------------------------------------
                               bienvenido a productos digite la opcion a la cual desea ingresar
                               1. registrar productos
                               2. mostrar productos
                               3. salir`));

        switch (opcion) {
            case 1:
                registro_productos()
                break

            case 2:
                listar_productos()
                break

            case 3:
                alert("has salido del panel de productos")
                break
        }
    } while (opcion !== 3)
}

// resgistro de productos

function registro_productos() {

    let cantidad = parseInt(prompt("Digite el número de productos a  agregar"));


    for (let i = 0; i < cantidad; i++) {

        let nueva_producto = {
            "codigo": parseInt(prompt("digite ele codigo del producto")),
            "nombre": prompt("Digite el nombre del producto a resgistrar"),
            "categoria": prompt("digite la categoria a la que corresponde el producto", listar_categorias()),
            "stock": parseInt(prompt("digite el stock del producto")),
            "precio_compra": parseInt(prompt("digite el precio el cual se compra el producto")),
            "iva": parseInt(prompt("digite el porcentaje del iva")),
            "precio_venta": parseInt(prompt(`digite el precio de venta `))
        };
        productos.push(nueva_producto);

    }

}

//listar productos

function listar_productos() {

    if (productos.length == 0) {
        alert("No hay productos registrados");
    } else {
        let lista = "";
        for (let i = 0; i < productos.length; i++) {
            lista += `${i + 1}  : codigo del producto:  ${productos[i].codigo}, Nombre: ${productos[i].nombre}, categoria stock: ${productos[i].stock}, precio de compra: ${productos[i].precio_compra}, iva: ${productos[i].iva * (productos[i].iva / 10)} precio de venta ${productos[i].precio_venta + (productos[i].iva * (productos[i].iva / 10))} \n`;
        }
        alert(lista);
    }

}

function start() {

    let opcion = 0

    do {
        opcion = parseInt(prompt(`---------------------------------------
                               bienvenido a Bfunieles digite la opcion a la cual desea ingresar
                               1. categorias
                               2. productos
                               3. salir`));

        switch (opcion) {
            case 1:
                Menu_categorias()
                break;

            case 2:
                Menu_productos()
                break

            case 3:
                alert("Acabas de salir del inventario de Bfunieles")
                break

        }
    } while (opcion !== 3)
}
start()