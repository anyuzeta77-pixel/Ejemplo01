globalThis.id = 1;


function agregarFila(){
    // 1. Obtener la referencia de la tabla
    var tabla = document.getElementById("tabla01");

    // 2. Insertar una nueva fila al final de la tabla (índice -1)
    var nuevaFila = tabla.insertRow(-1);

    // 3. Insertar celdas nuevas en esa fila
    var nuevaCelda0 = nuevaFila.insertCell(0);
    var nuevaCelda1 = nuevaFila.insertCell(1);
    var nuevaCelda2 = nuevaFila.insertCell(2);
    var nuevaCelda3 = nuevaFila.insertCell(3);
    var nuevaCelda4 = nuevaFila.insertCell(4);
    
    // 4. Agregar el contenido dentro de las celdas
    nuevaCelda0.innerHTML =  globalThis.id
    nuevaCelda1.innerHTML = "nombre";
    nuevaCelda2.innerHTML = "email";
    nuevaCelda3.innerHTML = "telefono";

    nuevaCelda4.innerHTML = "<button onclick='eliminarFila(this)'>Eliminar fila</button>";

    // 5. Actualizamos el id global
    globalThis.id++
}

function eliminarFila(boton) {
  // Encuentra la fila (tr) más cercana al botón y la elimina
  var fila = boton.closest("tr");
  fila.remove();
}