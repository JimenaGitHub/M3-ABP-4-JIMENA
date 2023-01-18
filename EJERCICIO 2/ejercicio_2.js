var h1= document.getElementById("arreglos")
var h11= document.getElementById("arregloss")


var mayor = 0;
var arreglo = [];
for (let i=0; i<9; i++){ 

    var number=Math.floor(Math.random()*100)-1
    arreglo.push(number)
}


function arreglos(){

    for(i = 0; i < arreglo.length; i++){
        if (arreglo[i] > mayor)
        {
            mayor = arreglo[i];
    
        }
    }
     
    h11.innerHTML=arreglo
    h1.innerHTML= "El mayor número es " +mayor
} 