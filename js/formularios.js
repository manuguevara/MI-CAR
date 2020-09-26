
$("#formulario_insumo").validate({
    rules: {
        nombre:{
            required: true,
            minlength: 3,
            maxlength: 120
        },
        precio:{
            required:true,
            number: true,
            min: 1
        },
        descripcion:{
            required:false,
            minlength:3,
            maxlength:200
        }
    },
    messages:{
        required:"Este campo es requerido"
    }
})
$("#btnEnviar").click(function(){
    if(!$("#formulario_insumo").valid()){
        return;
    }

    let nombre = $("#nombre").val()
    let precio = $("#precio").val()
    let descripcion = $("#descripcion").val()
})

$("#formulario_registro").validate({
    rules: {
        rut:{
            required: true,
            minlength: 9,
            maxlength: 10
        },
        nombre:{
            required:true,
            minlength: 3,
            maxlength: 80
        },
        apellido:{
            required:true,
            minlength: 3,
            maxlength: 80
        },
        email:{
            required:false,
            email:true
        },
        fecha_nacimiento:{
            required:true,
            date:true
        },
        nombre_usuario:{
            required:true,
            minlength:8
        },
        contraseña:{
            required:true,
            minlength:8
        }
    },
    messages:{
        required:"Este campo es requerido"
    }
})

$("#btnRegistrar").click(function(){
    if(!$("#formulario_registro").valid()){
        return;
    }
    let rut = $("#rut").val()
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let email = $("#email")
    let fecha_nacimiento = $("#fecha_nacimiento").val()
    let nombre_usuario = $("#nombre_usuario").val()
    let contraseña = $("#contraseña").val()
})