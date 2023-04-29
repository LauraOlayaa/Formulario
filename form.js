function validarCampos(atributos){
    const rut= 11111
    console.log(atributos)
}
 
function obtenerCampos(){
   
    return {rut,nombre,numero,apellidoMaterno,apellidoPaterno,profesion,edad,correo,fecha,genero}
}

function enviarFormulario (evento){
  
    

} 
 
document.addEventListener("DOMContentLoaded",function(){
    $("#formulario_carta").on("submit", function(){
       
        const rut = $("#rut").val()
    
        const nombre = $("#nombre").val()
        
        const numero = $("#numero").val()
    
        const apellidoPaterno = $("#apellido_Paterno").val()
        
        const apellidoMaterno = $("#apellido_Materno").val()
        
        const profesion = $("#profesion").val()
        
        const edad = $("#edad").val()
        
        const correo = $("#correo").val()
    
        const fecha = $("#fecha").val()
        
        const genero= $("#genero").val()
    
        

        const texto = rut+""+nombre+""+numero+""+apellidoPaterno+""+apellidoMaterno+""+profesion+""+edad+""+correo+""+fecha+""+genero
        $("#carta").val("taaaaa")
        return false
    })
})
