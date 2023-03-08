// Descrição: Utilizando o Fetch 

async function start(){
    const url = await fetch("https://api.github.com/users/Juaojoao");
    const response = await url.json();
    const repos = await fetch(response.repos_url);
    const reposJson = await repos.json();
    console.log(reposJson);
}

start();