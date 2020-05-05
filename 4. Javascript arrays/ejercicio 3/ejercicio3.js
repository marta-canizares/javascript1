const personas = [
    { 'nombre': 'Marco Aurelio', 'edad': 59, 'ocupacion': 'emperador' },
    { 'nombre': 'Ada Lovelace', 'edad': 36, 'ocupacion': 'primera programadora de la historia' },
    { 'nombre': 'Aragorn Rey de Gondor', 'edad': 210, 'ocupacion': 'Rey' },
    { 'nombre': 'Jeff Bezos', 'edad': 55, 'ocupacion': 'Fundador de Amazon' }
]

// console.log(personas[0]['nombre']);



for (let persona of personas) {
    console.log(persona)
    console.log(persona['nombre']);
}


const nuevos_personajes = []

for (let persona of personas) {
    console.log(persona['nombre'])

    if (persona < 50) {
        nuevos_personajes.push(persona)
    }
}

console.log(nuevos_personajes)

