function encriptar(){
    var mensajeEntrada,mensajeSalida;
    mensajeEntrada=document.getElementById("mensaje-entrada").value;
    if (mensajeEntrada.length >0){
        mensajeSalida=mensajeEntrada;
        mensajeSalida=mensajeSalida.replaceAll("e","enter");
        mensajeSalida=mensajeSalida.replaceAll("i","imes");
        mensajeSalida=mensajeSalida.replaceAll("a","ai");
        mensajeSalida=mensajeSalida.replaceAll("o","ober");
        mensajeSalida=mensajeSalida.replaceAll("u","ufat");

        document.getElementById("mensaje-salida").innerHTML=mensajeSalida;
        document.getElementById("caja-salida").style.display="flex";
        document.getElementById("caja-vacio").style.display="none";
        
        document.getElementById("mensaje-entrada").value = "";
    }else{
        document.getElementById("caja-salida").style.display="none";
        document.getElementById("caja-vacio").style.display="flex";
    }
}

function desencriptar(){
    var mensajeEntrada,mensajeSalida;
    mensajeEntrada=document.getElementById("mensaje-entrada").value;
    if (mensajeEntrada.length >0){
        mensajeSalida=mensajeEntrada;
        mensajeSalida=mensajeSalida.replaceAll("enter","e");
        mensajeSalida=mensajeSalida.replaceAll("imes","i");
        mensajeSalida=mensajeSalida.replaceAll("ai","a");
        mensajeSalida=mensajeSalida.replaceAll("ober","o");
        mensajeSalida=mensajeSalida.replaceAll("ufat","u");

        document.getElementById("mensaje-salida").innerHTML=mensajeSalida;
        document.getElementById("caja-salida").style.display="flex";
        document.getElementById("caja-vacio").style.display="none";
        document.getElementById("mensaje-entrada").value = "";

    }else{
        document.getElementById("caja-salida").style.display="none";
        document.getElementById("caja-vacio").style.display="flex";
    }
}

function copiar(){
    var content = document.getElementById('mensaje-salida').innerHTML;
    navigator.clipboard.writeText(content)
}