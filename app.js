let cantArticulo = parseInt(prompt("Seleccione la cantidad de artículos a adquirir (Máximo de artículos por compra 10)"));

if(!isNaN(cantArticulo) && cantArticulo < 10){
    const elegirArticulos = x => {
        let elementos = [];
        for (let i = 0; i < x; i++) {
        elementos[i] = parseInt(prompt(`Eliga componente de pc a adquirir seleccionando su número:
                            1.MicroProcesador: $50000
                            2.RAM: $6000
                            3.Disco Duro: $50001
                            4.Placa de Video: $80000
                            5.Fuente: $17000`))
        if(isNaN(elementos[i])){
         alert("Eliga un número correcto")
         break;
        }

    }
        console.log(elementos);2
        return elementos;
    }

    const llenarArray = x =>{1

        let precioArray = [];
        for (let i = 0; i< x.length; i++) {
        switch (x[i]) {
            case 1:
                precioArray[i] = 50000
                break;
            case 2:
                precioArray[i] = 6000
                break;
            case 3:
                precioArray[i] = 5000
                break; 
            case 4:
                precioArray[i] = 80000
                break;
            case 5:
                precioArray[i] = 17000
                break;
            default:
                break;
        }

        }
        return precioArray;
    }

    const calcularCosto = x =>{
    let suma = 0;
    let costoTotal = 0;
        for (let i = 0; i < x.length; i++) {3
            suma = suma + x[i];
        }

        return costoTotal = suma + (suma * 0.21) 

    }

    const articulos = llenarArray(elegirArticulos(cantArticulo));
    alert(`El total a pagar es: ${calcularCosto(articulos)}`);
    console.log(calcularCosto(articulos))
}else{
    alert("Por favor seleccione una cantidad adecuada")
}