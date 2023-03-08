// Usado a dependencia AXIOS no CodeSandBOx
import axios from "axios";


// Aqui estou fazendo uma requisição para a API do github e retornando o ID do meu usuario e a quantidade de repositorios que eu tenho.
// fazendo duas requisições ao mesmo tempo
axios
  .all([
    axios.get("https://api.github.com/users/Juaojoao"),
    axios.get("https://api.github.com/users/Juaojoao/repos")
  ])
  .then((resposta) => {
    console.log(resposta[0].data.id);
    console.log(resposta[1].data.length);
  })
  .catch((e) => console.log(e.message));