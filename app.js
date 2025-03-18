let listaNomes = [];

function adicionarAmigo(){
    let nomes = document.getElementById('amigo');
    let nome = nomes.value;
    let lista = document.getElementById('listaAmigos');

    if (nome == ''){
        alert("Por favor, insira um nome.");
        return;
    }
    listaNomes.push(nome);
        nomes.value = '';
}