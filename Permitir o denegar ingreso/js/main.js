var nombre = prompt ("Por favor introduzca su nombre:");
var dia = prompt("Día de nacimiento:");
var mes = prompt("Mes de nacimiento:");
var ano = prompt("Año de nacimiento:");
 
fecha_hoy = new Date();
ahora_ano = fecha_hoy.getYear();
ahora_mes = fecha_hoy.getMonth();
ahora_dia = fecha_hoy.getDate();
edad = (ahora_ano + 1900) - ano;
    
    if ( ahora_mes < (mes - 1)){
      edad--;
    }
    if (((mes - 1) == ahora_mes) && (ahora_dia < dia)){ 
      edad--;
    }
    if (edad > 1900){
        edad -= 1900;
    }
 
    alert("!Bienvenido "
    	+ nombre  
    	+ " usted tiene " + edad + " años!");

  