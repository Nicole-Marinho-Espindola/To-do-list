//Deletar um elemento ao apertar o icone de lixeira
function delet(){

    const deleteItem = document.getElementsByClassName('card-item');

    for (let i = 0; i < deleteItem.length; i++){

        deleteItem[i].remove();     
    }
}

//Adicionar um novo elemento após digitar no input "add a new thing"

function add(){
    
}