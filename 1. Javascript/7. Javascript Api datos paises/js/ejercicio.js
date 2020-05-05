const url = 'https://restcountries.eu/rest/v2/all';
const seccionPaises = document.getElementById('seccionPaises')  // este es el contenedor donde va el contenido, los li
const btnFiltroPaises = document.getElementById('btnFiltroPaises')
/*
const req = new XMLHttpRequest();
req.open('GET', url, true);
req.send();
req.addEventListener('load', (event) => {
    const responseText = event.target.responseText;  // me lo devuelve la informacion en formato string
    const pais = JSON.parse(responseText);       // tranformo el string a un objeto
    console.log(pais)
    pintarPaises(pais);
});
*/

// FUNCION GENERICA QUE PINTA PAISES
function pintarPaises(pPais) {
    seccionPaises.innerText = '';
    for (let pais of pPais) {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.innerText = pais.name;

        const pflag = document.createElement('img');
        pflag.src = pais.flag;

        const pCodes = document.createElement('p');
        pCodes.innerText = `Codigo telefonico: ${pais.callingCodes} `;

        const pCapital = document.createElement('p');
        pCapital.innerText = `Capital: ${pais.capital} `;

        const pPoblacion = document.createElement('p');
        pPoblacion.innerText = `Poblacion: ${pais.population} `;

        const pGini = document.createElement('p');
        pGini.innerText = `Coeficiente de gini: ${pais.gini} `;

        const pNativeName = document.createElement('p');
        pNativeName.innerText = `Nombre lengua nativa: ${pais.nativeName} `;

        const pSymbol = document.createElement('p');
        pSymbol.innerText = `Simbolo de la moneda: ${(pais.currencies[0].symbol)} `;

        article.appendChild(h2);
        article.appendChild(pflag);
        article.appendChild(pCodes);
        article.appendChild(pCapital);
        article.appendChild(pPoblacion);
        article.appendChild(pGini);
        article.appendChild(pNativeName);
        article.appendChild(pSymbol);

        seccionPaises.appendChild(article);
    }
}


// EVENTO CLICK //

btnFiltroPaises.addEventListener('click', (event) => {
    const inputNombre = document.getElementById('inputNombre')
    const paisSeleccionado = inputNombre.value.toLowerCase();
    //console.log(paisSeleccionado)

    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.send();
    req.addEventListener('load', (event) => {

        const responseText = event.target.responseText;  // me lo devuelve la informacion en formato string
        const paises = JSON.parse(responseText);      // tranformo el string a un objeto
        //console.log(paises)

        const arrFiltrado = paises.filter((pais) => {
            const paisFiltrado = pais.name.toLowerCase();
            console.log(paisFiltrado);
            return paisFiltrado.includes(paisSeleccionado);
        })
        pintarPaises(arrFiltrado);
    });

})

