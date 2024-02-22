//Deletar um elemento ao apertar o icone de lixeira
function delet(icon){

    const item = icon.parentNode;

    item.remove();
}

//Adicionar um novo elemento após digitar no input "add a new thing"

const localStorageKey = 'to-do-list';

function add() {

    let input = document.getElementById('addTask');
    let inputValue = input.value.trim(); // Remova espaços em branco extras

    if (!inputValue) {

        Swal.fire({
            title: "Campo em branco",
            text: "Por favor, preencha o campo para adicionar uma nova tarefa à lista!",
            icon: "warning",
            font: "sans-serif"
        });

    } else {
        // Clonar a div modelo
        let newItem = document.querySelector('.card-item').cloneNode(true); //cloneNode(true), significa que todos os descendentes da
                                                                            // div card-item tbm serão copiados

        // Modificar o valor do input dentro da nova div
        newItem.querySelector('.input-text').value = inputValue;

        // Adicionar nova div à div card-body
        let cardBody = document.querySelector('.card-body');
        cardBody.appendChild(newItem);

        // Salvar no localstorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: inputValue
        });

        localStorage.setItem(localStorageKey, JSON.stringify(values));
    }
}
