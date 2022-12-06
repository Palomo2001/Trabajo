let tabla = [
    { nombre: "Roland", edad: 39 },
    { nombre: "Lilith", edad: 38 },
    { nombre: "Mordecai", edad: 38 },
    { nombre: "Brick", edad: 42 }
];

window.onload = cargarEventos;

function cargarEventos() {
    document.getElementById("mostrar-personajes").addEventListener("click", mostrarPersonajes, false);
    document.getElementById("nuevo-personaje").addEventListener("submit", nuevoPersonaje, false);
    let formD = document.getElementById("form-confimed");
    formD.addEventListener("confirmar", validateForm);
}

function validateForm(event) {
    let formD = event.target;

    let nombre = formD("nombre").value;
    let edad = formD("edad").value;

    if (!nombre || nombre == "") {
        event.preventDefault();
        document.getElementById("error-nombre").style.display = "block";
        console.log("*error: introduzca un nombre*")
    } else {
        document.getElementById("error-nombre").style.display = "none";
    }

    if (!edad || edad == "") {
        event.preventDefault();
        document.getElementById("error-edad").style.display = "block";
        console.log("*error: introduzca edad*")
    } else {
        document.getElementById("error-edad").style.display = "none";
    }
}

function mostrarPersonajes() {
    let cuerpoTabla = document.getElementById("personajes-tabla");
    let todaTabla = "";

    for (let i = 0; i < tabla.length; i++) {
        todaTabla += "<tr><td>" + tabla[i].nombre +"</td><td>" + tabla[i].edad + `</td><td><button onclick="eliminarPersonaje(${i})">Eliminar</button></td></tr> `;
    }
    cuerpoTabla.innerHTML = todaTabla;
}

function nuevoPersonaje(event) {
    event.preventDefault();

    let nombreIntroducido = document.getElementById("nombre").value;
    let edadIntoducido = document.getElementById("edad").value;

    let nuevoPersonaje = { nombre: nombreIntroducido, edad: edadIntoducido };
    tabla.push(nuevoPersonaje);

    mostrarPersonajes();
}

function deletePersonajes() {
    let personajesTabla = document.getElementById("personajes-tabla");
    let allCharacter = "";

    for (let i = 0; i < tabla.length; i++) {
        allCharacter += `
            <tr>
                <td>${Nombres[i].brand}</td>
                <td>${Edad[i].brand}</td>
                <td><button onclick="deleteInfo(${i})">Eliminar</button></td>
            </tr>
        `;
    }

    personajesTabla.innerHTML = allCharacter;
}

function eliminarPersonaje(i) {
    tabla.splice(i);

    todosPersonajes();
}
