// ejercicio 2 -  descuentos por prioridad  

let descuentos =0, MontoFinal=0
let Final=[]
const descMayor=0.15, descCumpleaños=0.10, descMenor=0.05
const compras = [ { total:1200, cumpleaños: false},
    {total:1000, cumpleaños:true},
    {total:600, cumpleaños:true},
    {total:600, cumpleaños:false},
    {total:500, cumpleaños:false},
    {total:300, cumpleaños:false},
    {total:300, cumpleaños:true}
]

for (let i =0; i< compras.length; i++){

    if (compras[i].total>=1000){
        descuentos=compras[i].total*descMayor
    }else if(compras[i].cumpleaños==true){
        descuentos=compras[i].total*descCumpleaños
    }else if( compras[i].total>=500){
        descuentos=compras[i].total*descMenor
    }else {
        descuentos=compras[i].total*0
    }
 MontoFinal=compras[i].total-descuentos
 Final.push({
    total: compras[i].total,
    cumpleaños: compras[i].cumpleaños,
    descuento: descuentos,
    totalFinal: MontoFinal

})

} 

console.log(Final)