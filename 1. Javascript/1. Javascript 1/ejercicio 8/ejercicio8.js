const tiempo = prompt('Que día hace hoy? (sol, nubes, lluvia')

if (tiempo == 'sol') {
    alert('Baja probabilidad de lluvia')
} else if (tiempo == 'nubes') {
    alert('Probabilidad de lluvia del 60%')
} else if (tiempo == 'lluvia') {
    alert('Probabilidad de lluvia del 90%')
}