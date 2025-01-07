//Enunciado:
//Crie um objeto Produto com os atributos nome, preco e estoque. Adicione um método
//verificarEstoque() que exiba "Ainda restam [estoque] unidades de [nome]".

const produto = {
    nome: "Arroz",
    preco: 10,
    estoque: 15
}

function verificarEstoque() {
    console.log(`Ainda restam ${produto.estoque}, unidades de ${produto.nome}.`)
}

verificarEstoque()