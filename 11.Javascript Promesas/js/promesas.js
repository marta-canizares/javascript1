// PROMESAS //
// PROMESA CONTACTOS//
function getContactos(pPage) {
    const descargaContactos = new Promise((resolve, reject) => {
        const url = `https://reqres.in/api/users?page=${pPage}`


        let peticion = new XMLHttpRequest();
        peticion.open('GET', url, true);
        peticion.send();

        peticion.addEventListener('load', (event) => {
            if (event.target.status == 200) {
                let respuesta = JSON.parse(event.target.responseText);
                resolve(respuesta.data)
            } else {
                reject('No se ha podido cargar el contenido' + event.target.statusText)
            }
        })

    })
    return descargaContactos
}


// PROMESA CONTACTO//
function getContacto(pId) {
    const descargaContacto = new Promise((resolve, reject) => {
        const url = `https://reqres.in/api/users/${pId}`

        let peticion = new XMLHttpRequest();
        peticion.open('GET', url, true);
        peticion.send();

        peticion.addEventListener('load', (event) => {
            if (event.target.status == 200) {
                let respuesta = JSON.parse(event.target.responseText);
                resolve(respuesta.data)
            } else {
                reject('No se ha podido cargar el contenido' + event.target.statusText)
            }
        })

    })
    return descargaContacto
}

// FUNCIONES //
// IMPRIMIR CONTACTO //
function imprimirContacto(pContacto) {
    const lContacto = document.querySelector('.contacto')
    lContacto.innerHTML = ''
    for (contacto of pContacto) {
        const article = document.createElement('art')
        const div1 = document.createElement('div')
        const img = document.createElement('img')
        img.src = contacto.avatar
        const div2 = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.dataset.id = contacto.id
        h3.innerHTML = `${contacto.first_name} ${contacto.last_name}`

        const p = document.createElement('p')
        const a = document.createElement('a')
        a.innerHTML = contacto.email
        a.innerHTML = contacto.email

        div1.appendChild(img)
        p.appendChild(a)
        div2.appendChild(p)
        div2.appendChild(h3)


        article.appendChild(div1)
        article.appendChild(div2)
        lContacto.appendChild(article)
    }
}


// IMPRIMIR LISTA DE CONTACTOS POR PAGINA //
function imprimirContactos(pListaContactos) {
    const agendaContactos = document.querySelector('.contactos')
    agendaContactos.innerHTML = ''
    for (contacto of pListaContactos) {
        const article = document.createElement('art')
        const div1 = document.createElement('div')
        const img = document.createElement('img')
        img.src = contacto.avatar
        const div2 = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.dataset.id = contacto.id
        h3.innerHTML = `${contacto.first_name} ${contacto.last_name}`

        div1.appendChild(img)
        div2.appendChild(h3)

        article.appendChild(div1)
        article.appendChild(div2)
        agendaContactos.appendChild(article)
    }

    const h3s = document.querySelectorAll('h3')
    for (h3 of h3s) {
        h3.addEventListener('click', (event) => {
            let id = 1; // bucar el id de event.target.dataset.id
            getContacto(id)
                .then(contacto => {
                    imprimirContacto(contacto.target.dataset.id);
                })
                .catch(error => {
                    console.log(error);
                });
        })

    };

}


getContactos(1)
    .then(contactos => {
        imprimirContactos(contactos);
    })
    .catch(error => {
        console.log(error);
    });


getContacto(1)
    .then(contacto => {
        imprimirContacto(contacto);
    })
    .catch(error => {
        console.log(error);
    });


// EVENTO BOTON 1 //
const btn1 = document.getElementById('page1')
btn1.addEventListener('click', () => {
    console.log('presionas el boton')
    getContactos(1)
        .then(contactos => {
            imprimirContactos(contactos);
        })
        .catch(error => {
            console.log(error);
        });
})

// EVENTO BOTON 2 //
const btn2 = document.getElementById('page2')
btn2.addEventListener('click', () => {
    console.log('presionas el boton 2')
    getContactos(2)
        .then(contactos => {
            imprimirContactos(contactos);
        })
        .catch(error => {
            console.log(error);
        });
})

