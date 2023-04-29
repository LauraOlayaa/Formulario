$('#formulario_carta').on('submit', function(evento) {
    evento.preventDefault() //

    const rut = $("#rut").val() //

    const nombre = $("#nombre").val()

    const numero = $("#numero").val()

    const apellidoPaterno = $("#apellido_paterno").val()

    const apellidoMaterno = $("#apellido_materno").val()

    const profesion = $("#profesion").val()

    const edad = $("#edad").val()

    const correo = $("#correo").val()

    const fecha = $("#fecha_nacimiento").val()

    const genero= $("#genero").val()

    const texto = rut + " " + nombre + " "  + numero + " "  + apellidoPaterno + " "  + apellidoMaterno + " "  + profesion + " "  + edad + " "  + correo + " "  + fecha + " "  + genero

    $("#carta").val(texto)
})