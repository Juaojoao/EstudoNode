const express = require('express')
const app = express()

// Importando o arquivo de rotas
app.listen('3000', ()=>{
    console.log("LocalHost:3000")
})

// Express.json() é um método do express que converte o corpo da requisição para JSON
app.use(express.json())

// -- GET: Receber dados
// Rota do tipo GET para a página inicial
app.route('/').get( (req, res)=>{
    res.send("Hello World")
});

// -- POST: Enviar dados
// Toda requisição consumida por um API necessita utilizar o req e res.
app.route('/').post( (req, res)=>{
    console.log(req.body)
    res.send(req.body)
});

// -- PUT: Alterar dados
// Variável que será alterada pelo método PUT
let name = "Lucas Matheus"

// Rota do tipo PUT para a página inicial
app.route('/').put( (req, res) => {
    name = req.body.name
    res.send(name)
    console.log(name)
});
// 
// -- DELETE: Deletar dados
app.route('/:inf').delete( (req, res) =>{
    res.send(req.params.inf)
    console.log(req.params.inf)
})

//params: Parâmetros da URL