//Enunciado:
//Crie um objeto Livro com os atributos titulo, autor, e anoPublicacao. Adicione um
//método resumo() que exiba uma mensagem como "O livro [titulo] foi escrito por [autor] em
//[anoPublicacao]".

const livro = {
    titulo: "A Sagrada",
    autor: "Zeca Alves",
    anoPublicacao: 1899
}

function resumo() {
    console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`)
}

resumo()
