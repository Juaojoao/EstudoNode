var endereco = document.getElementById('logradouro')
var bairro   = document.getElementById('bairro')
var cidade   = document.getElementById('cidade')
var uf       = document.getElementById('uf')
var msgAlert = document.getElementById('erro')

async function buscaEndereco(cep){    

    try{
        const viaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const viaCepJson = await viaCep.json();

        if(viaCepJson.erro) throw Error('CEP não encontrado');
            
        endereco.value = viaCepJson.logradouro
        bairro.value = viaCepJson.bairro
        cidade.value = viaCepJson.localidade
        uf.value = viaCepJson.uf
        addSucess()
        
        console.log(viaCepJson);
    }catch(erro){
        addErro()
        console.log("CEP invalido " + erro);
    }
}

function addErro(){
    msgAlert.style.display = 'block';
    msgAlert.innerHTML = `<p>CEP não encontrado</p>`

    setTimeout(() => {
        msgAlert.style.display = 'none';
    }, 4000);
}

function addSucess(){
    msgAlert.classList.add('sucess')
    msgAlert.style.display = 'block';
    msgAlert.innerHTML = `<p>CEP encontrado</p>`

    endereco.classList.add('sucessInput')
    bairro.classList.add('sucessInput')
    cidade.classList.add('sucessInput')
    uf.classList.add('sucessInput')
    cep.classList.add('sucessInput')

    setTimeout(() => {
        msgAlert.style.display = 'none';
    }, 4000);
}

cep = document.getElementById('cep')
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value))