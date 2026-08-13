//Ejercicio 3 - comprimir texto
let textos= 'aaabbbcccd'

function ComprimirTexto(textos){
    let palabra = textos.toLowerCase()
   // console.log(palabra)
    let resultado = ''
    let cont= 1
if (palabra.length==0){
    resultado =''
    return resultado
}else { 
    for (let i=0; i<palabra.length; i++){
        //resultado += palabra[i]
         if (palabra[i] == palabra[i+1]){
cont +=1
         }else{
            resultado += palabra[i]+ cont
            cont = 1 
         }
    }
}

 return resultado
}
 console.log(ComprimirTexto(textos))