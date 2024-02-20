//Deletar um elemento ao apertar o icone de lixeira
function delet(icon){

    const item = icon.parentNode;

    item.remove();
}

//Adicionar um novo elemento após digitar no input "add a new thing"

function add(){
    
    const input = document.getElementById('addTask');

    //Validação do input

    if(!input.value){

        Swal.fire({
            title: "Deseja enviar seu campo em branco?",
            text: "por favor, preencha o campo para adicionar uma nova tarefa a lista!",
            icon: "question"
          });

    }else{
        let values = JSON.parse();//converte uma string json para um obj javascript
    }
}