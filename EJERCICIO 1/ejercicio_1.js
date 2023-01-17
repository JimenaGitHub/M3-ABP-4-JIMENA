/* Cree una función que dado un número n cree un arreglo de largo n, donde en cada osición del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1
 */


var n = document.getElementById("arreglo");
var array = [1];

function duplicate () {
    for(let i=1; i<n.value; i++) {
        array.push(array[i-1] * 2);
        console.log(array[i])
    
    }   
    alert(array)
}


