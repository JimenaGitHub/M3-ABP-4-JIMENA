const monto=document.getElementById("monto")
const h2=document.getElementById("h2")

semana=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

function diaSemana(){
    h2.innerHTML= semana[monto.value-1]
}