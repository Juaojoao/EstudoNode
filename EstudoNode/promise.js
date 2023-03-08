//TODOS SÃO CHAMADOS COM ARROW FUNCTION
let aceitar = false
console.log('Chamando o Uber');

// o promise é chamado em uma instância, como parametros
// sempre tem que ter a solução como primeiro e o erro como segundo.
const promise = new Promise((result, reject) =>{

    if(aceitar){
        return result('Carro aceito')
    }else{
        return reject('Carro rejeitado')
    }
})

console.log('Aguardando..');

promise
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('pedido finalizado'))

// Aqui eu puxo a cosnt promise e coloco o "then (Então)" para dar o resultado
// O "catch" é usado para puxar um erro, caso tenha.
// Finally é usado para o final da operação, seja ele resultado ou erro.