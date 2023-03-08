// Usado a dependencia AXIOS no CodeSandBOx
import axios from "axios";

/*

Utilizando o Fetch:
fetch("https://api.github.com/users/Juaojoao")
  .then((resposta) => resposta.json())
  .then((data) => fetch(data.repos_url))
  .then((resp) => resp.json())
  .then((d) => console.log(d))

*/

//Utilizando o AXIOS
axios
  .get("https://api.github.com/users/Juaojoao")
  .then((resposta) => axios.get(resposta.data.repos_url))
  .then((repos) => console.log(repos.data));

// Aqui me retorna o repositorio do meu usuario no github.