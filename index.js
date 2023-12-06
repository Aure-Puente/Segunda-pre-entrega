//FUNCIONES

function saludo(){
    alert("Bienvenido al simulador de Créditos!")

    alert("Aquí podrá simular un crédito bancario teniendo en cuenta la tasa de interés anual y las cuotas seleccionadas")

}


function calculo(){
    let efectivo = parseInt(prompt("Por favor ingrese el monto de efectivo que desea recibir"))
    
    let cuotas = parseInt(prompt("Usted puede devolver el crédito en 1, 3, 6 o 12 cuotas. Por favor seleccione la cantidad de cuotas en las que desea devolver el dinero"))

    let cuentaCuota = efectivo*(1+1.33*(cuotas/12))/cuotas
    let resultado = cuentaCuota * cuotas


    if(cuotas == "1" || cuotas == "3" || cuotas == "6" || cuotas =="12" ){
        alert("Para un crédito de " + efectivo + " pesos, usted deberá abonar un total de " + resultado + " pesos, siendo la suma de " + cuentaCuota + " pesos el valor de cada cuota")

}   else{
        alert("Por favor, seleccione una opción válida.")
        calculo()
}
}


function nuevaSimulacion(){
    let continuar = true
    while(continuar){
        calculo()
    }
    let respuesta = prompt("Desea realizar otra simulación de préstamo? (Si/No)?").toLocaleLowerCase()
        if(respuesta == "si"){
            calculo()
        } if(respuesta == "no"){
            continuar = false
            alert("Muchas gracias por usar nuestro simulador de créditos!")
        }
}


//EJECUCIONES

saludo()

let continuar = true
while(continuar){
    calculo()
    let respuesta = prompt("Desea realizar otra simulación de préstamo? (Si/No)?").toLocaleLowerCase()
        if(respuesta == "si"){
            calculo()
        } if(respuesta == "no"){
            continuar = false
            alert("Muchas gracias por usar nuestro simulador de créditos!")
        }
}

