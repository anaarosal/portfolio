'use strict'

function guardar(){
    console.log("nombre.value")
    console.log(nombre.value)
    let nombreAlumno = nombre.value;

    console.log(apellido.value)
    console.log("apellido.value")
    let apellidoAlumno = apellido.value;

    console.log(nacimiento.value)
    console.log("nacimiento.value")
    let nacimientoAlumno = nacimiento.value;
    var edadAlumno = 2020 - nacimientoAlumno;
    console.log("edadAlumno")
    console.log(edadAlumno)


    alumnos.innerHTML = alumnos.innerHTML+ "<div class='cuadro'><h4>"+ nombreAlumno+ "<div>"+ apellidoAlumno +"</div>" +"</h4>"+ "<div> Edad</div><div>"+ edadAlumno +" años</div></div>";
    // input.innerHTML = input.innerHTML + "<article><div id='cuadro'><h6>"+ nombreAlumno +"</h6>"+ "<div>"+ apellidoAlumno +"</div>"+ "<div> Edad "+ edadAlumno +" años</div></div></article>";
}