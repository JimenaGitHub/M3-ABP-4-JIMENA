const h1= document.getElementById("h1")
const h2= document.getElementById("h2")
var large=prompt("el largo del arreglo")
var arreglo=[]
var mayor = 0
 for (let i=0; i<large ; i++){ 

 var number=Math.floor(Math.random()*100)-1
arreglo.push(number)
 }
 h2.innerHTML=("el arreglo inicial es " + arreglo)


function mayors()
{
    arreglo.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    
     
    h1.innerHTML=(arreglo)
} 
