// Como Funciona o callback com API

//Função padrão do NODE.JS
https = require ('https')
//Chamar a API
API = 'https://jsonplaceholder.typicode.com/users?_limit=2';

//GET é uma função do JavaScript que pega o conteúdo.
https.get(API, resposta => {
    console.log(resposta.statusCode);
})

console.log('Conectando API');