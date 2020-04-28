function celsiusToFarenheit(gradosCelsius) {
    const gradosFarenheit = ((gradosCelsius * 9 / 5) + 32);
    console.log(gradosFarenheit)
}

celsiusToFarenheit(25)
celsiusToFarenheit(50)

function fahrenheitToCelsius(gradosFarenheit) {
    const gradosCelsius = ((gradosFarenheit - 32) * 5 / 9);
    console.log(gradosCelsius)
}

fahrenheitToCelsius(70)
fahrenheitToCelsius(80)





function convertTemperature(grados = 10, medida) {
    switch (medida) {
        case 'celsius':
            celsiusToFarenheit();
            break;
        case 'farenheit':
            fahrenheitToCelsius();
            break;
        default:
            console.log('la unidad de medida no es correcta')
    }
}

console.log(convertTemperature(25, 'celsius'));
console.log(convertTemperature(70, 'farenheit'));
