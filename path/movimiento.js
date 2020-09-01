'use strict'


// IMAGEN MOVIMIENTO
$('#imagen').on({
    mousemove:function(ev){
        console.log(ev)
        console.log("mueve")
        console.log("x:"+ev.pageX+",y:"+ev.pageY)

        let posX = -50+ ev.pageX / 50; //por cada 2 pixeles, se mueve 1
        let posY = -50 + ev.pageY / 80;
        //ponemos -50 para que la iamgen comience desde fuera y al moverlo no deje un hueco en la pantalla
        $(this).css({
            "top": posY +"px",
            "left": posX +"px"
        })
    }
})