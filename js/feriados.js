let url = "https://apis.digital.gob.cl/fl/feriados"

//Se llama a la url de feriados
fetch(url)
    .then(function(respuesta){
        return respuesta.json()

    console.log(respuesta[0].nombre + " " + respuesta[0].fecha)

    let enlaceFeriado = document.getElementById("feriado")

    enlaceFeriado.innerText = respuesta[0].nombre + " " + respuesta[0].fecha 
    })