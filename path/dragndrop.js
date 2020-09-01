'use strict'

var numElemSoltados = 0;


$('#acordeon').accordion();


$('.cuadrado').draggable({
    cursor:"move",

    start:function(){
        console.log('empiezo a mover')
        $('#logger').html('Moviendo elemento')
    },
    stop:function(){
        console.log('se ha dejado de arrastrar')
        $('#logger').html('Elemento parado');
    },
    revert:true,
    revertDuration:1000, 
    opacity:0.5, 
});

 $('#drop').droppable({
    drop:function(evento, uiElement){
        console.log('elemento soltado');
        numElemSoltados++;
        $('#numElementos').html(numElemSoltados);
        console.log('uiElement - elemento que ha sido soltado')
        console.log(uiElement)
        uiElement.draggable.addClass('soltado');
        uiElement.draggable.draggable({
            revert:false, 
        })
    },
    out:function(evento, uiElement){ 
        numElemSoltados--;
        $('#numElementos').html(numElemSoltados)
        uiElement.draggable.removeClass('soltado')
    },
    tolerance:'fit', 
    accept: '.gold', 
 });