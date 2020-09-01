'use strict'



//FILTRO
        //BOTONES

        $('#amarillo').on({
            click:function(){
                $(".yellow").removeClass("ocultar");
                $(".blue").addClass("ocultar");
                $(".green").addClass("ocultar")
            }
        });
        
        $('#azul').on({
            click:function(){
                $(".blue").removeClass("ocultar");
                $(".yellow").addClass("ocultar");
                $(".green").addClass("ocultar")
            }
        });
        
        $('#verde').on({
            click:function(){
                $(".green").removeClass("ocultar")
                $(".yellow").addClass("ocultar");
                $(".blue").addClass("ocultar")
            }
        });
        
        $('#todos').on({
            click:function(){
                $(".yellow").removeClass("ocultar");
                $(".blue").removeClass("ocultar");
                $(".green").removeClass("ocultar")
            }
        });
        
                //LIGHTBOX
        
        $('.colores').on({
            click:function(){
                console.log(this.src)
                $(".lightbox img").attr("src", this.src);
                $(".lightbox").addClass("activado");
            }
        })
        
                //CERRAR LIGHTBOX
        
        $('.fa-times').on({
            click:function(){
                $(".lightbox").removeClass("activado");
            }
        })
        $('.lightbox').on({
            click:function(){
                $(".lightbox").removeClass("activado");
            }
        })