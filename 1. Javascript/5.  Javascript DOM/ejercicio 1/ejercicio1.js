/* c) Reemplace cada uno de los span (nickname, favorites, hometown) con su propia información. */

const listas = document.querySelectorAll('.lista span');
console.log(listas)

const miInfo = ['Marta', 'Pasear', 'Castelldefels']

let cont = 0;
for (let lista of listas) {
    lista.innerText = miInfo[cont++]
}

/* d) Repetir para cada <li> cambiando la clase a "listitem".
Agregue una etiqueta de estilo STYLE que establezca una regla en "listitem" para que el color sea rojo.*/

listas[0].className = listas[0].className + 'listitem';
listas[1].className = listas[1].className + 'listitem';
listas[2].className = listas[2].className + 'listitem';


/* e) Cree un nuevo elemento img y establezca su atributo src en una imagen suya.
Añade este elemento a la página  */

let nuevaDiv = document.createElement('div');
document.body.appendChild(nuevaDiv);
let nuevaImagen = document.createElement('img');
nuevaImagen.setAttribute('src', './imagenes/imagen_2.jpg');
nuevaDiv.appendChild(nuevaImagen);



// *****HE AÑADIDO UNA IMAGEN AL HTML Y LA HE SUSTITUIDO POR OTRA******
/*
function cambiarFoto(pNumero) {
    const img = document.querySelector('div img')
    img.src = `./imagenes/imagen_${pNumero}.jpg`
}
cambiarFoto('2') */
