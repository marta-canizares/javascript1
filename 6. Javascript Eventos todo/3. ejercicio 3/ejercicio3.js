// VARIABLES GLOBALES
// ADD ITEMS
const btnAdd = document.getElementById('btnAdd'); // boton
const addTarea = document.getElementById('addTarea') // espacio en blanco
const listaTareas = document.getElementById('listaTareas');


// TAREAS //
const nombreTarea = document.getElementById('nombreTarea') // tarea del checkbox
const botonEdit = document.querySelectorAll('.botonEdit')  // boton edit TAREAS



// COMPLETED //
const btnEdit2 = document.getElementById('btnEdit2')  // boton edit COMPLETADAS
const btnDelete2 = document.getElementById('btnDelete2')  // boton delete COMPLETADAS
const tareaCompletada = document.getElementById('tareaCompletada') // tarea completada checkbox

// ARRAY //
const tareas = [
    {
        name: 'cocinar',
        completed: true
    },
    {
        name: 'hacer deporte',
        completed: false
    },
    {
        name: 'sacar al perro',
        completed: true
    }
];

console.log(tareas)

// FUNCIONES

function adTarea(nombreTarea) {
    let nuevaTarea = { name: nombreTarea, completed: false };
    tareas.push(nuevaTarea)
}

function imprimeTareas() {
    listaTareas.innerHTML = "" // lo hago para que lo borre y no las duplique, cada vez que salga del bucle que haga reset
    for (tarea of tareas) {
        let tareaDiv = `<div class="col-12"> <div class="form-check" >
            <input class="form-check-input" type="checkbox" id="nombreTarea">
                <label class="form-check-label" for="nombreTarea">
                            ${tarea.name}
                            </label>
                        </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary mt-3 botonEdit">Edit</button>
                    <button type="submit" class="btn btn-danger mt-3 botonDelete">Delete</button>
                </div>
            </div>

                    </div >`;

        listaTareas.innerHTML += tareaDiv;
    }
}
/*
function imprimeTareas(pTarea) {
    const divHeader = document.createElement('div');
    divHeader.classList.add('card-header');
    divHeader.innerText = pTarea.nombre;

    const divBody = document.createElement('div');
    divBody.classList.add('card-body');

    const btnEdit = document.createElement('button')
    btnEdit.classList.add('btn', 'btn-info', 'btn-sm', 'mr-2')
    btnEdit.innerText = 'Edit';
    divBody.appendChild(btnEdit);


    const btnBorrar = document.createElement('button')
    btnBorrar.classList.add('btn', 'btn-danger', 'btn-sm')
    btnBorrar.innerText = 'Delete';
    btnBorrar.addEventListener('click', (event) => {
        const card = event.target.parentNode.parentNode
        listaTareas.removeChild(card)

    })
    divBody.appendChild(btnBorrar);

    const divCard = document.createElement('div')
    divCard.classList.add('card', "mt-2")

    divCard.appendChild(divHeader)
    divCard.appendChild(divBody)

    listaTareas.appendChild(divCard);
}
*/

// Ejecucion de la funcion
btnAdd.addEventListener('click', () => {
    console.log('presionas el boton')
    adTarea(addTarea.value);             // tengo que sacar el value para añadir el nombre
    imprimeTareas();
})

imprimeTareas();


// BOTONES BORRAR
const botonesDelete = document.querySelectorAll('.botonDelete') // boton delete TAREAS
for (boton of botonesDelete) {
    boton.addEventListener('click', (event) => {
        const card = event.target.parentNode.parentNode
        listaTareas.removeChild(card)
    })
}