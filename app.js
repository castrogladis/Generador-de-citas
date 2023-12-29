let elemCita = document.getElementById("cita");
let elemAutor = document.getElementById("autor")
let boton = document.getElementById("boton-cambiar-cita");

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

function cambiarCita() {
    let indiceAleatorio = generarNumeroAleatorio(0, citas.length)
    elemCita.innerText = `"${citas[indiceAleatorio].cita}"`
    elemAutor.innerText = citas[indiceAleatorio].autor; 
} 

cambiarCita()


boton.addEventListener("click", cambiarCita)




































