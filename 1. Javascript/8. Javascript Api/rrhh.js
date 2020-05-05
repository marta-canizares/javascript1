const url = 'http://dummy.restapiexample.com/api/v1/employees';

let employees = []

if (localStorage.getItem('employees')) {
    const saveEmpl = localStorage.getItem('employees')
    employees = JSON.parse(saveEmpl);
}

const req = new XMLHttpRequest();
req.open('GET', url, true);
req.addEventListener('load', (event) => {
    const responseText = event.target.responseText;
    const empleados = JSON.parse(responseText);
    employees = empleados.data

    saveEmpleado();
    pintarDetalleEmpleado(employees);
});
req.send();



// PINTAR DETALLE EMPLEADO //
function pintarDetalleEmpleado(pEmpleados) {
    let count = 0;
    for (let empleado of pEmpleados) {
        baseEmpleados.innerHTML += `        
                            <tr>
                                <th scope="row">${count++}</th>
                                <td>${empleado.employee_name}</td>
                                <td>${empleado.employee_salary}</td>
                                <td>${empleado.employee_age}</td>
                                <td><button class="btn btn-block btn-danger btnEliminar" data-id="${empleado.id}">Delete</button></td>
                            </tr>`;
    }
    const btnEliminar = document.querySelectorAll('.btnEliminar');
    for (let btn of btnEliminar) {
        btn.addEventListener('click', (borrarEmpleado))
    }
}


// Borrar empleado //
function borrarEmpleado(event) {
    const id = event.target.dataset.id;
    console.log(id);
    // descubrir la posicion del empleado con este id


    employees.splice(id, 1); // le decimos el indice (posicion) a partir del cual vamos a borrar y cuantos vamos a borrar

    saveEmpleado();
    pintarDetalleEmpleado(employees)
};






// Añadir empleado //
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', addEmployee);

function addEmployee() {

    /*
    const employee = {};
    employee.name = empleado.employee_name;
    employee.salary = empleado.employee_salary;
    employee.age = empleado.employee_age;
    employees.push(employee);*/

    saveEmpleado();
    pintarDetalleEmpleado(employees)
}


// SAVE EMPLEADO//
function saveEmpleado() {
    const saveEmpl = JSON.stringify(employees) // con eso pasamos a string el array de tareas
    localStorage.setItem('employees', saveEmpl);
}