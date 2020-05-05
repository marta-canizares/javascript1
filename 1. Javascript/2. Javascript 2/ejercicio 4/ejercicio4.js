const animales = ["elefante", "perro", "ballena"];
const peso = [5000, 50, 20000];

for (let i = 0; i < peso.length; i++) {
    if (peso[i] >= 1000) {
        alert(`Animales Grandes ${animales[i]}`)
    }
}
