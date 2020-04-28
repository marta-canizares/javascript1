var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg'

    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670920792.jpg'
    }];

/**
 * Iterar a través de los libros. Para cada libro, cree un elemento p con el título y el autor del libro y agrégalo a la página
 *
 * Use un ul y li para mostrar los libros
 *
 * agregue una propiedad a cada libro con la URL de la portada del libro y agregue un elemento img para cada libro en la página
 *
 * cambia el estilo del libro dependiendo de si lo has leído o no.
 *
 */


let c = 0;

for (let book of books) {

    document.write(`<p><ul><li id='book_${c}'><strong>Title:</strong> ${book.title} <strong>Author:</strong> ${book.author} </li> </ul></p>`);
    c++;
}

// añadimos un ID 'id='book_${c}' para poder poner el style, ya que al no ser elementos html como tal si no, no es posible
for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead === true)
        document.getElementById('book_' + i).style.color = 'blue';
}

// imagenes, añadir portada para los titulos

let nuevaDiv = document.createElement('div');
document.body.appendChild(nuevaDiv);
let nuevaImagen = document.createElement('img');
nuevaImagen.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg');
nuevaDiv.appendChild(nuevaImagen);


let nuevaDiv2 = document.createElement('div');
document.body.appendChild(nuevaDiv2);
let nuevaImagen2 = document.createElement('img');
nuevaImagen2.setAttribute('src', 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670920792.jpg');
nuevaDiv2.appendChild(nuevaImagen2);

