// ejercicio 1 - Clasificar montos 
let pequeña=0, mediana=0, grande=0, SumG=0

let montos =[45.00, 250.00, 800.00, 99.99, 100.00, 500.00, 500.01, 12.00]

for (let i =0; i < montos.length; i++){

    if (montos[i] < 100.00){
        pequeña += 1
    }else if(montos[i] >=100.00 && montos[i] <= 500.00){
        mediana += 1
    }else{
        grande += 1
        SumG += montos[i]
    }
}

console.log("pequeña: " + pequeña +
    "\nmediana: " + mediana +
    "\ngrande: " + grande + 
    "\nsuma de grandes: " + SumG
)

