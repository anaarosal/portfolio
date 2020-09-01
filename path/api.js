'use strict'


//  SW API

var nextUrl="https://swapi.dev/api/people/"; 
var prevUrl="";


pedirPersonajes(nextUrl);

$('#btnNext').on({
    click:function(){
        console.log('click en siguiente');
        $('#gridPersonajes').empty();
        console.log("nextUrl")
        console.log(nextUrl)
        pedirPersonajes(nextUrl);

    }
})
$('#btnPrev').on({
    click:function(){
        console.log('click en siguiente');
        $('#gridPersonajes').empty();
        console.log("prevUrl")
        console.log(prevUrl)
        pedirPersonajes(prevUrl);

    }
})

function pedirPersonajes(urlApedir){ 
    $.ajax( {
        url: urlApedir , 
        success:function( respuesta ){
            console.log("tengo los datos")
            console.log(respuesta);
            let numeroDePersonajes = respuesta.count; 
            $('#numPersonajes').text(numeroDePersonajes);

            nextUrl = respuesta.next;
            prevUrl = respuesta.previous;

            for(let i=0; i<respuesta.results.length; i++){
                let nodoDiv = document.createElement('div');
                $( nodoDiv ).addClass( 'personaje' ); 
                $(nodoDiv).text(respuesta.results[i].name);
                $('#gridPersonajes').append(nodoDiv);
            }
        },
        error:function(){
            console.log("error en la peticion")
        }
    });
}