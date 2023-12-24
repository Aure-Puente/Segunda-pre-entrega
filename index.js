//ARRAY

const historial = []



//OBJETOS

class Simulacion{
    constructor(cuotas, efectivo,  resultado, cuentaCuota){
        this.cuotas = cuotas;
        this.efectivo = efectivo;
        this.resultado = resultado;
        this.cuentaCuota = cuentaCuota
    }
}

//FUNCIONES

function saludo(){
    alert("Bienvenido al simulador de Créditos!")

    alert("Aquí podrá simular un crédito bancario teniendo en cuenta la tasa de interés anual y las cuotas seleccionadas")
}


function calculo(){
    let efectivo = parseInt(prompt("Por favor ingrese el monto de efectivo que desea recibir (mìnimo $1000)"))

    if( efectivo >= 1000 ){
        let cuotas = parseInt(prompt("Usted puede devolver el crédito en 1, 3, 6 o 12 cuotas. Por favor seleccione la cantidad de cuotas en las que desea devolver el dinero"))

        let cuentaCuota = efectivo*(1+1.33*(cuotas/12))/cuotas
        let resultado = cuentaCuota * cuotas
    
    if(cuotas == "1" || cuotas == "3" || cuotas == "6" || cuotas =="12"){
            alert("Para un crédito de $" + efectivo + ", usted deberá abonar la suma de $" + resultado + ", siendo un total de $" + cuentaCuota + " el valor de cada cuota")
            const simulacion = new Simulacion(cuotas, efectivo, resultado, cuentaCuota)
            historial.push(simulacion)
            nuevaSimulacion()
    }else{
            alert("Por favor, seleccione una opción válida.")
            calculo()
    }
    }else{
        alert("El monto ingesado es menor a $1000. Por favor, ingrese un nùmero mayor a $1000 para realizar la simulaciòn del crèdito")
        calculo()
    }    
}


function nuevaSimulacion(){
    let continuar = true
    while(continuar){
        let respuesta = parseInt(prompt("Por favor, elija una opciòn: \n 1- Realizar otra simulaciòn \n 2- Ver historial de simulaciones previas \n 3- Salir"))
        if(respuesta == 1){
            calculo()
        } if(respuesta == 2){
            verHistoral()
            nuevaSimulacion()
        } else{continuar = false
            alert("Muchas gracias por usar nuestro simulador de créditos!")
            break
        }
    }
}


function verHistoral(){
let opcion = parseInt(prompt("Usted puede ver las simulaciones realizadas segùn las cuotas seleccionadas. Por favor, elija que simulaciòn previa quiere ver: \n 1- Ver las simulaciones de un solo pago. \n 3- Ver las simulaciones de 3 cuotas. \n 6- Ver las simulaciones de 6 cuotas. \n 12- Ver las simulaciones de 12 cuotas."))

const filtro = historial.filter((simulacion) => {
    return simulacion.cuotas == cuotas
})
console.log(historial)
let mensaje = " "
filtro.forEach((simulacion) => {
    mensaje = mensaje + "-Simulò un prèstamo de $" + simulacion.efectivo + " para devolverlos en " + simulacion.cuotas + " cuotas de $" + simulacion.cuentaCuota + ", siendo un total de $" + simulacion.resultado + " el efectivo total a saldar"
})

alert(mensaje)
}



//EJECUCIONES

saludo()

calculo()