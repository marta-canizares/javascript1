

////////////////////////////+

const miInfo2 = 'Marta'
const div = document.getElementById('nickname');
console.log(div)

div.innerHTML = miInfo2;

//////////////////////////////////////
const listas = document.querySelectorAll('#lista > span');
console.log(listas)

const miInfo = ['Marta', 'Favoritos', 'Castelldefels']

let cont2 = 0;
for (let lista of listas) {
    lista.innerText = miInfo[cont2++]
}
