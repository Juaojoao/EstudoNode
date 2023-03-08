//O fetch é uma promise "imbutida" onde o argumento é o link da api
//Utilizei o then para transforma a minha resposta em json() e em seguida dei o fetch
//no objeto da api.

fetch("https://api.github.com/users/Juaojoao")
  .then((resposta) => resposta.json())
  .then((data) => fetch(data.repos_url))
  .then((resp) => resp.json())
  .then((d) => console.log(d))