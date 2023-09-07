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

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
    }

}

// Funcion para marcar una tarea como completada.
function marcarCompletada(tarea) {
    tarea.classList.toggle("completada");
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
