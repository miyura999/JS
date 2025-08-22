let opcion = 0
let numero = 0
do {


    opcion = parseInt(prompt("por favor, ingrese una opcion\n1. Sumar\n 2. Restar\n3. Multiplicar\n4. Dividir \n5. Salir"))
    numero = parseInt(prompt("digite un numero"))

    switch (opcion) {
        case 1:
            for (let i = 1; i <= 10; i++) {
                let suma = numero + i
                console.log("el resultado de la suma ", numero, "+", i, "es ", suma)
            }
            break


        case 2:
            for (let i = 1; i <= 10; i++) {
                let resta = numero - i
                console.log("el resultado de la resta ", numero, "-", i, "es ", resta)
                break
            }
        case 3:
            for (let i = 1; i <= 10; i++) {
                let multiplicacion = numero * i
                console.log("el resultado de la multi´plicacion ", numero, "*", i, "es ", multiplicacion)
                break
            }
        case 4:
            for (let i = 1; i <= 10; i++) {
                let division = numero - i
                console.log("el resultado de la resta ", numero, "/", i, "es ", division)
                break
            }
        case 5:
            console.log("usted acaba de terminar la operacion")
            break

        default:
            console.log("su opcion es invalida")
            break

    }



} while (opcion != 5)