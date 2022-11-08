alert(`Bienvendido a PreEntrega1 Libreria`)

let articulos = parseInt(
    prompt(
        '1.Saga Completa de Harry Potter, 2.Harry Potter y la piedra filosofal, 3.Harry Potter y la camara secreta, 4.Harry Potter y el prisionero de Azcaban, 5.Harry Potter y el cáliz de fuego, 6.Harry Potter y la orden del Fénix, 7.Harry Potter y el misterio del príncipe, 8.Harry Potter las reliquias de la muerte'
    )
)

let continuarComprando = true
let totalPrecioArticulos = 0
const precioIndividual = 9
const precioSagaCompleta = 60
let eleccion

while (continuarComprando === true) {
    if (articulos === 1) {
        totalPrecioArticulos = totalPrecioArticulos + precioSagaCompleta
    } else if (articulos === 2) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    } else if (articulos === 3) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    } else if (articulos === 4) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    } else if (articulos === 5) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    } else if (articulos === 6) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    } else if (articulos === 7) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    } else if (articulos === 8) {
        totalPrecioArticulos = totalPrecioArticulos + precioIndividual
    }


    eleccion = parseInt(prompt('¿Desea agregar algo más? 1. Si - 2. No'))
    if (eleccion === 1) {
        producto = parseInt(
            prompt('Elija el producto que desea agregar al carrito 1.Saga Completa de Harry Potter, 2.Harry Potter y la piedra filosofal, 3.Harry Potter y la camara secreta, 4.Harry Potter y el prisionero de Azcaban, 5.Harry Potter y el cáliz de fuego, 6.Harry Potter y la orden del Fénix, 7.Harry Potter y el misterio del príncipe, 8.Harry Potter las reliquias de la muerte'
            )
        )
    } else {
        continuarComprando = false
    }
}


const totalCompraConDescuento = descuentoDeCompra(totalPrecioArticulos)
alert(`El total de tu compra es ${totalCompraConDescuento}. Gracias por elegirnos!!`)

function descuentoDeCompra(valor) {
    let descuentoDeCompra = 0
    if (valor <= 18) {
        descuentoDeCompra = 10
    } else if (valor => 19 && valor > 60) {
        descuentoDeCompra = 12
    }

    let totalDescuento = valor * (descuentoDeCompra / 100)
    let descuentoFinalCompra = valor - totalDescuento
    return descuentoFinalCompra
}
