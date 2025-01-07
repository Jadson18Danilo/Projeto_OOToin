// Enunciado:
//Crie um objeto Pessoa que tenha os atributos nome e idade, e um método apresentar()
//que exiba no console uma mensagem como "Olá, meu nome é [nome] e tenho [idade] anos".

const pessoa = {
    nome: "Iza",
    idade: 15
}

function exibir() {
    console.log(`Olá meu nome ${pessoa.nome} e tenho ${pessoa.idade} anos.`)
}

exibir()