'use strict'

function convertir(){
    console.log("euro.value")
    console.log(euro.value) 
    let numeroEuros = euro.value;
    var totalYen = numeroEuros * 122.446 ; 
    console.log("totalYen")
    console.log(totalYen)

    var totalLibra = numeroEuros * 0.889535 ;
    console.log("totalLibra")
    console.log(totalLibra)

    var totalDolar = numeroEuros * 1.12982;
    console.log("totalDolar")
    console.log(totalDolar)

    var totalCorona = numeroEuros * 7.45567;
    console.log("totalCorona")
    console.log(totalCorona)

    yenes.innerHTML = "<h3>" + numeroEuros + ' euro(s)' +"</h3>  <div class='conversion'> equivale a  </div>" + totalYen + " yenes";
    libras.innerHTML = "<h3>" + numeroEuros + ' euro(s)' +"</h3>  <div class='conversiona'> equivale a </div>" + totalLibra + " libras";
    dolares.innerHTML = "<h3>" + numeroEuros + ' euro(s)' +"</h3>  <div class='conversion'> equivale a  </div>" + totalDolar + " dolares";
    coronas.innerHTML = "<h3>" + numeroEuros + ' euro(s)' +"</h3>  <div class='conversiona'> equivale a </div>" + totalCorona + " coronas";
}