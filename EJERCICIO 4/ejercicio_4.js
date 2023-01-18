const monto = document.getElementById("monto")
const h2=document.getElementById("h2")
const h11=document.getElementById("h1")
var large=prompt("el largo del arreglo")
var arreglo=[]
var encontrado;


for (let i=0; i<large ; i++){ 

 var number=Math.floor(Math.random()*100)-1
arreglo.push(number)
 }
 
console.log(arreglo)

function buscar(){

    for (let i=0 ; i<monto.value; i++){
         if (arreglo[i] == monto.value){
            encontrado= true
            
        }}

    console.log(encontrado)

    if (encontrado==true){
        h2.innerHTML=(arreglo)
        h11.innerHTML=("si esta el numero")
    }
    else {
        h2.innerHTML=(arreglo)
        h11.innerHTML=("NO esta el numero")
    }

}


