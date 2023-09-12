// Funcion para agregar tarea y para borrarla.
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function () {
            listaTareas.removeChild(nuevaTarea);
            nuevaTareaInput.value = "";
        }

        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completar";
        botonCompletar.className = "completed gris";
        botonCompletar.onclick = function () {
            marcarCompletada(nuevaTarea);
        }

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTarea.appendChild(botonCompletar);
    }

}

function moverATareasCompletadas(tarea) {
    const listaTareasCompletadas = document.getElementById("listaTareasCompletadas");
    listaTareasCompletadas.appendChild(tarea);

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
        listaTareas.removeChild(listaTareasCompletadas);
    }
}

// Funcion para ocultar la lista de tareas pendientes
function ocultarListaPendientes() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.style.display = "none";
}

// Funcion para mostrar la lista de tareas pendientes
function mostrarListaPendientes() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.style.display = "block";
}

// Funcion para ocultar la lista de tareas completadas
function ocultarListaCompletadas() {
    const listaTareasCompletadas = document.getElementById("listaTareasCompletadas");
    listaTareasCompletadas.style.display = "none";
}

// Funcion para mostrar la lista de tareas completadas
function mostrarListaCompletadas() {
    const listaTareasCompletadas = document.getElementById("listaTareasCompletadas");
    listaTareasCompletadas.style.display = "block";
}

function mostrarCompletadas() {
    ocultarListaPendientes();
    mostrarListaCompletadas();
}

function mostrarPendientes() {
    ocultarListaCompletadas();
    mostrarListaPendientes();
}

// ...




// Funcion para marcar una tarea como completada.
function marcarCompletada(tarea) {
    tarea.classList.toggle("completada");
    const botonCompletar = tarea.querySelector(".completed");
    botonCompletar.classList.toggle("verde");
    botonCompletar.textContent = botonCompletar.classList.contains("verde") ? "Completada" : "Completar";
    moverATareasCompletadas(tarea);
}

// Agregar evento de clic a las tareas para marcarlas como completadas.
const listaTareas = document.getElementById("listaTareas");
listaTareas.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        marcarCompletada(e.target);
    }
});

// Agregar evento de clic al boton "Agregar"
const botonAgregar = document.getElementById("agregar");
botonAgregar.addEventListener("click", agregarTarea);

// Agregar evento de clic a los botones "Mostrar Completadas" y "Mostrar Pendientes"
const botonMostrarCompletadas = document.getElementById("mostrarCompletadas");
botonMostrarCompletadas.addEventListener("click", mostrarCompletadas);

const botonMostrarPendientes = document.getElementById("mostrarPendientes");
botonMostrarPendientes.addEventListener("click", mostrarPendientes);
