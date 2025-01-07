//Enunciado:
//Crie um objeto Cachorro com os atributos nome e raca. Adicione um método latir() que
//exiba a mensagem "O cachorro [nome] está latindo!".

const cachorro = {
    nome: "Skol",
    raca: "Caramelo"
}

function latir() {
    console.log(`O cachorro ${cachorro.nome} está latindo!`)
}

latir()