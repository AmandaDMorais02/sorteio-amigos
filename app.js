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
    lista.innerHTML = '';
    for (let i=0; i<listaNomes.length; i++){
        let li = document.createElement('li');
        li.textContent = listaNomes[i];
        lista.appendChild(li);
    }    
        nomes.value = '';
} 

function sortearAmigo(){
    if (listaNomes.length == 0){
        alert('A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.');
        return;
    }
    let amigoAleatorio = Math.floor(Math.random()*listaNomes.length);
    let amigoSorteado = listaNomes[amigoAleatorio];

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}