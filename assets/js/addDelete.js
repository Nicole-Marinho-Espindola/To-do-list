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
    }

    else {

        let newDiv = document.createElement('div');
        newDiv.classList.add('card-item');
    
        let newInput = document.createElement('input');
        newInput.setAttribute('type', 'checkbox');
        newInput.classList.add('input-checkbox');
        newDiv.appendChild(newInput);
    
        let newInputText = document.createElement('input');
        newInputText.setAttribute('type', 'text');
        newInputText.classList.add('input-text');
        newInputText.value = inputValue;
        newDiv.appendChild(newInputText);

        let newIcon = document.createElement('i');
        newIcon.classList.add('fa-solid', 'fa-trash', 'icon');
        newIcon.setAttribute('onclick', 'delet(this)');
        newDiv.appendChild(newIcon);
    
        let cardBody = document.getElementById('cardBody');
        cardBody.appendChild(newDiv);
    
        // Salvar no localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: inputValue
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values));
    }
    
    // // Verifica se há dados no Local Storage
    // if(localStorage.getItem('localStorageKey')) {
    //     // Se houver dados, adiciona-os à página
    //     var newDiv = localStorage.getItem('div');
    //     document.getElementById('idDoElemento').innerHTML = newDiv;

    //     var item = localStorage.getItem('nomeDoItem');
    //     document.getElementById('idDoElemento').innerHTML = item;
        
    //     var item = localStorage.getItem('nomeDoItem');
    //     document.getElementById('idDoElemento').innerHTML = item;
    // }
}
