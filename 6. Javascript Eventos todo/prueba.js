function imprimirTarea(pTarea) {
    const divHeader = document.createElement('div');
    divHeader.classList.add('card-header');
    divHeader.innerText = pTarea.nombre;

    const divBody = document.createElement('div');
    divBody.classList.add('card-body');

    const btnEdit = document.createElement('button')
    btnEdit.classList.add('btn', 'btn-info', 'btn-sm', 'mr-2')
    btnEdit.innerText = 'Edit';
    divBody.appendChild(btnEdit);


    const btnBorrar = document.createElement('button')
    btnBorrar.classList.add('btn', 'btn-danger', 'btn-sm')
    btnBorrar.innerText = 'Delete';
    btnBorrar.addEventListener('click', (event) => {
        const card = event.target.parentNode.parentNode
        listaTareas.removeChild(card)

    })
    divBody.appendChild(btnBorrar);

    const divCard = document.createElement('div')
    divCard.classList.add('card', "mt-2")

    divCard.appendChild(divHeader)
    divCard.appendChild(divBody)

    listaTareas.appendChild(divCard);
}
