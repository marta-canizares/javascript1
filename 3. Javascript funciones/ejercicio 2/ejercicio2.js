
function arrayString(alumnos, alumno) {
    let posicion = -1
    for (let i = 0; i <= alumnos.length; i++) {
        if (alumnos[i] === alumno) {
            posicion = i
        }
    }
    return posicion;
}

let posicion = arrayString(['Marta', 'Dario', 'Alex', 'Mari'], 'Alex')

console.log(posicion)
