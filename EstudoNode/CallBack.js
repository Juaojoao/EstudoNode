// O JavaScript consegue passar qualquer dado em uma função.
// CONCEITO DE CALLBACK

function rodardados(dado){
    console.log('Rodando o Primeiro Dado');
    console.log('Rodando o Segundo Dado');
    console.log(dado());
}

// rodardados(1);
// rodardados(true)
// rodardados({nome: "João Vitor", Idade: 21})

rodardados(()=>{
    return "Rodando o Terceiro Dado";
})