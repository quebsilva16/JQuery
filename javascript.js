$(document).ready(function(){
    $('#leer').click(function(e){
        e.preventDefault();
        $.get("archivo.txt", function(data, textStatus, jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
    $("#leerEmpleados").click(function(e){
        e.preventDefault();
        $.get("empleados.json", function(data){
            console.log(data);
            $("#datosEmpleados").html(`
            Nombre: ${data.nombre} <br>
            Puesto: ${data.puesto} <br>
            Edad: ${data.edad} <br>
            `);
        });
    });
    $("#leerArregloEmpleados").click(function(e){
        e.preventDefault();
        $("#listaEmpleados").html('');
        $.get("empleados.json", function(data){
            $.each(data, function(index, item){
                $("#listaEmpleados").html($("#listaEmpleados").html()+`
                <li> ${item.nombre} --- ${item.puesto} --- ${item.edad} años </li>
                `);
            });
        });
    });
    $("#leerGetJson").click(function (e) { 
        e.preventDefault();
        // $.get("empleados.txt", function (data) {
        //     data=JSON.parse(data);
        //     console.log(data);
        // });
        $("#listaEmpleados").html('');
        $.getJSON("empleados.json", function (data) {
            $.each(data.temporales, function(index, item){
                $("#listaEmpleados").html($("#listaEmpleados").html()+`
                 <li> ${item.nombre} --- ${item.puesto} --- ${item.edad} años </li>
                `);
            });
        });
        
    });
    let empleados;
    $.getJSON("empleados.json", function (data) {
        empleados = data.empleados;
    });
    $('#nombre').keyup(function (e) { 
        $("#listaEmpleados").html('');
        let nombre = $(this).val();
        $.each(empleados, function (indexInArray, item) {
            if(item.nombre.toLowerCase().indexOf(nombre)!=-1){
            $('#listaEmpleados').html($('#listaEmpleados').html()+`
                <li> ${item.nombre} --- ${item.puesto} --- ${item.edad} años </li>
                `); 
            }
        });
    });
});