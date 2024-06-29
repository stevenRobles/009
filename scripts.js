function showMenu() {
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('menu').style.display = 'block'
}

function showPago() {
    document.getElementById('menu').style.display = 'none'
    document.getElementById('pago').style.display = 'block'
}

function showConfirmacion() {
    const destino = document.getElementById('destino').value
    document.getElementById('confirmacion-destino').innerText = destino

    document.getElementById('pago').style.display = 'none'
    document.getElementById('confirmacion').style.display = 'block'
}

function emitirBoleto() {
    const destino = document.getElementById('destino').value
    const hora = new Date().toLocaleTimeString()
    const numero = Math.floor(Math.random() * 100000)

    document.getElementById('boleto-destino').innerText = destino
    document.getElementById('boleto-hora').innerText = hora
    document.getElementById('boleto-numero').innerText = numero

    document.getElementById('confirmacion').style.display = 'none'
    document.getElementById('boleto').style.display = 'block'
}

function mostrarTerminos() {
    document.getElementById('terminos').style.display = 'block'
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('pago').style.display = 'none'
    document.getElementById('confirmacion').style.display = 'none'
    document.getElementById('boleto').style.display = 'none'
}

function ocultarTerminos() {
    document.getElementById('terminos').style.display = 'none'
    document.getElementById('pago').style.display = 'block'
}

function mostrarPolitica() {
    document.getElementById('politica').style.display = 'block'
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('pago').style.display = 'none'
    document.getElementById('confirmacion').style.display = 'none'
    document.getElementById('boleto').style.display = 'none'
}

function ocultarPolitica() {
    document.getElementById('politica').style.display = 'none'
    document.getElementById('pago').style.display = 'block'
}

document.getElementById('aceptar-terminos').addEventListener('change', function() {
    document.getElementById('confirmar-pago').disabled = !this.checked
})
