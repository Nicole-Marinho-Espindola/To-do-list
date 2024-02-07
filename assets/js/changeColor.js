const checkboxes = document.getElementsByClassName('input-checkbox'); // adiciona o array retornado a classe checkboxes
const inputTexts = document.getElementsByClassName('input-checkbox'); // adiciona o array retornado a classe inputTexts

for (let i = 0; i < checkboxes.length && inputTexts.length; i++) { //cria um loop para percorrer o array de checkboxes e inputTexts

    checkboxes[i].addEventListener('click', function(event){ // adiciona um evento de click e cria a função de evento

        const position = Array.from(checkboxes).indexOf(event.target); //a partir da variável position busca dentro do array checkboxes o index do evento em clique
        document.querySelectorAll(".card-item")[position].classList.toggle("card-item-purple"); 
        //encontra a classe "card-item" e a partir da posição encontrada adiciona e retira a classe "card-item-purple"
    });

    inputTexts[i].addEventListener('click', function(event){ // adiciona um evento de click e cria a função de evento

        const position = Array.from(inputTexts).indexOf(event.target); //a partir da variável position busca dentro do array checkboxes o index do evento em clique
        document.querySelectorAll(".input-text")[position].classList.toggle("input-text-purple");
        //encontra a classe "input-text" e a partir da posição encontrada adiciona e retira a classe "input-text-purple"
    });
}


