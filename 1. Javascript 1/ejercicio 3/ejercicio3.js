const edad = prompt('Que edad tienes?')

if (edad >= 0 && edad <= 15) {
    console.log('nivel de prioridad ALTO')
} else if (edad >= 16 && edad <= 25) {
    console.log('nivel de prioridad MEDIO-ALTO')
} else if (edad >= 26 && edad <= 35) {
    console.log('nivel de prioridad BAJO')
} else if (edad >= 36 && edad <= 55) {
    console.log('nivel de prioridad MEDIO-ALTO')
} else if (edad >= 56 && edad <= 70) {
    console.log('nivel de prioridad ALTO')
} else if (edad >= 71 && edad <= 120) {
    console.log('nivel de prioridad MAXIMO')
}  